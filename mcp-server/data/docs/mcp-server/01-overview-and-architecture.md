# ZStack MCP Server 概览与架构

## 项目简介

ZStack MCP Server 是一个基于 MCP (Model Context Protocol) 协议的服务器，让 AI 助手能够动态查询和调用 ZStack Cloud 平台的 2000+ API。它充当 AI 与 ZStack 云平台之间的桥梁，提供 API 搜索、API 执行、监控指标搜索、监控数据获取等核心能力。

- **项目名称**: zstack-mcp-server
- **版本**: 0.1.0
- **许可证**: MIT
- **Python 要求**: >= 3.11
- **核心依赖**: `mcp[cli]>=1.0.0`, `httpx>=0.27.0`

## 架构概述

### 核心模块

```
src/zstack_mcp/
├── server.py          # MCP Server 主入口，注册所有 MCP Tools
├── api_search.py      # API 搜索引擎（倒排索引 + 驼峰拆分）
├── metric_search.py   # 监控指标搜索引擎（倒排索引 + 驼峰拆分）
├── zstack_client.py   # ZStack API HTTP 客户端（认证、执行、轮询）
└── __init__.py
data/
├── api_docs.json                  # ZStack API 元数据（约 2000+ API 定义）
└── zs_all_metric_metadata.json    # ZStack 监控指标元数据
```

### 组件关系

1. **FastMCP Server (`server.py`)**: 基于 `mcp.server.fastmcp.FastMCP` 构建，注册了 6 个 MCP Tool。负责参数校验、规范化、错误提示，以及安全策略的执行。
2. **API 搜索索引 (`api_search.py`)**: 从 `api_docs.json` 加载所有 API 元数据，通过驼峰拆分建立倒排索引，支持模糊搜索和评分排序。
3. **监控指标搜索索引 (`metric_search.py`)**: 从 `zs_all_metric_metadata.json` 加载监控指标，同样使用驼峰拆分的倒排索引。
4. **ZStack 客户端 (`zstack_client.py`)**: 异步 HTTP 客户端，处理认证（用户名密码或 SessionID）、同步/异步 API 调用、Job 轮询、监控数据查询等。

### 数据流

```
用户自然语言提问
  → AI (Claude/GPT 等)
    → MCP Tool 调用 (search_api / describe_api / execute_api / ...)
      → server.py 参数校验 + 规范化
        → api_search / metric_search (本地索引查询)
        → zstack_client (远程 ZStack API 调用)
      → JSON 结果返回给 AI
    → AI 整理成自然语言回答
  → 用户
```

## 传输模式

MCP Server 支持三种传输模式：

| 模式 | 说明 | 适用场景 |
|------|------|----------|
| `stdio` (默认) | 标准输入/输出通信 | Claude Desktop 本地集成 |
| `sse` | Server-Sent Events，HTTP 长连接 | 远程/Web 客户端接入 |
| `streamable-http` | Streamable HTTP 模式 | 新版 MCP 客户端 |

### 启动方式

```bash
# stdio 模式（默认）
zstack-mcp
python -m zstack_mcp.server

# SSE 模式
zstack-mcp --transport sse --host 0.0.0.0 --port 8000

# Streamable HTTP 模式
zstack-mcp --transport streamable-http --host 0.0.0.0 --port 8000 --streamable-path /mcp
```

所有网络参数均支持通过环境变量配置：

| 环境变量 | 作用 | 兼容变量 |
|----------|------|----------|
| `MCP_TRANSPORT` | 传输模式 | `FASTMCP_TRANSPORT` |
| `MCP_HOST` | 绑定地址 | `FASTMCP_HOST` |
| `MCP_PORT` | 端口 | `FASTMCP_PORT` |
| `MCP_PATH` | SSE 挂载路径 | `FASTMCP_MOUNT_PATH` |
| `MCP_STREAMABLE_PATH` | Streamable HTTP 路径 | `FASTMCP_STREAMABLE_HTTP_PATH` |

## 搜索引擎原理

API 搜索和指标搜索共享相同的核心设计：

### 驼峰拆分 (CamelCase Splitting)

将标识符按驼峰大小写拆分为小写 token：
- `QueryVmInstance` → `["query", "vm", "instance"]`
- `CPUUsedUtilization` → `["cpu", "used", "utilization"]`
- `GetMetricData` → `["get", "metric", "data"]`

### 倒排索引

每个 token 映射到包含该 token 的 API/指标集合。搜索时，对每个关键词查找匹配的 token（支持前缀匹配和包含匹配），然后取交集（API 搜索）或并集/交集（指标搜索，取决于 `match_mode`）。

### 评分规则

匹配评分从高到低：
1. **API 名称完全匹配**: 100 分
2. **API 名称包含关键词**: 10 分
3. **Token 完全匹配**: 2 分
4. **Token 前缀匹配**: 1.5 分
5. **Token 包含匹配**: 1 分
6. **描述中包含关键词**: 0.5 分
7. 名称越短（token 数越少）越优先（每个 token 扣 0.1 分）

指标搜索额外增加了 namespace 评分和 prefer_namespaces 优先排序机制。

## Claude Desktop 集成

在 `claude_desktop_config.json` 中配置：

```json
{
  "mcpServers": {
    "zstack": {
      "command": "python",
      "args": ["-m", "zstack_mcp.server"],
      "env": {
        "ZSTACK_API_URL": "http://your-zstack-server:8080",
        "ZSTACK_ACCOUNT": "admin",
        "ZSTACK_PASSWORD": "your-password",
        "ZSTACK_ALLOW_ALL_API": "false"
      }
    }
  }
}
```

也支持 SSE/Streamable HTTP 远程模式：

```json
{
  "mcpServers": {
    "zstack": {
      "transport": "sse",
      "url": "http://your-server:8000/sse"
    }
  }
}
```
