// MCP Client — communicates with zstack-mcp-server via streamable-http (JSON-RPC 2.0)
export class MCPClient {
  constructor(serverUrl = 'http://localhost:8000') {
    this._serverUrl = serverUrl.replace(/\/+$/, '');
    this._sessionId = null;
    this._initialized = false;
    this._enabled = true;
  }

  get enabled() { return this._enabled; }
  set enabled(v) { this._enabled = !!v; }

  get serverUrl() { return this._serverUrl; }
  set serverUrl(url) {
    this._serverUrl = (url || 'http://localhost:8000').replace(/\/+$/, '');
    this._initialized = false;
    this._sessionId = null;
  }

  async _post(body) {
    const headers = { 'Content-Type': 'application/json', 'Accept': 'application/json, text/event-stream' };
    if (this._sessionId) headers['Mcp-Session-Id'] = this._sessionId;

    const res = await fetch(`${this._serverUrl}/mcp`, {
      method: 'POST',
      headers,
      body: JSON.stringify(body)
    });

    const sid = res.headers.get('Mcp-Session-Id');
    if (sid) this._sessionId = sid;

    if (!res.ok) {
      const text = await res.text();
      throw new Error(`MCP Server error ${res.status}: ${text}`);
    }

    const contentType = res.headers.get('Content-Type') || '';
    if (contentType.includes('text/event-stream')) {
      return this._parseSSE(res);
    }
    const text = await res.text();
    if (!text || !text.trim()) return null;
    try {
      return JSON.parse(text);
    } catch (e) {
      throw new Error(`MCP 响应非合法 JSON: ${text.slice(0, 200)}`);
    }
  }

  async _parseSSE(res) {
    const reader = res.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '';
    let lastData = null;

    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      buffer += decoder.decode(value, { stream: true });
      const lines = buffer.split('\n');
      buffer = lines.pop() || '';
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('data: ')) {
          try { lastData = JSON.parse(trimmed.slice(6)); } catch { /* skip */ }
        }
      }
    }
    return lastData;
  }

  async _initialize() {
    if (this._initialized) return;
    const result = await this._post({
      jsonrpc: '2.0', id: 1, method: 'initialize',
      params: {
        protocolVersion: '2025-03-26',
        capabilities: {},
        clientInfo: { name: 'zstack-ai-assistant', version: '1.0.0' }
      }
    });
    this._initialized = true;
    await this._post({ jsonrpc: '2.0', method: 'notifications/initialized' });
    return result ?? {};
  }

  async callTool(toolName, args) {
    if (!this._enabled) throw new Error('MCP Server 未启用');
    await this._initialize();
    const result = await this._post({
      jsonrpc: '2.0', id: Date.now(), method: 'tools/call',
      params: { name: toolName, arguments: args || {} }
    });
    if (result?.error) throw new Error(result.error.message || JSON.stringify(result.error));
    const content = result?.result?.content;
    if (Array.isArray(content)) {
      const textParts = content.filter(c => c.type === 'text').map(c => c.text);
      const combined = textParts.join('\n');
      try { return JSON.parse(combined); } catch { return combined || content; }
    }
    return result?.result || result;
  }

  async testConnection() {
    try {
      this._initialized = false;
      this._sessionId = null;
      await this._initialize();
      return { ok: true, message: 'MCP Server 连接成功' };
    } catch (e) {
      return { ok: false, message: `连接失败: ${e.message}` };
    }
  }
}
