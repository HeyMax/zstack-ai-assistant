# ZStack MCP Server 配置、安全与部署

## 环境变量配置

### ZStack 连接配置

| 环境变量 | 必填 | 默认值 | 说明 |
|----------|------|--------|------|
| `ZSTACK_API_URL` | 是 | `http://localhost:8080` | ZStack 管理节点 API 地址 |
| `ZSTACK_ACCOUNT` | 条件 | `admin` | 账户名（用户名密码认证时） |
| `ZSTACK_PASSWORD` | 条件 | — | 密码（明文，客户端会自动 SHA512 加密） |
| `ZSTACK_SESSION_ID` | 条件 | — | 直接使用的 Session UUID（优先级高于用户名密码） |
| `ZSTACK_ALLOW_ALL_API` | 否 | `false` | 是否允许写操作 API |

### 认证方式

支持两种认证方式，按优先级排列：

1. **Session ID 直传** (`ZSTACK_SESSION_ID`): 直接使用已有的 Session UUID，跳过登录流程。适合外部系统已管理 Session 的场景。
   - 缺点: Session 过期后无法自动刷新，需手动更新

2. **用户名密码** (`ZSTACK_ACCOUNT` + `ZSTACK_PASSWORD`): 自动调用 `APILogInByAccountMsg` 登录获取 Session。
   - 密码会自动进行 SHA512 哈希后发送
   - Session 过期时会自动重新登录

> 如果同时设置了 `ZSTACK_SESSION_ID` 和用户名密码，优先使用 Session ID。

### 传输模式配置

| 环境变量 | 默认值 | 说明 | 兼容变量 |
|----------|--------|------|----------|
| `MCP_TRANSPORT` | `stdio` | 传输模式: `stdio`/`sse`/`streamable-http` | `FASTMCP_TRANSPORT` |
| `MCP_HOST` | — | 绑定地址 | `FASTMCP_HOST` |
| `MCP_PORT` | — | 端口 | `FASTMCP_PORT` |
| `MCP_PATH` | `/sse` | SSE 挂载路径 | `FASTMCP_MOUNT_PATH` |
| `MCP_STREAMABLE_PATH` | `/mcp` | Streamable HTTP 路径 | `FASTMCP_STREAMABLE_HTTP_PATH` |

命令行参数优先级高于环境变量。

## 安全模型

### API 访问控制

**默认安全策略: 只允许只读 API。**

只读 API 通过前缀识别，以下前缀的 API 视为只读:

| 前缀 | 类型 | 示例 |
|------|------|------|
| `Query` | 查询 | `QueryVmInstance`, `QueryHost` |
| `Get` | 获取 | `GetMetricData`, `GetVersion` |
| `List` | 列表 | `ListVmNic` |
| `Describe` | 描述 | `DescribeGlobalConfig` |
| `Check` | 检查 | `CheckApiPermission` |
| `Count` | 计数 | `CountInstances` |
| `Search` | 搜索 | `SearchVmInstance` |
| `Calculate` | 计算 | `CalculateAccountSpending` |
| `Preview` | 预览 | `PreviewResource` |
| `Validate` | 验证 | `ValidateConfig` |
| `Test` | 测试 | `TestConnection` |

**启用写操作**:

```bash
export ZSTACK_ALLOW_ALL_API="true"  # 接受 true/1/yes/on
```

> ⚠️ 启用后 AI 可以执行创建、删除、修改等破坏性操作，需谨慎使用。

### Session 管理

- **自动登录**: 首次调用需要认证的 API 时，自动使用配置的用户名密码登录
- **Session 过期自动刷新**: 当 API 返回 Session 无效错误（错误码 `ID.1001` 或 `ORG_ZSTACK_IDENTITY_10020`）时，如果使用的是用户名密码认证，会自动重新登录获取新 Session
- **Session ID 模式无法自动刷新**: 直传 Session ID 过期后会返回错误提示

### 错误码识别

Session 失效的错误码:
- `ID.1001`
- `ORG_ZSTACK_IDENTITY_10020`
- 响应中包含 "session" + "invalid"/"expired" 关键词

## 部署

### 安装

```bash
# 使用 pip
pip install -e .

# 使用 uv
uv pip install -e .

# 开发模式
pip install -e ".[dev]"
```

### 本地运行

```bash
# 最简单的方式
export ZSTACK_API_URL="http://your-zstack:8080"
export ZSTACK_ACCOUNT="admin"
export ZSTACK_PASSWORD="your-password"
zstack-mcp
```

### 作为远程服务部署

```bash
# SSE 模式，供多个客户端连接
export ZSTACK_API_URL="http://your-zstack:8080"
export ZSTACK_SESSION_ID="your-session-uuid"
zstack-mcp --transport sse --host 0.0.0.0 --port 8000
# 客户端连接: http://your-server:8000/sse
```

### DNS Rebinding 保护

当使用 SSE 或 Streamable HTTP 模式时:
- 本地监听（`127.0.0.1`/`localhost`/`::1`）时会自动关闭 DNS rebinding 保护，允许浏览器扩展等发送非标准 Origin
- 远程监听时会自动将 host 加入允许列表

## ZStack API 客户端内部机制

### 请求格式

所有 API 请求发送到 `{ZSTACK_API_URL}/zstack/api/`，请求体格式:

```json
{
  "org.zstack.header.vm.APIQueryVmInstanceMsg": {
    "session": {"uuid": "session-uuid"},
    "conditions": [...]
  }
}
```

### 响应解析

ZStack API 有两种响应格式:

1. **直接返回**: `{"org.zstack.xxx.Reply": {...}}`
2. **包装返回** (异步 API): `{"state": "Done|Error|Processing", "result": "{...json string...}"}`

客户端会自动:
- 解析包装格式中的 JSON 字符串
- 提取 Reply 内层数据
- 对异步 API 进行 Job 轮询（间隔 1 秒，最多轮询 300 次 = 5 分钟超时）

### 监控数据查询

监控数据通过 `APIGetMetricDataMsg` 查询，客户端自动处理:
- 时间格式规范化: ISO 字符串/毫秒时间戳 → 秒级时间戳
- Labels 格式统一: dict/list[dict]/list[str] → list[str]
- Period 格式规范化: 字符串 → 整数

## 数据文件

| 文件 | 大小 | 说明 |
|------|------|------|
| `data/api_docs.json` | ~2MB | 所有 ZStack API 定义，含参数、分类、调用类型等 |
| `data/zs_all_metric_metadata.json` | ~490KB | 所有监控指标元数据，含名称、描述、命名空间、标签 |

这些文件在服务器启动时懒加载，构建为内存中的倒排索引。数据目录按以下优先级查找:
1. `src/zstack_mcp/../../data`（源码相对路径）
2. 更上一级目录的 `data`
3. 当前工作目录的 `data`
