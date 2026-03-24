# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

ZStack AI Assistant — a Chrome extension (Manifest V3) that provides natural language ops management for ZStack cloud platform. Supports 50+ resource types, 8 LLM providers (Claude, GPT, GLM, DeepSeek, Qwen, MiniMax, Kimi, Bailian), and optional MCP server integration for API discovery and monitoring.

**Production branch**: `release/v1.1` (master is dev, may have bugs)

## Commands

```bash
# No build step — load extension directly in Chrome
# chrome://extensions/ → Developer Mode → Load Unpacked → select extension/

# Run tests (vitest)
npx vitest run

# Start MCP server (optional, for API search + monitoring)
cd mcp-server
uv venv && source .venv/bin/activate
uv pip install -e .
ZSTACK_API_URL="http://zstack-mn:8080" ZSTACK_ACCOUNT="admin" ZSTACK_PASSWORD="pass" \
  zstack-mcp --transport streamable-http --host 0.0.0.0 --port 8000
```

## Architecture

```
extension/                  # Chrome extension (Manifest V3, no build step)
  manifest.json             # Permissions, service worker, side panel config
  background.js             # Service worker — side panel lifecycle
  content.js                # Content script — page context bridge
  sidepanel.html/js/css     # Main UI — chat interface, settings, environment mgmt
  lib/
    llm.js                  # LLM Engine — multi-provider tool-calling, streaming
    zstack.js               # ZStack API client — login, CRUD, ZQL queries
    mcp-client.js           # MCP protocol client (Streamable HTTP)
    marked.min.js           # Markdown rendering
    purify.min.js           # XSS protection (DOMPurify)

mcp-server/                 # Python MCP Server (optional)
  src/zstack_mcp/
    server.py               # MCP Server entry (6 tools)
    api_search.py            # Fuzzy search across 2000+ ZStack APIs
    metric_search.py         # ZWatch monitoring metric search
    zstack_client.py         # ZStack REST API client
  data/                      # API docs + metric metadata
```

### Key Design Decisions

- **Zero framework dependency** — vanilla JS/CSS, no React/Vue/bundler
- **Pure client-side** — all data stays in browser (`chrome.storage`), passwords hashed with SHA-512
- **Multi-provider LLM** — `LLMEngine` class handles OpenAI-compatible, Anthropic Messages API, and MiniMax API formats, with tool-calling abstraction across all
- **Dual query mode** — compact (daily inspection) vs full (resource audit), controlled by system prompt variants
- **MCP integration** — optional; when connected, LLM gets 6 additional tools (search_api, describe_api, execute_api, search_metric, get_metric_data, get_metric_summary)

## CI/CD

GitLab CI (`.gitlab-ci.yml`) auto-mirrors master to GitHub on push.

## MCP Server Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `ZSTACK_API_URL` | ZStack MN API address | `http://localhost:8080` |
| `ZSTACK_ACCOUNT` | Login account | `admin` |
| `ZSTACK_PASSWORD` | Login password | — |
| `ZSTACK_SESSION_ID` | Direct session (overrides account/password) | — |
| `ZSTACK_ALLOW_ALL_API` | Allow write operations | `false` |
