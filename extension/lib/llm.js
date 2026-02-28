// LLM Engine with ZStack Full API Coverage + Streaming Support
export class LLMEngine {
  constructor() {
    this.apiKey = '';
    this.baseUrl = '';
    this.provider = 'openai';
    this.model = '';
    this.messages = [];
    this.zstackClient = null;
    this.queryMode = 'compact';
    this._abortController = null;
  }

  configure({ apiKey, baseUrl, provider, model, zstackClient, queryMode }) {
    if (apiKey !== undefined) this.apiKey = apiKey;
    if (baseUrl !== undefined) this.baseUrl = baseUrl;
    if (provider) this.provider = provider;
    if (model !== undefined) this.model = model;
    if (zstackClient) this.zstackClient = zstackClient;
    if (queryMode) this.queryMode = queryMode;

    // Validate model is configured
    if (!this.model) {
      const defaultModel = LLMEngine.BASE_URLS[this.provider] ? PROVIDER_DEFAULTS[this.provider] : 'gpt-4o-mini';
      this.model = defaultModel;
    }
  }

  clearHistory() { this.messages = []; }

  abort() {
    if (this._abortController) {
      this._abortController.abort();
      this._abortController = null;
    }
  }

  _systemPrompt() {
    const modeInstructions = this.queryMode === 'full'
      ? QUERY_MODE_FULL
      : QUERY_MODE_COMPACT;
    return SYSTEM_PROMPT_BASE + '\n' + modeInstructions;
  }

  // Default base URLs per provider
  static BASE_URLS = {
    openai: 'https://api.openai.com/v1',
    anthropic: 'https://api.anthropic.com/v1',
    glm: 'https://open.bigmodel.cn/api/paas/v4',
    deepseek: 'https://api.deepseek.com/v1',
    qwen: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    minimax: 'https://api.minimax.chat/v1'
  };

  // Providers that use OpenAI-compatible API format
  static OPENAI_COMPAT = new Set(['openai', 'glm', 'deepseek', 'qwen', 'minimax']);

  async chat(userMessage, onEvent) {
    this.messages.push({ role: 'user', content: userMessage });
    const emit = (type, data) => { if (onEvent) onEvent({ type, ...data }); };

    this._abortController = new AbortController();
    const signal = this._abortController.signal;

    const maxRounds = 100;
    const startTime = Date.now();
    const timeoutMs = 5 * 60 * 1000;

    try {
      for (let i = 0; i < maxRounds; i++) {
        if (signal.aborted) {
          return '已停止生成。';
        }
        if (Date.now() - startTime > timeoutMs) {
          return '操作超时(5分钟)，部分操作可能已完成。请查看云平台确认状态。';
        }

        const isAnthropic = this.provider === 'anthropic' && !LLMEngine.OPENAI_COMPAT.has(this.provider);
        const response = isAnthropic
          ? await this._callAnthropicStream(emit, signal)
          : await this._callOpenAIStream(emit, signal);

        if (signal.aborted) {
          return '已停止生成。';
        }

        if (!response.toolCalls || response.toolCalls.length === 0) {
          this.messages.push({ role: 'assistant', content: response.content });
          return response.content;
        }

        // Show what tools are being called with details
        const toolNames = isAnthropic
          ? response.toolCalls.map(tc => tc.name)
          : response.toolCalls.map(tc => tc.function.name);
        const toolDetails = isAnthropic
          ? response.toolCalls.map(tc => {
              const args = tc.input || {};
              return this._formatToolDetail(tc.name, args);
            })
          : response.toolCalls.map(tc => {
              try {
                const args = JSON.parse(tc.function.arguments);
                return this._formatToolDetail(tc.function.name, args);
              } catch { return tc.function.name; }
            });
        emit('tool_start', { tools: toolNames, toolDetails, round: i + 1 });

        // Execute tool calls
        if (isAnthropic) {
          this.messages.push({ role: 'assistant', content: response.rawContent });
          const truncateLimit = this.queryMode === 'full' ? 80000 : 30000;
          const results = await Promise.all(
            response.toolCalls.map(async tc => {
              try {
                const result = await this._executeTool(tc.name, tc.input);
                return {
                  type: 'tool_result',
                  tool_use_id: tc.id,
                  content: JSON.stringify(result).slice(0, truncateLimit)
                };
              } catch (e) {
                return {
                  type: 'tool_result',
                  tool_use_id: tc.id,
                  content: JSON.stringify({ error: e.message })
                };
              }
            })
          );
          this.messages.push({ role: 'user', content: results });
        } else {
          this.messages.push(response.rawMessage);
          const truncateLimit = this.queryMode === 'full' ? 80000 : 30000;
          const results = await Promise.all(
            response.toolCalls.map(async tc => {
              try {
                const args = JSON.parse(tc.function.arguments);
                const result = await this._executeTool(tc.function.name, args);
                return {
                  role: 'tool',
                  tool_call_id: tc.id,
                  content: JSON.stringify(result).slice(0, truncateLimit)
                };
              } catch (e) {
                return {
                  role: 'tool',
                  tool_call_id: tc.id,
                  content: JSON.stringify({ error: e.message })
                };
              }
            })
          );
          results.forEach(r => this.messages.push(r));
        }
        emit('tool_done', { tools: toolNames, round: i + 1 });
      }
      return '操作轮次已达上限，部分操作可能已完成。请查看云平台确认状态。';
    } catch (e) {
      if (e.name === 'AbortError') {
        return '已停止生成。';
      }
      throw e;
    } finally {
      this._abortController = null;
    }
  }

  _formatToolDetail(name, args) {
    switch (name) {
      case 'zstack_query':
        return `查询 ${args.resource_path || ''}${args.conditions?.length ? ' [' + args.conditions.join(', ') + ']' : ''}`;
      case 'zstack_get':
        return `获取 ${args.resource_path || ''} ${(args.uuid || '').slice(0, 8)}...`;
      case 'zstack_create':
        return `创建 ${args.resource_path || ''}`;
      case 'zstack_delete':
        return `删除 ${args.resource_path || ''} ${(args.uuid || '').slice(0, 8)}...`;
      case 'zstack_action':
        const actionName = args.body ? Object.keys(args.body)[0] : '';
        return `执行 ${actionName} on ${args.resource_path || ''}`;
      case 'zstack_update':
        return `更新 ${args.resource_path || ''} ${(args.uuid || '').slice(0, 8)}...`;
      case 'zstack_zql':
        return `ZQL: ${(args.zql || '').slice(0, 60)}`;
      default:
        return name.replace(/_/g, ' ');
    }
  }

