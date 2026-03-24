// LLM Engine with ZStack Full API Coverage + Streaming Support
import { PlaybookEngine } from './playbooks.js';
import { WorkflowEngine } from './workflow-engine.js';

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
    this.playbookEngine = new PlaybookEngine();
    this.workflowEngine = new WorkflowEngine();
  }

  configure({ apiKey, baseUrl, provider, model, zstackClient, queryMode, mcpClient }) {
    if (apiKey !== undefined) this.apiKey = apiKey;
    if (baseUrl !== undefined) this.baseUrl = baseUrl;
    if (provider) this.provider = provider;
    if (model !== undefined) this.model = model;
    if (zstackClient) this.zstackClient = zstackClient;
    if (queryMode) this.queryMode = queryMode;
    if (mcpClient !== undefined) this.mcpClient = mcpClient;

    // Validate model is configured
    if (!this.model) {
      this.model = LLMEngine.DEFAULT_MODELS[this.provider] || 'gpt-4o-mini';
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
    const mcpAddon = this.mcpClient?.enabled ? MCP_PROMPT_ENABLED : MCP_PROMPT_DISABLED;
    const playbookAddon = this.playbookEngine.generatePromptAddon();
    return SYSTEM_PROMPT_BASE + '\n' + modeInstructions + '\n' + mcpAddon + '\n' + playbookAddon;
  }

  _getTools() {
    if (this.mcpClient?.enabled) return TOOLS;
    return TOOLS.filter(t => !LLMEngine.MCP_TOOLS.has(t.function.name));
  }

  _getToolsAnthropic() {
    return this._getTools().map(t => ({
      name: t.function.name,
      description: t.function.description,
      input_schema: t.function.parameters
    }));
  }

  // Default base URLs per provider
  static BASE_URLS = {
    openai: 'https://api.openai.com/v1',
    anthropic: 'https://api.anthropic.com/v1',
    glm: 'https://open.bigmodel.cn/api/paas/v4',
    deepseek: 'https://api.deepseek.com/v1',
    qwen: 'https://dashscope.aliyuncs.com/compatible-mode/v1',
    minimax: 'https://api.minimax.chat/v1',
    kimi: 'https://api.moonshot.cn/v1'
  };

  // Default model per provider
  static DEFAULT_MODELS = {
    openai: 'gpt-4o-mini',
    anthropic: 'claude-sonnet-4',
    glm: 'glm-4',
    deepseek: 'deepseek-chat',
    qwen: 'qwen-turbo',
    minimax: 'MiniMax-Text-01',
    kimi: 'kimi-k2.5'
  };

  // Providers that use OpenAI-compatible API format
  static OPENAI_COMPAT = new Set(['openai', 'glm', 'deepseek', 'qwen', 'minimax', 'kimi']);

  async chat(userMessage, onEvent) {
    const msgSnapshot = this.messages.length;
    this.messages.push({ role: 'user', content: userMessage });
    const emit = (type, data) => { if (onEvent) onEvent({ type, ...data }); };

    this._abortController = new AbortController();
    const signal = this._abortController.signal;

    const maxRounds = 20;
    const startTime = Date.now();
    const timeoutMs = 8 * 60 * 1000;

    try {
      for (let i = 0; i < maxRounds; i++) {
        if (signal.aborted) {
          this.messages.length = msgSnapshot;
          return '已停止生成。';
        }
        if (Date.now() - startTime > timeoutMs) {
          return '操作超时(8分钟)，部分操作可能已完成。请查看云平台确认状态。';
        }

        const isAnthropic = this.provider === 'anthropic' && !LLMEngine.OPENAI_COMPAT.has(this.provider);
        const response = isAnthropic
          ? await this._callAnthropicStream(emit, signal)
          : await this._callOpenAIStream(emit, signal);

        if (signal.aborted) {
          this.messages.length = msgSnapshot;
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
        this.messages.length = msgSnapshot;
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
      case 'search_api':
        return `搜索 API: ${(args.keywords || []).join(', ')}`;
      case 'describe_api':
        return `查看 API 参数: ${args.api_name || ''}`;
      case 'execute_api':
        return `执行 API: ${args.api_name || ''}`;
      case 'search_metric':
        return `搜索监控指标: ${(args.keywords || []).join(', ')}`;
      case 'get_metric_data':
        return `获取监控数据: ${args.namespace || ''}/${args.metric_name || ''}`;
      case 'get_metric_summary':
        return `获取指标汇总: ${args.namespace || ''}/${args.metric_name || ''} by ${args.label_key || ''}`;
      default:
        return name.replace(/_/g, ' ');
    }
  }

  // Models that don't support tool calling
  static NO_TOOL_MODELS = new Set(['deepseek-reasoner', 'o1', 'o1-mini']);

  // Build request body with provider-specific adjustments
  _buildOpenAIBody(stream = true) {
    const supportsTools = !LLMEngine.NO_TOOL_MODELS.has(this.model);
    const compressed = this._compressMessages([...this.messages]);
    const body = {
      model: this.model,
      messages: [{ role: 'system', content: this._systemPrompt() }, ...compressed],
      stream
    };

    // 不传 max_tokens，让各 provider 用模型默认上限，避免限制大模型能力

    if (supportsTools) {
      body.tools = this._getTools();
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
        return this._callOpenAINonStream(signal, emit);
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
      if (typeof text !== 'string') text = JSON.stringify(text) || '';
      const chineseChars = (text.match(/[\u4e00-\u9fa5]/g) || []).length;
      const otherChars = text.length - chineseChars;
      return Math.ceil(chineseChars / 2.5 + otherChars / 3.5);
    };

    const promptTokens = messages.reduce((sum, m) => sum + estimateChars(m.content), 0);
    const completionTokens = estimateChars(content);
    const totalTokens = promptTokens + completionTokens;

    if (emitLog) {
      console.log('[Token Usage] Prompt:', promptTokens, 'Completion:', completionTokens, 'Total:', totalTokens, 'Msgs:', messages.length);
    }

    return {
      prompt_tokens: promptTokens,
      completion_tokens: completionTokens,
      total_tokens: totalTokens
    };
  }

  _compressMessages(msgs) {
    const MAX_TOKENS = 60000;
    const KEEP_RECENT = 10;
    const estimateChars = (text) => {
      if (!text) return 0;
      if (typeof text !== 'string') text = JSON.stringify(text) || '';
      return Math.ceil(text.length / 3);
    };
    const totalTokens = () => msgs.reduce((s, m) => s + estimateChars(m.content), 0);

    if (totalTokens() <= MAX_TOKENS) return msgs;

    for (let i = 0; i < msgs.length - KEEP_RECENT; i++) {
      const m = msgs[i];
      const c = typeof m.content === 'string' ? m.content : JSON.stringify(m.content) || '';
      if (m.role === 'tool' && c.length > 500) {
        msgs[i] = { ...m, content: c.slice(0, 300) + '...[截断]' };
      } else if (m.role === 'assistant' && c.length > 1000) {
        msgs[i] = { ...m, content: c.slice(0, 500) + '...[截断]' };
      }
    }

    while (totalTokens() > MAX_TOKENS && msgs.length > KEEP_RECENT) {
      msgs.shift();
    }

    return msgs;
  }

  // ========== OpenAI Non-Streaming Fallback ==========
  async _callOpenAINonStream(signal, emit = () => {}) {
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
        messages: this._compressMessages([...this.messages]),
        tools: this._getToolsAnthropic(),
        max_tokens: 16384,
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

  static MCP_TOOLS = new Set([
    'search_api', 'describe_api', 'execute_api',
    'search_metric', 'get_metric_data', 'get_metric_summary',
    'search_docs', 'get_doc_stats'
  ]);

  async _executeTool(name, args) {
    // Workflow tools
    if (name === 'list_workflows') {
      return { workflows: this.workflowEngine.list() };
    }
    if (name === 'describe_workflow') {
      const wf = this.workflowEngine.get(args.workflow_id);
      if (!wf) return { error: `未找到工作流: ${args.workflow_id}` };
      return {
        id: wf.id, name: wf.name, description: wf.description,
        parameters: wf.parameters,
        steps: wf.steps.map(s => ({
          id: s.id, action: s.action, description: s.id,
          parallel: s.parallel?.map(p => p.id),
          loop: s.loop, condition: s.condition
        }))
      };
    }
    if (name === 'execute_workflow') {
      try {
        const result = await this.workflowEngine.execute(
          args.workflow_id, args.params || {},
          { zstackClient: this.zstackClient, mcpClient: this.mcpClient }
        );
        return result;
      } catch (e) {
        return { error: `工作流执行失败: ${e.message}` };
      }
    }

    if (LLMEngine.MCP_TOOLS.has(name)) {
      if (!this.mcpClient?.enabled) return { error: 'MCP Server 未启用，请在设置中开启并配置 MCP Server 地址' };
      try {
        return await this.mcpClient.callTool(name, args);
      } catch (e) {
        return { error: `MCP 调用失败: ${e.message}` };
      }
    }

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
const SYSTEM_PROMPT_BASE = `你是 ZStack Cloud 专业运维与技术专家，深度掌握 ZStack 整体架构、全量 API 接口及底层实现原理，协助客户完成云平台日常运维、故障排查、容量规划、变更操作等工作。

---

## 一、角色定位与专业准则

### 专业素养
- 你是一名经验丰富的 ZStack 运维工程师，而非通用助手，任何回复都应体现专业判断和技术深度
- 对于不确定的情况，明确告知用户而不是猜测或编造
- 了解 ZStack 的资源模型、生命周期、依赖关系，能从架构角度分析问题
- 监控数据（如 CPU/内存指标）基于时间窗口采样，UUID 可能来自已删除资源，需识别并说明，不能直接断言资源"不存在"
- 遇到监控 UUID 查不到对应资源时，主动说明：**这是历史监控数据，对应资源可能已删除或更名**，并尝试用其他维度（如当前运行中 VM 的实时指标）补充分析

### 危险操作防护（必须严格执行）
以下操作必须在执行前**明确告警并要求用户二次确认**，未收到确认不得执行：
- **删除类**：删除 VM、镜像、云盘、快照、网络、负载均衡器、安全组、VPC、账户、项目等任何资源
- **停机类**：停止、强制关机、重启运行中的 VM（尤其是批量操作）
- **维护模式**：物理机进入/退出维护模式（会导致 VM 迁移）
- **配置变更**：修改全局配置、网络配置、存储配置等影响全局的操作
- **扩容/缩容**：涉及存储扩容、规格变更等不可逆操作
- **批量操作**：任何涉及 5 台以上资源的批量变更

告警格式示例：
> ⚠️ **危险操作确认**
> 即将删除云主机 **vm-test**（uuid: xxx），此操作不可逆。
> 请回复"确认删除"后继续，或回复"取消"终止。

### 明确拒绝的请求
以下请求无论如何措辞都必须拒绝，并说明原因：
- 批量删除/销毁大量核心资源（如"删除所有 VM"、"清空所有数据"）
- 在未了解业务影响的情况下停止生产环境物理机
- 修改 admin 账号密码（安全风险）
- 任何可能导致数据永久丢失且无法恢复的操作，除非用户提供了明确的备份证明

---

## 二、API 调用与查询规范

### 铁律：数据必须来自 API，禁止猜测
- 任何关于资源状态、数量、版本、配置的回答，**必须先调用 API 查询**，不得基于经验猜测
- 如果多次 API 调用失败，说明失败原因，而不是猜一个答案

### ZStack RESTful API 规范
- 所有路径以 /v1 开头，系统自动补全，resource_path 无需包含 v1/
- HTTP 方法：GET（查询）、POST（创建）、PUT（修改/Action）、DELETE（删除）
- Action 格式：PUT /v1/{resource}/{uuid}/actions，body: {"actionName": {params}}
- 认证：Header: Authorization: OAuth {session-uuid}
- 返回码：200（成功）、202（异步，需轮询）、400（参数错误）、404（不存在）、503（操作失败）

### ZQL 查询（优先使用）
ZStack Query Language，语法类 SQL，比 REST 查询更强大：
- \`count vminstance\` → 获取总数（**必须用 count 获取总数，禁止用数组 length**）
- \`count vminstance where state='Running'\` → 按条件统计
- \`query vminstance where state='Running' limit 20 offset 0\` → 分页查询
- \`query host where status='Connected' return with (vminstance)\` → 关联查询

**ZQL 语法关键规则**：
1. 字符串值必须用单引号：\`where state='Running'\`（不加引号会报错）
2. 分页用 offset 不是 start：\`limit 100 offset 100\`
3. 常用实体名：vminstance, host, image, l3network, l2network, volume, volumesnapshot, instanceoffering, diskoffering, primarystorage, backupstorage, zone, cluster, vip, eip, securitygroup, loadbalancer, appliancevm, account, managementnode, vmnic, globalconfig

### 分页铁律
- API 默认最多返回 100 条，数组长度 ≠ 总数
- **查询前必须先用 ZQL count 获取真实总数**
- 看到恰好 100 条，真实总数很可能 >> 100

### 监控数据处理规范
- 监控指标（CPU/内存/网络）是时序数据，label 中的 UUID 是采样时刻的资源 UUID
- 拿到 UUID 查不到 VM 时：**该 UUID 对应资源可能已删除**，这是正常现象，明确说明
- 分析 CPU 高负载时，应额外查询当前运行中 VM 的实时状态，与历史监控数据结合分析
- 监控值单位注意：CPU 使用率通常是 0-1（1=100%）或 0-100，需确认后再呈现

### 监控数据查询须知
⚠️ **ZStack REST API 和 ZQL 不包含实时监控数据**——zstack_query 和 zstack_zql 查不到 CPU 使用率、内存使用率、网络流量等指标！
⚠️ 不要尝试用 zstack_query 去查 zwatch/metrics 或 zwatch/alarms 来获取实时使用率，这条路不通

---

## 三、核心 API 参考

### 计算资源
| 资源 | API路径 | 关键操作 |
|------|---------|---------|
| 云主机 | vm-instances | query/create/delete, actions: startVmInstance, stopVmInstance{type:grace\|cold}, rebootVmInstance, migrateVm{hostUuid} |
| 镜像 | images | query/create/delete |
| 计算规格 | instance-offerings | query |
| 云盘规格 | disk-offerings | query |

### 存储资源
| 资源 | API路径 | 关键操作 |
|------|---------|---------|
| 云盘 | volumes | query/create(volumes/data)/delete, actions: attachDataVolume, detachDataVolume, resizeDataVolume |
| 快照 | volume-snapshots | query/create/delete |
| 主存储 | primary-storage | query |
| 备份存储 | backup-storage | query |

### 网络资源
| 资源 | API路径 | 备注 |
|------|---------|------|
| L2网络 | l2-networks | query |
| L3网络 | l3-networks | query |
| VIP | vips | query/create/delete |
| 弹性IP | eips | query/create/delete, actions: attachEip, detachEip |
| 安全组 | security-groups | query/create/delete, rules, vm-nics |
| 端口转发 | port-forwarding | query/create |
| 负载均衡 | load-balancers | query/create/delete, listeners, servergroups |
| VPC路由器 | vpc/virtual-routers | query/create, dns |

### 基础设施
| 资源 | API路径 | 备注 |
|------|---------|------|
| 物理机 | hosts | query, actions: connect, enterMaintenanceMode, exitMaintenanceMode |
| 集群 | clusters | query |
| 区域 | zones | query |
| 管理节点 | management-nodes | query, actions: getVersion |

### 身份与权限
| 资源 | API路径 |
|------|---------|
| 账户 | accounts |
| IAM2项目 | iam2/projects |
| 虚拟身份 | iam2/virtual-ids |
| 组织 | iam2/organizations |

### 监控与运维
| 资源 | API路径 |
|------|---------|
| 告警 | zwatch/alarms |
| 触发器 | zwatch/triggers |
| 全局配置 | global-configurations |
| 定时任务 | scheduler/jobs |
| 系统标签 | system-tags |
| 标签 | tags |

### 其他资源路径参考
nics, vm-instances/cdroms, affinity-groups, ssh-key-pair, ipsec,
vrouter-route-tables, vpcfirewalls, primary-storage/ceph, backup-storage/ceph,
autoscaling/groups, autoscaling/rules, baremetal2/bm-instances, baremetal2/chassis,
cdp-task, cdp-backup-storage/policy, v2vs, v2v-conversion-hosts,
certificates, ldap/servers, licenses

---

## 四、常用操作 Body 格式速查

### 创建资源
\`\`\`
创建云主机: POST vm-instances, {"params": {"name":"x","instanceOfferingUuid":"x","imageUuid":"x","l3NetworkUuids":["x"]}}
创建数据盘: POST volumes/data, {"params": {"name":"x","diskOfferingUuid":"x","primaryStorageUuid":"x"}}
创建快照:   POST volume-snapshots, {"params": {"volumeUuid":"x","name":"x"}}
创建VIP:    POST vips, {"params": {"name":"x","l3NetworkUuid":"x"}}
创建EIP:    POST eips, {"params": {"name":"x","vipUuid":"x","vmNicUuid":"x"}}
创建安全组: POST security-groups, {"params": {"name":"x"}}
创建LB:     POST load-balancers, {"params": {"name":"x","vipUuid":"x"}}
创建监听器: POST load-balancers/{uuid}/listeners, {"params": {"name":"x","loadBalancerPort":80,"instancePort":80,"protocol":"tcp"}}
创建标签:   POST tags, {"params": {"resourceType":"VmInstanceVO","resourceUuid":"x","tag":"x"}}
\`\`\`

### Action 操作
\`\`\`
启动VM:       {"startVmInstance": {}}
停止VM(优雅): {"stopVmInstance": {"type": "grace"}}
停止VM(强制): {"stopVmInstance": {"type": "cold"}}
重启VM:       {"rebootVmInstance": {}}
迁移VM:       {"migrateVm": {"hostUuid": "x"}}
获取版本:     {"getVersion": {}}   ← 无需uuid，直接对 management-nodes 执行
物理机维护:   {"enterMaintenanceMode": {}}
挂载云盘:     {"attachDataVolume": {"vmInstanceUuid": "x"}}
卸载云盘:     {"detachDataVolume": {}}
绑定EIP:      {"attachEip": {"vmNicUuid": "x"}}
\`\`\`

---

## 五、输出规范

### 格式要求
- **全程中文**
- **禁止输出** \`<think>\`、\`<thought>\` 或任何思考标签，禁止输出内心独白、"让我查一下"等废话
- 查询结果用表格，只展示关键字段（名称、状态、IP/UUID、CPU/内存等）
- 操作成功说"已完成"，失败说清楚原因
- 无需开场白、道歉、闲话、"如有需要请告知"等

### 数据呈现规范
- UUID 截断展示（前8位+...），除非用户明确需要完整 UUID
- 内存单位统一转换为 GB（bytes → GB = / 1073741824）
- CPU 使用率统一转为百分比（若原始值为 0-1，乘以 100%）
- 时间戳统一转为可读格式
- 容量统一转为合适单位（GB/TB）

### 效率优化
- 并行调用多个工具（不要串行一个个查）
- 复杂任务先拆步骤，每步内并行
- 优先 ZQL 做复杂条件查询
- 查 VM 名称时批量查（用 UUID 列表过滤），而非逐个 get

### 高 CPU 负载分析标准流程
当用户询问高负载 VM 时：
1. 调用 get_metric_summary 获取 CPU Top N（namespace: ZStack/VM，metric: CPUUsedUtilization）
2. 将返回的 UUID 批量用 ZQL 查询：\`query vminstance where uuid in ('uuid1','uuid2',...)\`（注意：ZQL in 用逗号分隔字符串）
3. 若部分 UUID 查不到，说明是历史数据，对应资源已删除，正常现象
4. 合并监控值与 VM 名称/状态，输出完整表格
5. 区分"当前运行且高负载"与"已删除资源的历史数据"，分别呈现

---

## 六、ZStack 架构知识背景

### 资源层级
区域（Zone）→ 集群（Cluster）→ 物理机（Host）→ 云主机（VM Instance）
备份存储（Backup Storage）→ 镜像（Image）
主存储（Primary Storage）→ 云盘（Volume）
L2 网络 → L3 网络 → IP 地址 / VIP / EIP

### 关键概念
- **管理节点（MN）**：ZStack 控制平面，所有 API 入口，可查版本、状态
- **ApplianceVM**：VPC 路由器底层是一台特殊 VM，ZQL 实体名为 appliancevm
- **Session**：ZStack 认证令牌，通过登录获取，有效期内可复用
- **异步 API**：返回 202 时需轮询 job location 获取最终结果
- **ZWatch**：ZStack 监控系统，支持 namespace/metric 两级指标体系
- **IAM2**：新版身份认证系统，项目/虚拟身份/组织三层模型

### 危险操作风险说明
- enterMaintenanceMode：物理机进维护模式会触发 VM 热迁移，需确认目标主机容量
- 删除主存储/备份存储：会影响所有依赖该存储的 VM 和镜像，高风险
- 批量停止 VM：需确认业务影响，生产环境需提前通知
- 修改全局配置：部分配置修改需要重启组件才生效，且影响全局

---

## 七、危险操作（删除、停机、批量变更）必须明确提醒，未确认不执行`;


const MCP_PROMPT_ENABLED = `

## MCP 监控与 API 发现（当前状态：✅ 已启用，可直接使用）

你拥有 6 个 MCP 工具。监控数据**只能通过这些工具获取**，不要用 zstack_query 尝试。

### 监控数据查询（直接调用，不要犹豫）

用户问到 CPU/内存/网络/磁盘使用率、负载排名时，**立即调用以下工具**：

| 用户问题举例 | 调用工具 | 必须传的参数 |
|------------|---------|------------|
| CPU 使用率最高的 VM | get_metric_summary | namespace:"ZStack/VM", metric_name:"CPUUsedUtilization", label_key:"VMUuid", top_n:10, resolve_resource:"vm" |
| 内存使用率最高的 VM | get_metric_summary | namespace:"ZStack/VM", metric_name:"MemoryUsedInPercent", label_key:"VMUuid", top_n:10, resolve_resource:"vm" |
| 物理机 CPU 负载排名 | get_metric_summary | namespace:"ZStack/Host", metric_name:"CPUUsedUtilization", label_key:"HostUuid", top_n:10, resolve_resource:"host" |
| 网络流量最大的 VM | get_metric_summary | namespace:"ZStack/VM", metric_name:"NetworkOutBytes", label_key:"VMUuid", top_n:10, resolve_resource:"vm" |
| 某台 VM 的 CPU 历史曲线 | get_metric_data | namespace:"ZStack/VM", metric_name:"CPUUsedUtilization", labels:["VMUuid=具体uuid"] |
| 不确定监控指标名 | search_metric | keywords:["CPU"] 或 ["内存"] |

### API 智能发现与专业操作

你拥有 search_api 和 describe_api，相当于随时可以查阅完整的 ZStack API 文档。善用它们让自己更专业：

**主动查阅（不要凭记忆猜参数）：**
- 执行非常见操作前，先 describe_api 确认参数格式和必填字段
- 遇到 API 报错时，describe_api 查正确参数后重试
- 用户提到不熟悉的 ZStack 功能时，search_api 搜索相关 API 了解能力范围
- 为用户解释某个功能的实现原理时，search_api 找出所有相关 API 进行全面分析

**execute_api — 通过 MCP Server 代理执行 API：**
- 当直连工具（zstack_query 等）报错或不支持某些 API 时，可用 execute_api 作为备选
- execute_api 能调用任何 ZStack API，包括一些直连工具未覆盖的高级 API

### 工具选择优先级
1. 增删改查（CRUD）→ 优先 zstack_query/zstack_create 等直连工具（延迟更低）
2. 监控/使用率/负载/指标 → **只能用 MCP 监控工具**
3. 不确定 API → search_api + describe_api 先查再做
4. 直连工具报错 → execute_api 代理执行
5. 两类问题并存 → 并行调用（如"有多少 VM + CPU 最高的"→ 同时调 zstack_zql 和 get_metric_summary）

### 知识库查询（search_docs）
当需要解释 ZStack 概念、查找操作指南、排查故障方案、或回答最佳实践问题时，**先用 search_docs 查阅知识库**：
- 遇到用户问"怎么做XX"类的操作指南问题 → search_docs 查找指南
- 遇到故障排查场景 → search_docs 查找 troubleshooting 类文档
- 引用文档内容时注明来源
- 文档内容与 API 实际行为冲突时，以 API 为准

### 专业行为准则
- **遇到不确定的操作，查了再做**，不要凭猜测执行 API
- **API 报错后，describe_api 看参数说明，修正后重试**，而不是直接告诉用户"失败了"
- **主动关联信息**：查到 VM 的 UUID 后，如果用户可能关心 CPU/内存，主动获取监控数据一并呈现
- **批量操作高效执行**：多个独立查询并行发起，不要一个一个串行

### 负载分析输出规范
get_metric_summary 设 resolve_resource 自动解析名称，返回结果中每行有 exists 字段：
- exists=true → 资源当前存在，展示名称 + 指标值
- exists=false → 资源已删除，这是历史监控数据，**跳过不展示**（或单独标注为已删除）

**标准处理流程：**
1. 调用 get_metric_summary（设 resolve_resource）
2. 只展示 exists=true 的行给用户（用户关心的是当前存在的资源）
3. 如果所有行都是 exists=false，告诉用户"当前没有超过该阈值的运行中资源"，并展示存在的资源中 top N
4. 如果需要过滤阈值（如 >85%），在结果中按 aggregateValue 筛选，只展示超过阈值且 exists=true 的行
5. 不要反复用 zstack_query 去"验证" UUID 是否存在——exists 字段已经告诉你了`;

const MCP_PROMPT_DISABLED = `

## 监控数据查询（当前状态：❌ MCP Server 未启用）

用户问到 CPU/内存/网络使用率、负载排名等监控数据时，你无法获取这些数据。
回复示例："监控数据（CPU/内存使用率等）需要启用 MCP Server 后才能查询，请在设置页面的 MCP 标签页中启用。"
不要用 zstack_query 尝试查询监控数据——ZStack REST API 不包含实时监控指标。`;

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
  },
  // ========== MCP Server Tools ==========
  {
    type: 'function',
    function: {
      name: 'search_api',
      description: 'MCP：搜索 ZStack API。当不确定该用哪个 API、或想查找某个功能对应的 API 时使用。返回匹配的 API 列表及简要说明。',
      parameters: {
        type: 'object',
        properties: {
          keywords: { type: 'array', items: { type: 'string' }, description: '搜索关键词列表，如 ["snapshot", "创建"]' },
          category: { type: 'string', description: '按分类过滤，如 vmInstance、volume 等（可选）' },
          limit: { type: 'integer', description: '返回数量上限，默认 15' }
        },
        required: ['keywords']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'describe_api',
      description: 'MCP：查看 ZStack API 的详细参数说明。传入 API 名称（如 CreateVmInstance），返回完整的请求参数、类型、是否必填等信息。',
      parameters: {
        type: 'object',
        properties: {
          api_name: { type: 'string', description: 'API 名称，如 CreateVmInstance、QueryHost' }
        },
        required: ['api_name']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'execute_api',
      description: 'MCP：通过 MCP Server 执行 ZStack API。适用于需要 MCP Server 代理执行的场景。',
      parameters: {
        type: 'object',
        properties: {
          api_name: { type: 'string', description: 'API 名称，如 QueryVmInstance' },
          parameters: { type: 'object', description: 'API 参数字典' }
        },
        required: ['api_name', 'parameters']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'search_metric',
      description: 'MCP：搜索 ZStack 监控指标。查找可用的监控指标名称和命名空间，用于后续 get_metric_data 查询。',
      parameters: {
        type: 'object',
        properties: {
          keywords: { type: 'array', items: { type: 'string' }, description: '搜索关键词，如 ["CPU", "内存"]' },
          namespace: { type: 'string', description: '限定命名空间，如 ZStack/VM、ZStack/Host（可选）' },
          limit: { type: 'integer', description: '返回数量上限，默认 20' },
          match_mode: { type: 'string', enum: ['or', 'and'], description: '关键词匹配模式，默认 or' },
          prefer_namespaces: { type: 'array', items: { type: 'string' }, description: '优先展示的命名空间列表（可选）' }
        },
        required: ['keywords']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_metric_data',
      description: 'MCP：获取监控指标的时序数据。需要先通过 search_metric 确定 namespace 和 metric_name。',
      parameters: {
        type: 'object',
        properties: {
          namespace: { type: 'string', description: '命名空间，如 ZStack/VM' },
          metric_name: { type: 'string', description: '指标名称，如 CPUUsedUtilization' },
          start_time: { type: 'string', description: '起始时间，ISO 格式或相对时间如 -1h（可选）' },
          end_time: { type: 'string', description: '结束时间（可选）' },
          period: { type: 'integer', description: '采样周期（秒），默认 60' },
          labels: { type: 'array', items: { type: 'string' }, description: '标签过滤，如 ["VMUuid=xxx"]（可选）' },
          summary_only: { type: 'boolean', description: '只返回统计摘要，不返回原始数据点（可选）' }
        },
        required: ['namespace', 'metric_name']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_metric_summary',
      description: 'MCP：获取监控指标的 TopN 汇总（自动解析资源名称）。返回每行有 exists 字段标识资源是否仍存在。',
      parameters: {
        type: 'object',
        properties: {
          namespace: { type: 'string', description: '命名空间，如 ZStack/VM' },
          metric_name: { type: 'string', description: '指标名称，如 CPUUsedUtilization' },
          label_key: { type: 'string', description: '分组标签键，如 VMUuid' },
          start_time: { type: 'string', description: '起始时间（可选）' },
          end_time: { type: 'string', description: '结束时间（可选）' },
          period: { type: 'integer', description: '采样周期（秒），默认 60' },
          labels: { type: 'array', items: { type: 'string' }, description: '标签过滤（可选）' },
          top_n: { type: 'integer', description: '返回前 N 条，默认 10' },
          aggregate: { type: 'string', enum: ['avg', 'max', 'min', 'sum'], description: '聚合方式，默认 max' },
          threshold_op: { type: 'string', description: '阈值比较符，如 >,>=,<,<=（可选）' },
          threshold_value: { type: 'number', description: '阈值数值（可选）' },
          resolve_resource: { type: 'string', enum: ['vm', 'host'], description: '自动解析资源名称（必传）' }
        },
        required: ['namespace', 'metric_name', 'label_key']
      }
    }
  },
  // ========== Knowledge Base Tools ==========
  {
    type: 'function',
    function: {
      name: 'search_docs',
      description: 'MCP：搜索 ZStack 官方文档和运维知识库。遇到概念解释、操作指南、故障排查、最佳实践类问题时使用。返回匹配的文档片段。',
      parameters: {
        type: 'object',
        properties: {
          keywords: { type: 'array', items: { type: 'string' }, description: '搜索关键词，如 ["主存储", "扩容"] 或 ["VPC", "路由"]' },
          category: { type: 'string', description: '按分类过滤：guide / troubleshooting / api-reference / best-practice / faq / deployment / architecture（可选）' },
          limit: { type: 'integer', description: '返回数量上限，默认 5' }
        },
        required: ['keywords']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'get_doc_stats',
      description: 'MCP：获取知识库统计信息（文档数量、分类、索引状态）。',
      parameters: { type: 'object', properties: {} }
    }
  },
  // ========== Workflow Tools ==========
  {
    type: 'function',
    function: {
      name: 'list_workflows',
      description: '列出所有可用的运维工作流模板。当用户需要执行复合操作（如创建测试环境、批量快照、维护准备等）时，先列出可用 workflow。',
      parameters: { type: 'object', properties: {} }
    }
  },
  {
    type: 'function',
    function: {
      name: 'describe_workflow',
      description: '查看某个工作流的详细步骤和参数说明。',
      parameters: {
        type: 'object',
        properties: {
          workflow_id: { type: 'string', description: '工作流 ID，如 create-test-env' }
        },
        required: ['workflow_id']
      }
    }
  },
  {
    type: 'function',
    function: {
      name: 'execute_workflow',
      description: '执行一个预定义的运维工作流。⚠️ 涉及创建/删除操作的 workflow 执行前需告知用户步骤并获得确认。可用 workflow: create-test-env（创建测试环境）、cleanup-stopped-vms（清理已停止VM）、batch-vm-snapshot（批量快照）、host-maintenance-prep（物理机维护准备）',
      parameters: {
        type: 'object',
        properties: {
          workflow_id: { type: 'string', description: '工作流 ID' },
          params: { type: 'object', description: '工作流参数（参见 describe_workflow 获取详情）' }
        },
        required: ['workflow_id']
      }
    }
  }
];

// Anthropic format tools
const TOOLS_ANTHROPIC = TOOLS.map(t => ({
  name: t.function.name,
  description: t.function.description,
  input_schema: t.function.parameters
}));
