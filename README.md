# ZStack AI 智能运维助手

> ⚠️ **注意**：请使用 **release/v1.1** 分支的代码！master 分支为开发版本，可能存在未修复的 bug。

基于大语言模型的 ZStack 云平台智能运维助手，以 Chrome 浏览器扩展形式运行，通过自然语言对话实现云平台全生命周期管理。无需后端部署，即装即用。

## 下载说明

- ✅ **生产环境**：使用 `release/v1.1` 分支 → [下载 extension/](../tree/release/v1.1/extension)
- 🔧 **开发测试**：使用 `master` 分支

## 功能亮点

- **自然语言运维** — 用中文直接管理云平台，如"查看所有运行中的云主机"、"创建一台 4C8G 的 CentOS 云主机"
- **50+ 资源类型** — 覆盖计算、存储、网络、负载均衡、VPC、安全组、裸金属、弹性伸缩、监控告警等
- **多环境管理** — 同时接管多套 ZStack 环境，切换运维，连接成功后才保存
- **多平台支持** — ZStack / vSphere / Zaku（预留）
- **环境配置编辑** — 支持修改已保存环境的账号密码
- **ZQL 智能查询** — 自动使用 ZStack Query Language，精确统计、条件过滤、关联查询
- **双查询模式** — 精简模式（日常巡检）/ 全量模式（资源盘点）
- **流式响应** — 实时逐字输出，支持停止生成，思考过程可视化
- **Token 消耗统计** — 实时显示本次 + 累计 Token 消耗
- **8 家模型厂商** — Claude、GLM、GPT、DeepSeek、通义千问、MiniMax、Kimi、百炼 Coding，支持自定义代理
- **纯客户端** — 所有数据在浏览器本地处理，密码 SHA-512 哈希，不经过第三方

## 快速开始

1. 下载本仓库 `extension/` 目录
2. Chrome 打开 `chrome://extensions/`，开启"开发者模式"
3. 点击"加载已解压的扩展程序"，选择 `extension/` 目录
4. 点击扩展图标，在侧边栏完成配置：
   - ZStack API 地址（如 `http://172.24.0.254:8080`）
   - 账号密码
   - 选择 LLM 模型并配置 API Key

## 项目结构

```
├── README.md
├── RELEASE.md               # Release Notes
├── docs/                    # 文档
├── extension/               # Chrome 扩展源码
│   ├── manifest.json        # Manifest V3 配置
│   ├── background.js        # Service Worker
│   ├── sidepanel.html       # 侧边栏页面
│   ├── sidepanel.js         # 侧边栏逻辑
│   ├── sidepanel.css        # 样式
│   └── lib/
│       ├── llm.js           # LLM 引擎 + Tool Calling
│       ├── mcp-client.js    # MCP 协议客户端
│       ├── zstack.js        # ZStack API 客户端
│       ├── marked.min.js    # Markdown 渲染
│       └── purify.min.js    # XSS 防护
└── mcp-server/              # ZStack MCP Server（可选）
    ├── pyproject.toml       # Python 包配置
    ├── src/zstack_mcp/      # 服务端源码
    │   ├── server.py        # MCP Server 入口
    │   ├── api_search.py    # API 搜索引擎
    │   ├── metric_search.py # 监控指标搜索
    │   └── zstack_client.py # ZStack API 客户端
    └── data/                # API 文档和指标元数据
```

## 技术架构

```
用户 ──→ Chrome Side Panel ──→ LLM Engine ──→ OpenAI/Anthropic/MiniMax/Kimi API
                                    │
                                    ├──→ ZStack Client ──→ ZStack REST API + ZQL
                                    │
                                    └──→ MCP Client ──→ zstack-mcp-server ──→ ZStack API + ZWatch 监控
```

- 前端：原生 JS + CSS，零框架依赖
- LLM：OpenAI Chat Completions 兼容格式 + Anthropic Messages API + MiniMax API
- MCP：通过 Streamable HTTP 连接 zstack-mcp-server，扩展 API 发现和监控数据查询能力
- 渲染：marked.js + DOMPurify

## ZStack API 规范

助手严格遵循 ZStack 官方 RESTful API 规范：

- **API 版本**：/v1 开头
- **HTTP 方法**：GET（查询）、POST（创建）、PUT（修改/操作）、DELETE（删除）
- **认证**：登录获取 Session，Header 传递 `Authorization: OAuth {session-uuid}`
- **参数传递**：URL、Query String、HTTP Body
- **Action 调用**：`PUT /v1/{resource}/{uuid}/actions`，body: `{"actionName": {...}}`
- **查询条件**：=、!=、>、<、~=（模糊匹配）、is null、not null

## 支持的模型

| 厂商 | 模型 | Tool Calling |
|------|------|:---:|
| Anthropic | Claude Opus 4 / Sonnet 4 | ✅ |
| 智谱 AI | GLM-5 / GLM-4 系列 | ✅ |
| OpenAI | GPT-4o / GPT-4o-mini | ✅ |
| DeepSeek | DeepSeek-Chat | ✅ |
| 阿里通义 | Qwen-Plus / Qwen-Max | ✅ |
| MiniMax | MiniMax-M2.5 | ✅ |
| Kimi (Moonshot) | moonshot-v1-auto / v1-128k | ✅ |
| 阿里百炼 Coding | qwen3-coder-plus | ✅ |

## 对接 ZStack MCP Server（可选）

