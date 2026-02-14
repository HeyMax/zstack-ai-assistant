# ZStack AI Assistant

基于大语言模型的 ZStack 云平台智能运维助手，以 Chrome 浏览器扩展形式运行，支持通过自然语言管理云平台资源。

## 功能概览

- **自然语言交互** — 用中文直接下达运维指令，如"查看所有云主机"、"帮我创建一台 CentOS 云主机"
- **完整 ZStack API 覆盖** — 支持云主机、物理机、镜像、网络、存储、负载均衡、VPC、安全组、IAM 等全部资源类型的增删改查
- **ZQL 支持** — 内置 ZStack Query Language 支持，可执行复杂的跨资源关联查询
- **多模型适配** — 同时支持 OpenAI 和 Anthropic (Claude) 两种 LLM 提供商
- **Tool Calling** — 基于 LLM Function Calling 能力，自动将自然语言意图转化为 API 调用，支持多轮对话与并行工具执行
- **自动检测** — 访问 ZStack UI 页面时自动识别并填充 API 地址

## 项目结构

```
├── manifest.json        # Chrome Extension Manifest V3 配置
├── background.js        # Service Worker，处理扩展图标点击与页面检测消息
├── content.js           # Content Script，自动检测当前页面是否为 ZStack UI
├── sidepanel.html       # 侧边栏面板 HTML
├── sidepanel.css        # 侧边栏样式
├── sidepanel.js         # 侧边栏主逻辑（聊天交互、设置管理、消息流处理）
├── lib/
│   ├── zstack.js        # ZStack API 客户端（登录、通用 CRUD、快捷方法）
│   └── llm.js           # LLM 引擎（OpenAI/Anthropic 双协议、Tool Calling 循环、系统提示词）
├── icons/               # 扩展图标（16/48/128px）
└── test/
    └── integration.mjs  # 集成测试（API 连通性、资源查询、LLM Tool Calling 端到端验证）
```

## 安装与使用

### 1. 加载扩展

1. 打开 Chrome，访问 `chrome://extensions/`
2. 开启右上角「开发者模式」
3. 点击「加载已解压的扩展程序」，选择本项目根目录

### 2. 配置连接

点击扩展图标打开侧边栏，点击 ⚙️ 进入设置：

- **ZStack 连接** — 填写 API 地址（如 `http://172.24.245.30:8080`）、账号和密码
- **AI 模型** — 选择提供商（OpenAI / Anthropic），填写 API Key 和模型名称；可选填自定义 Base URL

### 3. 开始使用

连接成功后，在输入框中用自然语言描述你的运维需求即可。支持的操作示例：

- `查看所有云主机`
- `帮我创建一台云主机`
- `查看物理主机状态`
- `停止名为 test-vm 的云主机`
- `查询所有 Running 状态的 VM 并按创建时间排序`

## 运行测试

集成测试需要可访问的 ZStack 环境和 LLM API：

```bash
node test/integration.mjs
```

测试覆盖：登录认证、全资源类型查询、条件过滤、ZQL、UUID 查询、LLM 连通性、Tool Calling 流程、端到端多轮对话。

## 技术栈

- Chrome Extension Manifest V3
- Vanilla JavaScript (ES Modules)
- ZStack REST API + ZQL
- OpenAI / Anthropic Chat Completions API (Function Calling)

## 许可证

MIT
