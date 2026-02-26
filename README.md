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
- **6 家模型厂商** — Claude、GLM、GPT、DeepSeek、通义千问、MiniMax，支持自定义代理
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
└── extension/               # Chrome 扩展源码
    ├── manifest.json        # Manifest V3 配置
    ├── background.js        # Service Worker
    ├── sidepanel.html       # 侧边栏页面
    ├── sidepanel.js         # 侧边栏逻辑（720行）
    ├── sidepanel.css        # 样式（860行）
    └── lib/
        ├── llm.js           # LLM 引擎 + Tool Calling（960行）
        ├── zstack.js         # ZStack API 客户端（254行）
        ├── marked.min.js    # Markdown 渲染
        └── purify.min.js    # XSS 防护
```

## 技术架构

```
用户 ──→ Chrome Side Panel ──→ LLM Engine ──→ OpenAI/Anthropic/MiniMax API
                                    │
                                    ▼
                              ZStack Client ──→ ZStack REST API + ZQL
```

- 前端：原生 JS + CSS，零框架依赖
- LLM：OpenAI Chat Completions 兼容格式 + Anthropic Messages API + MiniMax API
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

## 详细信息

请参阅 [RELEASE.md](RELEASE.md) 了解完整的功能说明和版本信息。

## License

Internal Use Only — ZStack