启用 MCP Server 后，AI 助手将获得额外能力：
- **API 智能搜索** — 不确定 API 时自动从 2000+ ZStack API 中查找
- **API 参数查阅** — 自动获取完整参数说明，减少调用错误
- **监控数据查询** — CPU/内存/网络使用率排名（Top N）
- **监控趋势分析** — 历史监控曲线数据

### 1. 启动 MCP Server

MCP Server 源码位于 `mcp-server/` 目录。

```bash
# 安装依赖（推荐使用 uv）
cd mcp-server
uv venv && source .venv/bin/activate
uv pip install -e .

# 启动（Streamable HTTP 模式，供 Chrome 扩展连接）
ZSTACK_API_URL="http://your-zstack-mn:8080" \
ZSTACK_ACCOUNT="admin" \
ZSTACK_PASSWORD="your-password" \
zstack-mcp --transport streamable-http --host 0.0.0.0 --port 8000
```

环境变量说明：

| 变量 | 说明 | 默认值 |
|------|------|--------|
| `ZSTACK_API_URL` | ZStack MN API 地址 | `http://localhost:8080` |
| `ZSTACK_ACCOUNT` | 登录账户 | `admin` |
| `ZSTACK_PASSWORD` | 登录密码 | - |
| `ZSTACK_SESSION_ID` | 直接传入 Session（优先级高于账号密码） | - |
| `ZSTACK_ALLOW_ALL_API` | 是否允许写操作（创建/删除等） | `false` |

### 2. 在扩展中启用 MCP

1. 打开设置面板 → **MCP** 标签页
2. 填入 Server 地址：`http://localhost:8000`（或远程地址）
3. 点击"测试连接"，连接成功后自动启用
4. 状态栏会显示 `MCP ✅`

### 3. MCP 提供的 6 个工具

| 工具 | 说明 | 典型场景 |
|------|------|---------|
| `search_api` | 关键词搜索 ZStack API | "帮我找快照相关的 API" |
| `describe_api` | 查看 API 详细参数 | 执行操作前确认参数格式 |
| `execute_api` | 通过 MCP 代理执行 API | 直连工具不支持的高级 API |
| `search_metric` | 搜索监控指标 | "有哪些 CPU 相关的指标" |
| `get_metric_data` | 获取时序监控数据 | 某台 VM 的 CPU 历史曲线 |
| `get_metric_summary` | 获取 TopN 聚合排名 | "CPU 使用率最高的 10 台 VM" |

## 代码同步

代码托管在 GitLab（内部）和 GitHub（镜像），master 分支推送后自动同步：

- **GitLab（主仓库）**：`http://dev.zstack.io:9080/zhaohao.chen/zstack-ai-assistant`
- **GitHub（镜像）**：`https://github.com/HeyMax/zstack-ai-assistant`

> GitLab CI 通过 CI/CD Variables 认证推送到 GitHub，无硬编码凭据。

## Roadmap

ZStack AI Native 化分阶段实施路线。目标：从"查询助手"进化到"智能运维平台"。

### Phase 1 — 基础加固 ✅

> 修复安全问题，建立工程化基础

- [x] 修复 Git remote / CI 中的明文凭据泄露
- [x] 配置导出加密升级为 AES-256-GCM + PBKDF2（用户密码派生密钥）
- [x] Chrome Extension 权限最小化（`optional_host_permissions` + 按需注入 content script）
- [ ] 代码模块化拆分（sidepanel.js / llm.js 拆分为多模块）
- [ ] System Prompt 和 Tool Definitions 外部化（JSON/YAML 配置，支持热更新）
- [ ] 精简 Tool Definitions（移除 15 个快捷工具，只保留 7 通用 + 6 MCP = 13 个）
- [ ] 修复 `getVersion()` 重复定义、`sessionUsage` 重复声明、`_callOpenAIStream` 重复错误处理
- [ ] 补齐测试覆盖率（LLM Provider 适配 mock 测试、ZStack API Client 测试）

### Phase 2 — 智能增强 🚧

> 从"查询助手"进化为"智能运维 Agent"

- [ ] **2.1 运维 Playbook 引擎** — 将常见运维场景（性能诊断、容量巡检、日常巡检）封装为标准 SOP，LLM 检测到用户意图后自动执行多步推理
- [ ] **2.2 主动监控告警** — 后台轮询 ZWatch 告警 → Chrome Notification 推送 → 点击通知直接进入排查对话 *(需对接 ZStack 平台，排期靠后)*
- [ ] **2.3 操作编排引擎** — YAML 定义 Workflow 模板（支持并行/串行/循环），LLM 理解用户意图后选择并执行预定义工作流
- [ ] **2.4 知识库集成（RAG）** — MCP Server 新增 `search_docs` 工具，对接 ZStack 官方文档和运维知识库

### Phase 3 — 平台 AI Native

> 从浏览器插件进化为平台级 AI 能力

- [ ] 嵌入 ZStack UI 成为原生功能组件
- [ ] 引入 AI Gateway 服务（多用户/多租户）
- [ ] 基于 IAM2 角色的自然语言权限控制
- [ ] 智能容量规划（历史趋势分析 + 资源耗尽预测 + 自动扩容建议）

### Phase 4 — AI 自动化运维

> 从人驱动变为 AI 驱动

- [ ] AIOps 自愈（异常检测 → 自动诊断 → 人工审批 → 执行修复）
- [ ] ChatOps 集成（钉钉/飞书/企微机器人）
- [ ] 多集群联邦管理
- [ ] 自定义 Agent（用户定义运维 Agent 的调度策略和权限范围）

## 详细信息

请参阅 [RELEASE.md](RELEASE.md) 了解完整的功能说明和版本信息。

## License

Internal Use Only — ZStack