  // Models that don't support tool calling
  static NO_TOOL_MODELS = new Set(['deepseek-reasoner', 'o1', 'o1-mini']);

  // Build request body with provider-specific adjustments
  _buildOpenAIBody(stream = true) {
    const supportsTools = !LLMEngine.NO_TOOL_MODELS.has(this.model);
    const body = {
      model: this.model,
      messages: [{ role: 'system', content: this._systemPrompt() }, ...this.messages],
      stream
    };

    // 不传 max_tokens，让各 provider 用模型默认上限，避免限制大模型能力

    if (supportsTools) {
      body.tools = TOOLS;
      // tool_choice: some providers are strict about this
      // GLM, MiniMax, Qwen all support 'auto'
      body.tool_choice = 'auto';
    }

    return body;
  }

  // ========== OpenAI-compatible Streaming ==========
  async _callOpenAIStream(emit, signal) {
    const defaultBase = LLMEngine.BASE_URLS[this.provider] || LLMEngine.BASE_URLS.openai;
    const base = this.baseUrl || defaultBase;
    const url = `${base.replace(/\/$/, '')}/chat/completions`;

    const body = this._buildOpenAIBody(true);

    // Try streaming first; if provider rejects, fall back to non-streaming
    let res;
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
        body: JSON.stringify(body),
        signal
      });
    } catch (e) {
      if (e.name === 'AbortError') throw e;
      throw e;
    }

    // If streaming fails with certain errors, retry without streaming
    if (!res.ok) {
      const errText = await res.text();
      let errMsg;
      try { errMsg = JSON.parse(errText).error?.message || errText; } catch { errMsg = errText; }

      // Some providers reject stream+tools combo — fall back to non-streaming
      const isStreamError = errMsg.toLowerCase().includes('stream') ||
                            errMsg.toLowerCase().includes('not support');
      if (isStreamError) {
        return this._callOpenAINonStream(signal);
      }
      throw new Error(errMsg);
    }

    if (!res.ok) {
      const errText = await res.text();
      let errMsg;
      try { errMsg = JSON.parse(errText).error?.message || errText; } catch { errMsg = errText; }
      throw new Error(errMsg);
    }

    // Parse SSE stream
    let content = '';
    const toolCalls = []; // { index -> { id, function: { name, arguments } } }

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed === 'data: [DONE]') continue;
          if (!trimmed.startsWith('data: ')) continue;

          let chunk;
          try {
            chunk = JSON.parse(trimmed.slice(6));
          } catch {
            continue;
          }

          if (chunk.error) {
            throw new Error(chunk.error.message || JSON.stringify(chunk.error));
          }

          const delta = chunk.choices?.[0]?.delta;
          if (!delta) continue;

          // Reasoning/thinking content (GLM-5, DeepSeek-R1 etc.)
          if (delta.reasoning_content) {
            emit('thinking_delta', { text: delta.reasoning_content });
          }

          // Text content
          if (delta.content) {
            content += delta.content;
            emit('text_delta', { text: delta.content });
          }

          // Tool calls
          if (delta.tool_calls) {
            for (const tc of delta.tool_calls) {
              const idx = tc.index;
              if (!toolCalls[idx]) {
                toolCalls[idx] = { id: tc.id || '', type: 'function', function: { name: '', arguments: '' } };
              }
              if (tc.id) toolCalls[idx].id = tc.id;
              if (tc.function?.name) toolCalls[idx].function.name += tc.function.name;
              if (tc.function?.arguments) toolCalls[idx].function.arguments += tc.function.arguments;
            }
          }
        }
      }
    } catch (e) {
      if (e.name === 'AbortError') throw e;
      // If we got partial content, return what we have
      if (content && !toolCalls.length) {
        return { content, toolCalls: null, rawMessage: { role: 'assistant', content } };
      }
      throw e;
    }

    const validToolCalls = toolCalls.filter(tc => tc && tc.id && tc.function.name);
    const rawMessage = {
      role: 'assistant',
      content: content || null,
      ...(validToolCalls.length > 0 ? { tool_calls: validToolCalls } : {})
    };

    // Emit usage event with token counts (for streaming, estimate based on message content)
    const estimatedUsage = { ...this._estimateUsage(content, this.messages), estimated: true };
    emit('usage', estimatedUsage);

    return {
      content: content || '',
      toolCalls: validToolCalls.length > 0 ? validToolCalls : null,
      rawMessage
    };
  }

  // ========== Estimate token usage ==========
  _estimateUsage(content, messages, emitLog = false) {
    // Rough estimation: ~1 token ≈ 2-3 chars for Chinese, ~3-4 chars for English
    // 使用更准确的估算公式
    const estimateChars = (text) => {
      if (!text) return 0;
      const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
      const otherChars = text.length - chineseChars;
      // 中文约 2.5 字符/token，英文约 3.5 字符/token
      return Math.ceil(chineseChars / 2.5 + otherChars / 3.5);
    };

    const promptTokens = messages.reduce((sum, m) => sum + estimateChars(m.content), 0);
    const completionTokens = estimateChars(content);
    const totalTokens = promptTokens + completionTokens;

    // 输出详细日志到控制格，方便排查 token 消耗
    if (emitLog || true) {
      console.log('[Token Usage] ===== Token 消耗明细 =====');
      console.log('[Token Usage] System prompt tokens:', estimateChars(this._systemPrompt()));
      console.log('[Token Usage] Messages count:', messages.length);
      let msgIdx = 0;
      messages.forEach((m, i) => {
        const len = estimateChars(m.content);
        console.log(`[Token Usage] Message[${i}] ${m.role}: ${len} tokens, ${m.content.length} chars, preview: ${m.content.substring(0, 100)}...`);
        msgIdx = i;
      });
      console.log('[Token Usage] ----');
      console.log('[Token Usage] Prompt tokens (估算):', promptTokens);
      console.log('[Token Usage] Completion tokens (估算):', completionTokens);
      console.log('[Token Usage] Total tokens (估算):', totalTokens);
      console.log('[Token Usage] ==========================');
    }

    return {
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      total_tokens: totalTokens
    };
  }

  // ========== OpenAI Non-Streaming Fallback ==========
  async _callOpenAINonStream(signal) {
    const defaultBase = LLMEngine.BASE_URLS[this.provider] || LLMEngine.BASE_URLS.openai;
    const base = this.baseUrl || defaultBase;
    const url = `${base.replace(/\/$/, '')}/chat/completions`;

    const body = this._buildOpenAIBody(false);

    const res = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${this.apiKey}` },
      body: JSON.stringify(body),
      signal
    });

    if (!res.ok) {
      const errText = await res.text();
      let errMsg;
      try { errMsg = JSON.parse(errText).error?.message || errText; } catch { errMsg = errText; }
      throw new Error(errMsg);
    }

    const data = await res.json();
    if (data.error) throw new Error(data.error.message);
    const msg = data.choices[0].message;
    const toolCalls = msg.tool_calls?.map(tc => ({
      ...tc,
      type: tc.type || 'function'
    })) || null;

    // Emit usage from actual API response if available
    const usage = data.usage 
      ? { ...data.usage, estimated: false } 
      : { ...this._estimateUsage(msg.content || '', this.messages), estimated: true };
    emit('usage', usage);

    return {
      content: msg.content || '',
      toolCalls: toolCalls?.length > 0 ? toolCalls : null,
      rawMessage: { ...msg, tool_calls: toolCalls?.length > 0 ? toolCalls : undefined }
    };
  }

  // ========== Anthropic Streaming ==========
  async _callAnthropicStream(emit, signal) {
    const defaultBase = LLMEngine.BASE_URLS.anthropic;
    const base = this.baseUrl || defaultBase;
    const url = `${base.replace(/\/$/, '')}/messages`;

    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': this.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify({
        model: this.model,
        system: this._systemPrompt(),
        messages: this.messages,
        tools: TOOLS_ANTHROPIC,
        max_tokens: 16384,  // Anthropic 必填参数，给足够大的值
        stream: true
      }),
      signal
    });

    if (!res.ok) {
      const errText = await res.text();
      let errMsg;
      try { errMsg = JSON.parse(errText).error?.message || errText; } catch { errMsg = errText; }
      throw new Error(errMsg);
    }

    // Parse Anthropic SSE stream
    const contentBlocks = []; // Array of { type, text?, id?, name?, input? }
    let currentBlockIndex = -1;
    let currentBlockType = '';
    let textContent = '';
    let inputJsonStr = '';

    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';

    try {
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        buffer += decoder.decode(value, { stream: true });
        const lines = buffer.split('\n');
        buffer = lines.pop() || '';

        for (const line of lines) {
          const trimmed = line.trim();
          if (!trimmed || trimmed.startsWith('event:')) continue;
          if (!trimmed.startsWith('data: ')) continue;

          let event;
          try {
            event = JSON.parse(trimmed.slice(6));
          } catch {
            continue;
          }

          switch (event.type) {
            case 'message_start':
              // Message metadata, nothing to do
              break;

            case 'content_block_start':
              currentBlockIndex = event.index;
              currentBlockType = event.content_block?.type || '';
              if (currentBlockType === 'text') {
                contentBlocks[currentBlockIndex] = { type: 'text', text: '' };
              } else if (currentBlockType === 'tool_use') {
                contentBlocks[currentBlockIndex] = {
                  type: 'tool_use',
                  id: event.content_block.id,
                  name: event.content_block.name,
                  input: {}
                };
                inputJsonStr = '';
              }
              break;

            case 'content_block_delta':
              if (event.delta?.type === 'text_delta' && event.delta.text) {
                textContent += event.delta.text;
                if (contentBlocks[event.index]) {
                  contentBlocks[event.index].text += event.delta.text;
                }
                emit('text_delta', { text: event.delta.text });
              } else if (event.delta?.type === 'input_json_delta' && event.delta.partial_json) {
                inputJsonStr += event.delta.partial_json;
              }
              break;

            case 'content_block_stop':
              if (currentBlockType === 'tool_use' && contentBlocks[currentBlockIndex]) {
                try {
                  contentBlocks[currentBlockIndex].input = JSON.parse(inputJsonStr || '{}');
                } catch {
                  contentBlocks[currentBlockIndex].input = {};
                }
                inputJsonStr = '';
              }
              break;

            case 'message_delta':
              // stop_reason etc
              break;

            case 'message_stop':
              break;

            case 'error':
              throw new Error(event.error?.message || 'Anthropic stream error');
          }
        }
      }
    } catch (e) {
      if (e.name === 'AbortError') throw e;
      if (textContent && !contentBlocks.some(b => b?.type === 'tool_use')) {
        return { content: textContent, toolCalls: null, rawContent: [{ type: 'text', text: textContent }] };
      }
      throw e;
    }

    const toolBlocks = contentBlocks.filter(b => b?.type === 'tool_use');
    const rawContent = contentBlocks.filter(b => b != null);

    // Estimate usage for Anthropic (no streaming usage data)
    const usage = { ...this._estimateUsage(textContent, this.messages), estimated: true };
    emit('usage', usage);

    return {
      content: textContent,
      toolCalls: toolBlocks.length > 0
        ? toolBlocks.map(b => ({ id: b.id, name: b.name, input: b.input }))
        : null,
      rawContent
    };
  }

  async _executeTool(name, args) {
    const cli = this.zstackClient;
    if (!cli || !cli.isLoggedIn()) return { error: '未连接到 ZStack，请先配置并登录' };

    try {
      const fixPath = (p) => p && !p.startsWith('v1/') ? `v1/${p}` : p;

      switch (name) {
                case 'zstack_query':
          return await cli.query(fixPath(args.resource_path), args.conditions || [], args.limit || 100, args.start || 0, args.sort_by, args.sort_direction);
        case 'zstack_get':
          return await cli.get(fixPath(args.resource_path), args.uuid);
        case 'zstack_create':
          return await cli.create(fixPath(args.resource_path), args.body);
        case 'zstack_delete':
          return await cli.remove(fixPath(args.resource_path), args.uuid, args.delete_mode || 'Permissive');
        case 'zstack_action':
          return await cli.action(fixPath(args.resource_path), args.uuid, args.body);
        case 'zstack_update':
          return await cli.update(fixPath(args.resource_path), args.uuid, args.body);
        case 'zstack_zql':
          return await cli.zql(args.zql);
        case 'query_vms': return await cli.queryVmInstances(args.conditions || []);
        case 'create_vm': return await cli.createVm(args.params);
        case 'start_vm': return await cli.startVm(args.uuid);
        case 'stop_vm': return await cli.stopVm(args.uuid, args.type);
        case 'reboot_vm': return await cli.rebootVm(args.uuid);
        case 'delete_vm': return await cli.deleteVm(args.uuid);
        case 'migrate_vm': return await cli.migrateVm(args.uuid, args.hostUuid);
        case 'query_hosts': return await cli.queryHosts(args.conditions || []);
        case 'query_images': return await cli.queryImages(args.conditions || []);
        case 'query_l3_networks': return await cli.queryL3Networks(args.conditions || []);
        case 'query_instance_offerings': return await cli.queryInstanceOfferings(args.conditions || []);
        case 'query_volumes': return await cli.queryVolumes(args.conditions || []);
        case 'query_load_balancers': return await cli.queryLoadBalancers(args.conditions || []);
        case 'query_vips': return await cli.queryVips(args.conditions || []);
        case 'query_eips': return await cli.queryEips(args.conditions || []);
        case 'query_security_groups': return await cli.querySecurityGroups(args.conditions || []);
        case 'query_vpc_routers': return await cli.queryVpcRouters(args.conditions || []);
        default:
          return { error: `未知工具: ${name}` };
      }
    } catch (e) {
      return { error: e.message };
    }
  }
}

// ========== System Prompt ==========
const SYSTEM_PROMPT_BASE = `你是 ZStack 云平台智能运维助手，拥有完整的 ZStack REST API 访问能力。

## ZStack RESTful API 规范（必须掌握）

### API 版本
- 所有 API 路径以 /v1 开头，例如 /v1/vm-instances

### HTTP 方法
- GET: 获取资源（查询）
- POST: 创建资源
- PUT: 修改资源 / 执行操作（类 RPC）
- DELETE: 删除资源

### 认证方式
- 登录获取 Session：PUT /v1/accounts/login 或 PUT /v1/accounts/users/login
- Body: {"logInByAccount": {"accountName": "admin", "password": "SHA512哈希后的密码"}} 或 {"logInByUser": {"userName": "xxx", "password": "xxx", "accountName": "admin"}}
- 返回: {"inventory": {"uuid": "session-uuid", "accountUuid": "xxx", "userUuid": "xxx", "expiredDate": "xxx"}}
- 后续调用 Header: Authorization: OAuth session-uuid
- 登出：DELETE /v1/accounts/sessions/{session-uuid}

### 参数传递方式
1. URL 传参：/v1/vm-instances/{uuid}/actions
2. Query String：/v1/vm-instances?q=name=test&state=Running
3. HTTP Body：{"params": {...}}

### 操作类型
- 创建：POST /v1/资源名，body: {"params": {...}}
- 查询：GET /v1/资源名?q=字段=值
- 查询单个：GET /v1/资源名/{uuid}
- 修改：PUT /v1/资源名/{uuid}
- 删除：DELETE /v1/资源名/{uuid}
- 执行 Action：PUT /v1/资源名/{uuid}/actions，body: {"操作名": {参数}}

### 查询条件
- = 等于，!= 不等于
- > < >= <= 数值比较
- ~= 模糊匹配（% 任意字符）
- is null / not null 空值判断
- 多条件用 & 连接（与关系）

### 返回码
- 200: 成功
- 202: 异步操作 accepted，需轮询结果
- 400: 参数错误
- 404: 资源不存在
- 503: 操作失败

---

## ZStack 资源 API 详细规范

### 1. 登录认证 (Account)

| 操作 | API 路径 | 方法 | Body 格式 |
|------|----------|------|-----------|
| 账户登录 | /v1/accounts/login | PUT | {"logInByAccount": {"accountName": "xxx", "password": "SHA512密码"}} |
| 用户登录 | /v1/accounts/users/login | PUT | {"logInByUser": {"accountName": "xxx", "userName": "xxx", "password": "xxx"}} |
| 登出 | /v1/accounts/sessions/{uuid} | DELETE | - |
| 创建账户 | /v1/accounts | POST | {"params": {"name": "xxx", "password": "xxx"}} |
| 查询账户 | /v1/accounts | GET | ?q=name=xxx |

### 2. 计算资源 (Compute)

#### 2.1 云主机 (vm-instances)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建云主机 | /v1/vm-instances | POST | {"params": {"name": "xxx", "instanceOfferingUuid": "xxx", "imageUuid": "xxx", "l3NetworkUuids": ["xxx"], "type": "UserVm"}} |
| 查询云主机 | /v1/vm-instances | GET | ?q=name=xxx&state=Running |
| 获取云主机 | /v1/vm-instances/{uuid} | GET | - |
| 启动 | /v1/vm-instances/{uuid}/actions | PUT | {"startVmInstance": {}} |
| 停止 | /v1/vm-instances/{uuid}/actions | PUT | {"stopVmInstance": {"type": "grace"}} |
| 重启 | /v1/vm-instances/{uuid}/actions | PUT | {"rebootVmInstance": {}} |
| 删除 | /v1/vm-instances/{uuid} | DELETE | - |
| 迁移 | /v1/vm-instances/{uuid}/actions | PUT | {"migrateVm": {"hostUuid": "xxx"}} |
| 挂载ISO | /v1/vm-instances/{uuid}/iso | PUT | {"attachIso": {"isoUuid": "xxx"}} |
| 挂载云盘 | /v1/volumes/{uuid}/actions | PUT | {"attachDataVolume": {"vmInstanceUuid": "xxx"}} |

返回字段：uuid, name, state, cpuNum, memorySize, vmNics.ip, hostUuid, imageUuid, instanceOfferingUuid

#### 2.2 镜像 (images)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 添加镜像 | /v1/images | POST | {"params": {"name": "xxx", "url": "http://xxx", "mediaType": "RootVolumeTemplate", "backupStorageUuid": "xxx"}} |
| 查询镜像 | /v1/images | GET | ?q=name~=xxx |
| 删除镜像 | /v1/images/{uuid} | DELETE | - |

返回字段：uuid, name, state, mediaType, size, backupStorageUuid

#### 2.3 计算规格 (instance-offerings)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询规格 | /v1/instance-offerings | GET |

返回字段：uuid, name, cpuNum, memorySize, type

#### 2.4 云盘规格 (disk-offerings)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询规格 | /v1/disk-offerings | GET |

返回字段：uuid, name, diskSize, volumeType

### 3. 存储资源 (Storage)

#### 3.1 云盘 (volumes)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建数据盘 | /v1/volumes/data | POST | {"params": {"name": "xxx", "diskOfferingUuid": "xxx", "primaryStorageUuid": "xxx"}} |
| 查询云盘 | /v1/volumes | GET | ?q=type=Data |
| 挂载 | /v1/volumes/{uuid}/actions | PUT | {"attachDataVolume": {"vmInstanceUuid": "xxx"}} |
| 卸载 | /v1/volumes/{uuid}/actions | PUT | {"detachDataVolume": {}} |
| 扩容 | /v1/volumes/{uuid}/actions | PUT | {"resizeDataVolume": {"size": "xxx"}} |
| 删除 | /v1/volumes/{uuid} | DELETE | - |

返回字段：uuid, name, type, size, vmInstanceUuid, primaryStorageUuid, diskOfferingUuid

#### 3.2 快照 (volume-snapshots)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建快照 | /v1/volume-snapshots | POST | {"params": {"volumeUuid": "xxx", "name": "xxx"}} |
| 查询快照 | /v1/volume-snapshots | GET | ?q=volumeUuid=xxx |
| 从快照创建云盘 | /v1/volumes/data | POST | {"params": {"name": "xxx", "snapshotUuid": "xxx"}} |
| 删除 | /v1/volume-snapshots/{uuid} | DELETE | - |

#### 3.3 主存储 (primary-storage)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 查询主存储 | /v1/primary-storage | GET | ?q=name=xxx |
| 获取主存储 | /v1/primary-storage/{uuid} | GET | - |

返回字段： uuid, name, state, type, totalCapacity, availableCapacity

#### 3.4 备份存储 (backup-storage)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询备份存储 | /v1/backup-storage | GET |

返回字段：uuid, name, state, type, totalCapacity, availableCapacity

### 4. 网络资源 (Network)

#### 4.1 L2 网络
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询 L2 网络 | /v1/l2-networks | GET |

#### 4.2 L3 网络 (l3-networks)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 查询 L3 网络 | /v1/l3-networks | GET | ?q=name=xxx |
| 获取 L3 网络 | /v1/l3-networks/{uuid} | GET | - |

返回字段：uuid, name, l2NetworkUuid, networkServices, ipRanges

#### 4.3 IP 地址 (ip-address)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询 IP | /v1/ip-addresses | GET | ?q=l3NetworkUuid=xxx |

返回字段：uuid, ip, state, vmNicUuid, l3NetworkUuid

#### 4.4 VIP (vips)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建 VIP | /v1/vips | POST | {"params": {"name": "xxx", "l3NetworkUuid": "xxx", "requiredIp": "xxx"}} |
| 查询 VIP | /v1/vips | GET | ?q=name=xxx |
| 删除 | /v1/vips/{uuid} | DELETE | - |

返回字段：uuid, name, ip, l3NetworkUuid, state, gateway, netmask

#### 4.5 弹性 IP (eips)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建 EIP | /v1/eips | POST | {"params": {"name": "xxx", "vipUuid": "xxx", "vmNicUuid": "xxx"}} |
| 查询 EIP | /v1/eips | GET | ?q=name=xxx |
| 绑定 | /v1/eips/{uuid}/actions | PUT | {"attachEip": {"vmNicUuid": "xxx"}} |
| 解绑 | /v1/eips/{uuid}/actions | PUT | {"detachEip": {}} |
| 删除 | /v1/eips/{uuid} | DELETE | - |

返回字段：uuid, name, ip, vipUuid, vmNicUuid, state

#### 4.6 安全组 (security-groups)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建安全组 | /v1/security-groups | POST | {"params": {"name": "xxx"}} |
| 查询安全组 | /v1/security-groups | GET | ?q=name=xxx |
| 添加规则 | /v1/security-groups/{uuid}/rules | POST | {"params": {"rules": [{"type": "Ingress", "protocol": "TCP", "startPort": 1, "endPort": 65535}]}} |
| 添加 VM 到安全组 | /v1/security-groups/{uuid}/vm-nics | POST | {"params": {"vmNicUuids": ["xxx"]}} |
| 删除 | /v1/security-groups/{uuid} | DELETE | - |

返回字段：uuid, name, rules, attachedVmUuids

#### 4.7 端口转发 (port-forwarding)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建规则 | /v1/port-forwarding | POST | {"params": {"name": "xxx", "vipUuid": "xxx", "vmNicUuid": "xxx", "protocol": "TCP", "privatePort": 22, "publicPort": 22}} |
| 查询规则 | /v1/port-forwarding | GET | - |

### 5. 负载均衡 (Load Balancer)

#### 5.1 负载均衡器
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建 LB | /v1/load-balancers | POST | {"params": {"name": "xxx", "vipUuid": "xxx"}} |
| 查询 LB | /v1/load-balancers | GET | ?q=name=xxx |
| 添加后端 | /v1/load-balancers/{uuid}/backend-servers | POST | {"params": {"vmNicUuids": ["xxx"]}} |
| 刷新 LB | /v1/load-balancers/{uuid}/actions | PUT | {"refreshLoadBalancer": {}} |
| 删除 | /v1/load-balancers/{uuid} | DELETE | - |

返回字段：uuid, name, vipUuid, state, listeners

#### 5.2 监听器
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建监听器 | /v1/load-balancers/{uuid}/listeners | POST | {"params": {"name": "xxx", "loadBalancerPort": 80, "instancePort": 80, "protocol": "http"}} |
| 查询监听器 | /v1/load-balancers/{uuid}/listeners | GET | - |

### 6. VPC 路由器 (Enterprise)

| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建 VPC 路由器 | /v1/vpc/virtual-routers | POST | {"params": {"name": "xxx", "l3NetworkUuids": ["xxx"]}} |
| 查询 VPC 路由器 | /v1/vpc/virtual-routers | GET | ?q=name=xxx |
| 获取 VPC 路由器 | /v1/vpc/virtual-routers/{uuid} | GET | - |
| 添加 DNS | /v1/vpc/virtual-routers/{uuid}/dns | POST | {"params": {"dns": "8.8.8.8"}} |
| 删除 DNS | /v1/vpc/virtual-routers/{uuid}/dns | DELETE | - |

返回字段：uuid, name, state, l3NetworkUuids, vrUuid

### 7. 身份认证 (IAM2)

#### 7.1 IAM2 项目
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建项目 | /v1/iam2/projects | POST | {"params": {"name": "xxx", "description": "xxx", "quota": {}}} |
| 查询项目 | /v1/iam2/projects | GET | ?q=name=xxx |
| 更新项目 | /v1/iam2/projects/{uuid} | PUT | {"params": {"name": "xxx"}} |
| 删除 | /v1/iam2/projects/{uuid} | DELETE | - |

返回字段：uuid, name, state, description

#### 7.2 虚拟身份 (iam2/virtual-ids)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建虚拟身份 | /v1/iam2/virtual-ids | POST | {"params": {"name": "xxx", "password": "xxx"}} |
| 查询虚拟身份 | /v1/iam2/virtual-ids | GET | ?q=name=xxx |
| 添加到项目 | /v1/iam2/projects/{uuid}/virtual-ids | POST | {"params": {"virtualIds": ["xxx"]}} |

#### 7.3 组织 (iam2/organizations)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询组织 | /v1/iam2/organizations | GET |

### 8. 监控告警 (Monitoring)

| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 查询告警 | /v1/zwatch/alarms | GET | ?q=origin=xxx |
| 创建触发器 | /v1/zwatch/triggers | POST | {"params": {"name": "xxx", "expression": "xxx"}} |
| 查询触发器 | /v1/zwatch/triggers | GET | - |
| 创建告警动作 | /v1/zwatch/trigger-actions | POST | {"params": {"triggerUuid": "xxx", "actionType": "email"}} |

### 9. 运维管理

#### 9.1 物理机 (hosts)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 查询物理机 | /v1/hosts | GET | ?q=clusterUuid=xxx |
| 获取物理机 | /v1/hosts/{uuid} | GET | - |
| 连接 | /v1/hosts/{uuid}/actions | PUT | {"connect": {}} |
| 维护模式 | /v1/hosts/{uuid}/actions | PUT | {"enterMaintenanceMode": {}} |

返回字段：uuid, name, state, status, managementIp, clusterUuid, hypervisorType

#### 9.2 集群 (clusters)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询集群 | /v1/clusters | GET |
| 获取集群 | /v1/clusters/{uuid} | GET |

返回字段：uuid, name, state, type, zoneUuid

#### 9.3 区域 (zones)
| 操作 | API 路径 | 方法 |
|------|----------|------|
| 查询区域 | /v1/zones | GET |
| 获取区域 | /v1/zones/{uuid} | GET |

#### 9.4 定时任务 (scheduler)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建任务 | /v1/scheduler/jobs | POST | {"params": {"name": "xxx", "targetUuid": "xxx", "triggerUuid": "xxx"}} |
| 查询任务 | /v1/scheduler/jobs | GET | - |

#### 9.5 全局配置
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 查询配置 | /v1/global-configurations | GET | ?q=category=xxx |
| 更新配置 | /v1/global-configurations/{category}/{name} | PUT | {"params": {"value": "xxx"}} |

#### 9.6 标签 (tags)
| 操作 | API 路径 | 方法 | Body/参数 |
|------|----------|------|-----------|
| 创建标签 | /v1/tags | POST | {"params": {"resourceType": "VmInstanceVO", "resourceUuid": "xxx", "tag": "xxx"}} |
| 查询标签 | /v1/tags | GET | ?q=resourceUuid=xxx |

### 10. 基础设施查询

| 资源 | API 路径 | 关键返回字段 |
|------|----------|-------------|
| 区域 | /v1/zones | uuid, name, state |
| 集群 | /v1/clusters | uuid, name, type, zoneUuid |
| 物理机 | /v1/hosts | uuid, name, status, managementIp, clusterUuid |
| 主存储 | /v1/primary-storage | uuid, name, type, totalCapacity, availableCapacity |
| 备份存储 | /v1/backup-storage | uuid, name, type |
| 管理节点 | /v1/management-nodes | uuid, version, status |

---

## ⚠️ 重要：API 调用规则
当用户问以下问题时，**必须**使用 \`zstack_action\` 工具调用 API 查询：
1. **问平台版本** → resource_path: "management-nodes"，uuid: 空着不传，body: {"getVersion": {}}
2. 问资源数量/列表 → 调用 GET /v1/资源名
3. 问具体资源详情 → 调用 GET /v1/资源名/{uuid}

⚠️ 注意：getVersion 是全局 action，**不需要 uuid**！

禁止：根据已知信息猜测答案！

## 回复风格（必须遵守）
- 用户问平台版本、状态、数量等信息时，**必须先调用 API 查询**，不能猜测或泛泛而谈
- **禁止输出思考过程**，禁止输出 API 调用尝试，只输出最终结果。如果 API 返回错误，直接告诉用户错误信息。
- 查询结果直接用表格展示，不要加多余的开场白、道歉、解释或建议
- 不要说"让我整理一下"、"抱歉让您久等"、"如果需要我可以"之类的废话
- 用户没问就不要主动提建议
- 表格只展示关键字段：名称、状态、IP、CPU、内存，不要把所有字段都列出来
- 操作成功就说"已完成"，失败就说原因，简洁明了

## 核心能力
你可以通过工具管理 ZStack 云平台的所有资源，包括但不限于：

**计算**: 云主机(vm-instances)、镜像(images)、计算规格(instance-offerings)、云盘规格(disk-offerings)
**存储**: 云盘(volumes)、快照(volume-snapshots)、备份(volume-backups)、主存储(primary-storage)、镜像仓库(backup-storage)、Ceph存储
**网络**: L2网络(l2-networks)、L3网络(l3-networks)、VIP(vips)、弹性IP(eips)、端口转发(port-forwarding)、安全组(security-groups)、IPsec VPN(ipsec)
**负载均衡**: 负载均衡器(load-balancers)、监听器(load-balancers/listeners)、服务器组(load-balancers/servergroups)
**VPC**: VPC路由器(vpc/virtual-routers)、路由表(vrouter-route-tables)、VPC防火墙(vpcfirewalls)
**基础设施**: 区域(zones)、集群(clusters)、物理机(hosts)、管理节点(management-nodes)
**身份认证**: 账户(accounts)、IAM2项目(iam2/projects)、虚拟身份(iam2/virtual-ids)
**监控告警**: 告警(zwatch/alarms)、事件订阅(zwatch/events/subscriptions)、监控组(zwatch/monitorgroups)
**运维**: 定时任务(scheduler/jobs)、全局配置(global-configurations)、系统标签(system-tags)
**裸金属**: 裸金属服务器(baremetal2/bm-instances)、机箱(baremetal2/chassis)
**弹性伸缩**: 伸缩组(autoscaling/groups)、伸缩规则(autoscaling/rules)
**CDP备份**: CDP策略(cdp-backup-storage/policy)、CDP任务(cdp-task)
**V2V迁移**: 迁移任务(v2vs)、转换主机(v2v-conversion-hosts)

## 通用 API 工具
对于上面列出的所有资源以及未列出的资源，你都可以使用通用 API 工具(zstack_query/zstack_create/zstack_delete/zstack_action/zstack_update)来操作。
resource_path 为资源路径，例如 "vm-instances"、"load-balancers/listeners"、"hosts"。系统会自动补全 v1/ 前缀。

## ZQL 查询
ZStack 支持 ZQL (ZStack Query Language)，语法类似 SQL：
- query vminstance where name='test'
- query vminstance where clusterUuid='xxx' and state='Running'
- query host where status='Connected' return with (vminstance)
- count vminstance  → 返回资源总数（不受分页限制）
- count vminstance where state='Running'  → 按条件统计数量
对于复杂查询，优先使用 ZQL。

⚠️ **ZQL 语法关键规则**：
1. 所有字符串值必须用单引号包裹！
   - ✅ 正确: count vminstance where state='Running'
   - ❌ 错误: count vminstance where state=Running （会报错！）
2. 分页用 **offset** 不是 start！
   - ✅ 正确: query vminstance limit 100 offset 100
   - ❌ 错误: query vminstance limit 100 start 100 （会报错！）
3. ZQL 实体名与 API 路径不同，常用映射：
   vminstance, host, image, l3network, l2network, volume, volumesnapshot,
   instanceoffering, diskoffering, primarystorage, backupstorage,
   zone, cluster, vip, eip, securitygroup, loadbalancer,
   appliancevm(VPC路由器), account, managementnode, vmnic, globalconfig

## ⚠️ 分页警告（极其重要）
ZStack API 默认每次最多返回100条记录（分页）。这意味着：
- zstack_query 返回的数组长度最多100，**绝对不能**用数组长度当作资源总数！
- 如果你看到返回了100条记录，真实总数很可能远大于100
- **获取准确总数的唯一方法**：使用 ZQL count，例如 "count vminstance"
- 查询资源时，**必须先用 ZQL count 获取真实总数**，再决定如何展示

## 常用 API 路径参考
vm-instances, images, instance-offerings, disk-offerings, volumes, volume-snapshots, volume-backups,
hosts, clusters, zones, l2-networks, l3-networks, vips, eips, port-forwarding, security-groups,
load-balancers, load-balancers/listeners, load-balancers/servergroups,
vpc/virtual-routers, vrouter-route-tables, vpcfirewalls, ipsec,
primary-storage, backup-storage, primary-storage/ceph, backup-storage/ceph,
accounts, iam2/projects, iam2/virtual-ids,
zwatch/alarms, zwatch/events/subscriptions, zwatch/monitorgroups,
scheduler/jobs, scheduler/triggers, global-configurations, system-tags, management-nodes,
nics, vm-instances/cdroms, affinity-groups, ssh-key-pair,
autoscaling/groups, baremetal2/bm-instances, cdp-task, v2vs,
certificates, ldap/servers, licenses

## 创建资源的 body 格式
创建资源时 body 通常为 { "params": { ...fields } }，具体字段参考 ZStack API 文档。

### 创建云主机
创建资源时 body 通常为 { "params": { ...fields } }，具体字段参考 ZStack API 文档。
常见创建示例：
- 创建云主机: { "params": { "name": "xxx", "instanceOfferingUuid": "xxx", "imageUuid": "xxx", "l3NetworkUuids": ["xxx"] } }
- 创建VIP: { "params": { "name": "xxx", "l3NetworkUuid": "xxx" } }
- 创建负载均衡器: { "params": { "name": "xxx", "vipUuid": "xxx" } }
- 创建监听器: { "params": { "name": "xxx", "loadBalancerPort": 80, "instancePort": 80, "protocol": "tcp" } }
  路径: load-balancers/{lbUuid}/listeners
- 创建服务器组: { "params": { "name": "xxx" } }
  路径: load-balancers/{lbUuid}/servergroups
- 创建EIP: { "params": { "name": "xxx", "vipUuid": "xxx", "vmNicUuid": "xxx" } }
- 创建安全组: { "params": { "name": "xxx" } }

## Action 操作的 body 格式
Action 操作 body 格式为 { "actionName": { ...params } }，例如：
- 启动云主机: { "startVmInstance": {} }
- 停止云主机: { "stopVmInstance": { "type": "grace" } }
- 迁移云主机: { "migrateVm": { "hostUuid": "xxx" } }
- 刷新LB: { "refreshLoadBalancer": {} }
- 添加后端服务器: { "addBackendServer": { "vmNicUuids": ["xxx"] } }
- 挂载云盘: { "attachDataVolume": { "vmInstanceUuid": "xxx" } }

## 效率优化
- 尽量一次调用多个工具（并行 tool_call），不要一个一个串行调
- 创建多台相同配置的 VM 时，获取一次规格/镜像/网络信息后批量创建
- 复杂操作（如"创建LB并添加后端"）拆成清晰步骤，但每步尽量合并多个调用
- 用 ZQL 做复杂查询比多次 query 更高效

## 回复规范
- 用中文回复
- 危险操作（删除、停机）需要明确提醒`;

const QUERY_MODE_COMPACT = `
## 当前查询模式：⚡ 精简模式
**查询资源的标准流程（必须严格遵守）：**
1. 第一步：用 ZQL count 获取真实总数，如 "count vminstance"，按状态分别统计 "count vminstance where state='Running'" 等
2. 第二步：用概览告知用户（如：总数 705 台，运行中 500，已停止 180，其它 25）
3. 第三步：用 zstack_query（limit=20）展示前20条记录的表格
4. 第四步：告知用户"以上为前20条，共 X 条，需要查看更多吗？"
⚠️ 绝对禁止用 API 返回的数组长度当总数！API 默认只返回100条！`;

const QUERY_MODE_FULL = `
## 当前查询模式：📋 全量模式
**查询资源的标准流程（必须严格遵守）：**
1. 第一步：用 ZQL count 获取真实总数，如 "count vminstance"，按状态分别统计
2. 第二步：用概览告知用户（如：总数 705 台，运行中 500，已停止 180，其它 25）
3. 第三步：分批查询并展示全部数据：
   - 每批用 zstack_query（limit=100, start=0/100/200/...）翻页获取
   - 或用 ZQL 翻页：query vminstance limit 100 offset 0, query vminstance limit 100 offset 100, ...
   - 每批数据立即用表格展示，表格包含：序号、名称、状态、IP、关键属性
   - 持续翻页直到获取全部数据，不要中途停下来问用户
4. 如果总数超过 500 条，先展示前 500 条，然后告知用户剩余数量并询问是否继续
⚠️ 绝对禁止用 API 返回的数组长度当总数！API 默认只返回100条！
⚠️ 全量模式的核心目标是展示尽可能多的数据，不要缩减列数或行数`;

// ========== Tool Definitions (OpenAI format) ==========
const TOOLS = [
    {
    type: 'function',
    function: {
      name: 'zstack_query',
      description: '通用查询：查询任意 ZStack 资源列表。resource_path 为 API 路径（不含 v1/ 前缀），如 "vm-instances"、"load-balancers/listeners"、"hosts"',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径，如 vm-instances, volumes, load-balancers, hosts, l3-networks 等' },
          conditions: { type: 'array', items: { type: 'string' }, description: '查询条件列表，如 ["name=test", "state=Running"]' },
          limit: { type: 'integer', description: '返回数量限制，默认100' },
          start: { type: 'integer', description: '起始偏移' },
          sort_by: { type: 'string', description: '排序字段' },
          sort_direction: { type: 'string', enum: ['asc', 'desc'], description: '排序方向' }
        },
        required: ['resource_path']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_get',
      description: '通用获取：根据 UUID 获取单个资源详情',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' }
        },
        required: ['resource_path', 'uuid']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_create',
      description: '通用创建：创建任意 ZStack 资源。body 通常为 {"params": {...}}。注意某些资源创建路径包含父资源UUID，如 load-balancers/{lbUuid}/listeners',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: '创建API路径（含父资源UUID），如 "v1/load-balancers/xxx-uuid/listeners"' },
          body: { type: 'object', description: '请求体，通常为 {"params": {...fields}}' }
        },
        required: ['resource_path', 'body']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_delete',
      description: '通用删除：删除任意 ZStack 资源',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' },
          delete_mode: { type: 'string', enum: ['Permissive', 'Enforcing'], description: '删除模式，默认Permissive' }
        },
        required: ['resource_path', 'uuid']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_action',
      description: '通用操作：对资源执行 action（启停、迁移、挂载、刷新等）。body 格式为 {"actionName": {...params}}',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' },
          body: { type: 'object', description: '操作体，如 {"startVmInstance": {}}' }
        },
        required: ['resource_path', 'uuid', 'body']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_update',
      description: '通用更新：更新资源属性',
      parameters: {
        type: 'object',
        properties: {
          resource_path: { type: 'string', description: 'API资源路径' },
          uuid: { type: 'string', description: '资源UUID' },
          body: { type: 'object', description: '更新体，如 {"updateVmInstance": {"name": "new-name"}}' }
        },
        required: ['resource_path', 'uuid', 'body']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'zstack_zql',
      description: 'ZQL查询：使用 ZStack Query Language 执行复杂查询。支持 query（查数据）和 count（统计数量）。示例："query vminstance where state=Running"、"count vminstance"、"count vminstance where state=Stopped"。⚠️ 查询资源前必须先用 count 获取真实总数，不要用 API 返回数组长度当总数！',
      parameters: {
        type: 'object',
        properties: {
          zql: { type: 'string', description: 'ZQL查询语句' }
        },
        required: ['zql']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_vms',
      description: '快捷：查询云主机列表',
      parameters: {
        type: 'object',
        properties: { conditions: { type: 'array', items: { type: 'string' } } }
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'create_vm',
      description: '快捷：创建云主机',
      parameters: {
        type: 'object',
        properties: {
          params: {
            type: 'object',
            description: '创建参数：name, instanceOfferingUuid, imageUuid, l3NetworkUuids, dataDiskOfferingUuids, rootDiskOfferingUuid, description 等'
          }
        },
        required: ['params']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'start_vm',
      description: '快捷：启动云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'stop_vm',
      description: '快捷：停止云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' }, type: { type: 'string', enum: ['grace', 'cold'] } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'reboot_vm',
      description: '快捷：重启云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'delete_vm',
      description: '快捷：删除云主机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' } }, required: ['uuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'migrate_vm',
      description: '快捷：迁移云主机到指定物理机',
      parameters: { type: 'object', properties: { uuid: { type: 'string' }, hostUuid: { type: 'string' } }, required: ['uuid', 'hostUuid'] }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_hosts',
      description: '快捷：查询物理机列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_images',
      description: '快捷：查询镜像列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_l3_networks',
      description: '快捷：查询L3网络列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_instance_offerings',
      description: '快捷：查询计算规格列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_volumes',
      description: '快捷：查询云盘列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_load_balancers',
      description: '快捷：查询负载均衡器列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_vips',
      description: '快捷：查询VIP列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_eips',
      description: '快捷：查询弹性IP列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_security_groups',
      description: '快捷：查询安全组列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  },
  {
    type: 'function',
    function: {
      name: 'query_vpc_routers',
      description: '快捷：查询VPC路由器列表',
      parameters: { type: 'object', properties: { conditions: { type: 'array', items: { type: 'string' } } } }
    }
  }
];

// Anthropic format tools
const TOOLS_ANTHROPIC = TOOLS.map(t => ({
  name: t.function.name,
  description: t.function.description,
  input_schema: t.function.parameters
}));
