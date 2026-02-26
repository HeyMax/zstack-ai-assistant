import { ZStackClient } from './lib/zstack.js';
import { LLMEngine } from './lib/llm.js';

const zstack = new ZStackClient();
const llm = new LLMEngine();

// Markdown renderer
const md = typeof marked !== 'undefined' ? marked : null;
if (md) md.setOptions({ breaks: true, gfm: true });

function renderMarkdown(text) {
  if (!text) return '';
  if (md) {
    const raw = md.parse(text);
    return typeof DOMPurify !== 'undefined'
      ? DOMPurify.sanitize(raw, { ADD_TAGS: ['table','thead','tbody','tr','th','td'] })
      : raw;
  }
  return escapeHtml(text);
}

function addCodeCopyButtons(container) {
  container.querySelectorAll('pre').forEach(pre => {
    if (pre.parentElement?.classList.contains('code-block-wrapper')) return;
    const wrapper = document.createElement('div');
    wrapper.className = 'code-block-wrapper';
    pre.parentNode.insertBefore(wrapper, pre);
    wrapper.appendChild(pre);
    const btn = document.createElement('button');
    btn.className = 'code-copy-btn';
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>';
    btn.addEventListener('click', () => {
      navigator.clipboard.writeText(pre.textContent).then(() => {
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
        setTimeout(() => btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>', 1500);
      });
    });
    wrapper.insertBefore(btn, pre);
  });
}

// DOM elements
const chatArea = document.getElementById('chat-area');
const input = document.getElementById('input');
const btnSend = document.getElementById('btn-send');
const btnSettings = document.getElementById('btn-settings');
const btnClear = document.getElementById('btn-clear');
const btnConnect = document.getElementById('btn-connect');
const btnSaveLLM = document.getElementById('btn-save-llm');
const settingsPanel = document.getElementById('settings-panel');
const statusBar = document.getElementById('status-bar');
const statusText = document.getElementById('status-text');
const statusModel = document.getElementById('status-model');
const btnScrollBottom = document.getElementById('btn-scroll-bottom');
const btnStop = document.getElementById('btn-stop');

let isProcessing = false;
let queryMode = 'compact';
let chatHistory = [];
let lastFailedMsg = null;
let responseStartTime = 0;
let environments = [];  // 环境列表
let currentEnvId = null;  // 当前选中环境 ID
let currentUsage = null;  // 当前对话的 token 消耗统计

// 应用主题
function applyTheme(theme) {
  if (theme === 'system') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', theme);
  }
}

// --- Init ---
async function init() {
  try {
    await loadSettings();
    setupEventListeners();
    setupEnvEventListeners();
    await loadChatHistory();
    chrome.runtime.sendMessage({ type: 'GET_DETECTED_ENDPOINT' }, (res) => {
      if (res?.endpoint && !document.getElementById('zstack-endpoint').value) {
        document.getElementById('zstack-endpoint').value = res.endpoint;
      }
    });
  } catch (e) {
    console.error('Init error:', e);
  }
}

async function loadSettings() {
  const data = await chrome.storage.local.get([
    'zstackEndpoint', 'zstackAccount', 'zstackPassword',
    'llmProvider', 'llmBaseUrl', 'llmApiKey', 'llmModel',
    'initialized', 'queryMode',
    'environments', 'currentEnvId',
    'themeColor'
  ]);

  // 加载主题
  const theme = data.themeColor || 'system';
  applyTheme(theme);

  // 渲染环境选择器
  renderEnvSelector();

  // 如果有选中的环境，从环境加载配置；否则从全局配置加载
  const env = currentEnvId !== null ? environments[currentEnvId] : null;
  const zstackEndpoint = env?.endpoint || data.zstackEndpoint || '';
  const zstackAccount = env?.account || data.zstackAccount || 'admin';
  const zstackPassword = env?.password || data.zstackPassword || '';

  if (!data.initialized) {
    await chrome.storage.local.set({
      initialized: true,
      llmProvider: 'openai',
      llmBaseUrl: '',
      llmApiKey: '',
      llmModel: '',
      queryMode: 'compact',
      themeColor: 'system'
    });
    data.llmProvider = 'openai';
    data.llmBaseUrl = '';
    data.llmApiKey = '';
    data.llmModel = '';
    data.themeColor = 'system';
    // First time: show settings panel to guide user
    settingsPanel.classList.remove('hidden');
    // Switch to LLM tab
    setTimeout(() => {
      document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.settings-content').forEach(c => c.classList.add('hidden'));
      const llmTab = document.querySelector('.settings-tab[data-tab="llm"]');
      if (llmTab) llmTab.classList.add('active');
      const llmContent = document.getElementById('tab-llm');
      if (llmContent) llmContent.classList.remove('hidden');
    }, 100);
  }

  // 填充表单（优先从环境加载，否则用全局配置）
  if (zstackEndpoint) document.getElementById('zstack-endpoint').value = zstackEndpoint;
  if (zstackAccount) document.getElementById('zstack-account').value = zstackAccount;
  if (zstackPassword) document.getElementById('zstack-password').value = zstackPassword;
  
  // 填充环境名称（如果有选中环境）
  if (env?.name) document.getElementById('env-name').value = env.name;
  if (env?.platform) document.getElementById('platform-type').value = env.platform;
  if (data.llmProvider) document.getElementById('llm-provider').value = data.llmProvider;
  if (data.llmBaseUrl) document.getElementById('llm-baseurl').value = data.llmBaseUrl;
  if (data.llmApiKey) document.getElementById('llm-apikey').value = data.llmApiKey;
  if (data.llmModel) document.getElementById('llm-model').value = data.llmModel;

  queryMode = data.queryMode || 'compact';
  updateModeButton();
  updateModelPlaceholder();

  if (zstackEndpoint && zstackPassword) {
    try { await connectZStack(); } catch (e) { console.error('Auto-connect failed:', e); }
  }
  if (data.llmApiKey) configureLLM();

  // Show setup guide if not configured
  checkSetupGuide();
}

function checkSetupGuide() {
  const apiKey = document.getElementById('llm-apikey').value.trim();
  const endpoint = document.getElementById('zstack-endpoint').value.trim();
  const guideEl = document.getElementById('setup-guide');
  if (guideEl) {
    if (!apiKey || !endpoint) {
      guideEl.classList.remove('hidden');
    } else {
      guideEl.classList.add('hidden');
    }
  }
}

function setupEventListeners() {
  btnSettings.addEventListener('click', () => settingsPanel.classList.toggle('hidden'));
  btnClear.addEventListener('click', clearChat);
  btnConnect.addEventListener('click', connectZStack);
  btnSaveLLM.addEventListener('click', saveLLMSettings);

  document.getElementById('btn-save-theme').addEventListener('click', async () => {
    const theme = document.getElementById('theme-color').value;
    await chrome.storage.local.set({ themeColor: theme });
    applyTheme(theme);
    showMessage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 主题已保存`);
    settingsPanel.classList.add('hidden');
  });

  document.getElementById('btn-export').addEventListener('click', exportConversation);

  // Stop button
  if (btnStop) {
    btnStop.addEventListener('click', () => {
      llm.abort();
      setStopButtonVisible(false);
    });
  }

  // Settings tabs
  document.querySelectorAll('.settings-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
      document.querySelectorAll('.settings-content').forEach(c => c.classList.add('hidden'));
      tab.classList.add('active');
      document.getElementById(`tab-${tab.dataset.tab}`).classList.remove('hidden');
    });
  });

  // Mode toggle
  const btnMode = document.getElementById('btn-mode');
  const modeTooltip = document.getElementById('mode-tooltip');
  btnMode.addEventListener('click', async () => {
    queryMode = queryMode === 'compact' ? 'full' : 'compact';
    await chrome.storage.local.set({ queryMode });
    updateModeButton();
    configureLLM();
  });
  btnMode.addEventListener('mouseenter', () => modeTooltip.classList.remove('hidden'));
  btnMode.addEventListener('mouseleave', () => modeTooltip.classList.add('hidden'));

  document.getElementById('llm-provider').addEventListener('change', updateModelPlaceholder);

  document.getElementById('llm-model-select').addEventListener('change', () => {
    const sel = document.getElementById('llm-model-select');
    const inp = document.getElementById('llm-model');
    if (sel.value === '__custom__') {
      inp.style.display = '';
      inp.value = '';
      inp.focus();
    } else {
      inp.style.display = 'none';
      inp.value = sel.value;
    }
  });

  input.addEventListener('input', () => {
    input.style.height = 'auto';
    input.style.height = Math.min(input.scrollHeight, 120) + 'px';
    btnSend.disabled = !input.value.trim() || isProcessing;
  });

  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (!btnSend.disabled) sendMessage();
    }
  });

  btnSend.addEventListener('click', sendMessage);

  // Scroll to bottom button
  chatArea.addEventListener('scroll', () => {
    const atBottom = chatArea.scrollHeight - chatArea.scrollTop - chatArea.clientHeight < 80;
    btnScrollBottom.classList.toggle('hidden', atBottom);
  });
  btnScrollBottom.addEventListener('click', scrollToBottom);

  bindQuickButtons();
}

function clearChat() {
  llm.clearHistory();
  chatHistory = [];
  currentUsage = null;
  sessionUsage = { prompt: 0, completion: 0, total: 0, estimated: false };
  chrome.storage.local.remove('chatHistory');
  chatArea.innerHTML = buildWelcomeHTML();
  bindQuickButtons();
  checkSetupGuide();
}

function buildWelcomeHTML() {
  const apiKey = document.getElementById('llm-apikey')?.value?.trim();
  const endpoint = document.getElementById('zstack-endpoint')?.value?.trim();
  const needsSetup = !apiKey || !endpoint;

  let guideHTML = '';
  if (needsSetup) {
    guideHTML = `
      <div id="setup-guide" class="setup-guide">
        <div class="setup-guide-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg></div>
        <div class="setup-guide-text">
          <p>首次使用，请先完成配置：</p>
          <ol>
            ${!endpoint ? '<li>配置 ZStack API 连接地址</li>' : ''}
            ${!apiKey ? '<li>配置 AI 模型 API Key</li>' : ''}
          </ol>
          <p>点击右上角 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg> 打开设置</p>
        </div>
      </div>`;
  } else {
    guideHTML = '<div id="setup-guide" class="setup-guide hidden"></div>';
  }

  return `
    <div class="welcome-msg">
      <div class="welcome-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg></div>
      <h2>ZStack AI 运维助手</h2>
      <p class="welcome-sub">用自然语言管理你的云平台</p>
      ${guideHTML}
      <div class="welcome-features">
        <div class="feature-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg> 查询资源状态</div>
        <div class="feature-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg> 创建和管理云主机</div>
        <div class="feature-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg> ZQL 智能查询</div>
        <div class="feature-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg> 全量数据导出</div>
      </div>
      <div class="quick-actions">
        <button class="quick-btn" data-msg="查看所有云主机"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg> 查看云主机</button>
        <button class="quick-btn" data-msg="查看物理主机状态"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M20 18c1.1 0 1.99-.9 1.99-2L22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2H0v2h24v-2h-4zM4 6h16v10H4V6z"/></svg> 物理主机</button>
        <button class="quick-btn" data-msg="查看可用镜像"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg> 可用镜像</button>
        <button class="quick-btn" data-msg="查看网络列表"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z"/></svg> 网络列表</button>
        <button class="quick-btn" data-msg="查看存储状态"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></svg> 存储状态</button>
        <button class="quick-btn" data-msg="查看负载均衡"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg> 负载均衡</button>
      </div>
    </div>`;
}

function updateModeButton() {
  const btn = document.getElementById('btn-mode');
  if (queryMode === 'full') {
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M4 6H2v14c0 1.1.9 2 2 2h14v-2H4V6zm16-4H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-8 12.5v-9l6 4.5-6 4.5z"/></svg> 全量';
    btn.classList.add('full-mode');
  } else {
    btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg> 精简';
    btn.classList.remove('full-mode');
  }
}

function bindQuickButtons() {
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.msg;
      sendMessage();
    });
  });
}

// Provider presets
const PROVIDER_MODELS = {
  openai: ['gpt-4o', 'gpt-4o-mini', 'gpt-4-turbo', 'o1', 'o3-mini'],
  anthropic: ['claude-opus-4-6', 'claude-sonnet-4', 'claude-haiku-3.5'],
  glm: ['GLM-5', 'glm-4-plus', 'glm-4', 'glm-4-flash', 'glm-4-long'],
  deepseek: ['deepseek-chat', 'deepseek-reasoner'],
  qwen: ['qwen-max', 'qwen-plus', 'qwen-turbo'],
  minimax: ['MiniMax-M2.5', 'MiniMax-M2.5-highspeed', 'MiniMax-M2.1', 'MiniMax-M2.1-highspeed', 'MiniMax-M1', 'MiniMax-Text-01']
};

const PROVIDER_DEFAULTS = {
  openai: 'gpt-4o-mini',
  anthropic: 'claude-sonnet-4',
  glm: 'glm-4-flash',
  deepseek: 'deepseek-chat',
  qwen: 'qwen-plus',
  minimax: 'MiniMax-M2.5'
};

function updateModelPlaceholder() {
  const provider = document.getElementById('llm-provider').value;
  const modelSelect = document.getElementById('llm-model-select');
  const modelInput = document.getElementById('llm-model');
  const models = PROVIDER_MODELS[provider] || [];

  modelSelect.innerHTML = '';
  models.forEach(m => {
    const opt = document.createElement('option');
    opt.value = m;
    opt.textContent = m;
    modelSelect.appendChild(opt);
  });
  const customOpt = document.createElement('option');
  customOpt.value = '__custom__';
  customOpt.textContent = '自定义...';
  modelSelect.appendChild(customOpt);

  const currentVal = modelInput.value.trim();
  if (currentVal && models.includes(currentVal)) {
    modelSelect.value = currentVal;
    modelInput.style.display = 'none';
  } else if (currentVal) {
    modelSelect.value = '__custom__';
    modelInput.style.display = '';
  } else {
    modelSelect.value = models[0] || '__custom__';
    modelInput.value = '';
    modelInput.style.display = modelSelect.value === '__custom__' ? '' : 'none';
  }

  modelInput.placeholder = PROVIDER_DEFAULTS[provider] || '输入模型名';
}

// --- ZStack Connection ---
async function connectZStack() {
  const platform = document.getElementById('platform-type').value;
  const envName = document.getElementById('env-name').value || `环境 ${environments.length + 1}`;
  const endpoint = document.getElementById('zstack-endpoint').value.trim();
  const account = document.getElementById('zstack-account').value.trim();
  const password = document.getElementById('zstack-password').value;

  if (!endpoint || !account || !password) {
    showError('请填写完整的连接信息');
    return;
  }

  setStatus('connecting', '连接中...');

  // 先尝试连接，连接成功后再保存
  try {
    zstack.configure(endpoint);
    await zstack.login(account, password);
    setStatus('connected', `已连接 ${endpoint}`);
    configureLLM();
    settingsPanel.classList.add('hidden');
    checkSetupGuide();
  } catch (e) {
    setStatus('disconnected', '连接失败');
    showError(`连接失败: ${e.message || e}`);
    return;  // 连接失败，不保存
  }

  // 连接成功后，检测重复环境
  const existingIdx = environments.findIndex(e => e.endpoint === endpoint);
  if (existingIdx >= 0) {
    // 已有该环境，更新配置并提示
    environments[existingIdx] = { platform, name: envName, endpoint, account, password };
    currentEnvId = existingIdx;
    showMessage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> 已更新环境配置: ${envName}`);
  } else {
    // 新增环境
    environments.push({ platform, name: envName, endpoint, account, password });
    currentEnvId = environments.length - 1;
    showMessage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> 已保存环境: ${envName}`);
  }
  
  await chrome.storage.local.set({ 
    environments, 
    currentEnvId,
    zstackEndpoint: endpoint,
    zstackAccount: account,
    zstackPassword: password
  });
  renderEnvSelector();
  document.getElementById('env-select').value = currentEnvId;
}

function configureLLM() {
  const provider = document.getElementById('llm-provider').value;
  const baseUrl = document.getElementById('llm-baseurl').value.trim();
  const apiKey = document.getElementById('llm-apikey').value.trim();
  const modelSelect = document.getElementById('llm-model-select').value;
  const modelInput = document.getElementById('llm-model').value.trim();
  const model = (modelSelect === '__custom__' ? modelInput : modelSelect) || PROVIDER_DEFAULTS[provider];

  llm.configure({ apiKey, baseUrl, provider, model, zstackClient: zstack, queryMode });

  if (statusModel) statusModel.textContent = model ? `· ${model}` : '';
}

async function saveLLMSettings() {
  const provider = document.getElementById('llm-provider').value;
  const baseUrl = document.getElementById('llm-baseurl').value.trim();
  const apiKey = document.getElementById('llm-apikey').value.trim();
  const modelSelect = document.getElementById('llm-model-select').value;
  const modelInput = document.getElementById('llm-model').value.trim();
  const model = modelSelect === '__custom__' ? modelInput : modelSelect;

  await chrome.storage.local.set({ llmProvider: provider, llmBaseUrl: baseUrl, llmApiKey: apiKey, llmModel: model });
  configureLLM();
  settingsPanel.classList.add('hidden');
  checkSetupGuide();
}

function setStopButtonVisible(visible) {
  if (btnStop) {
    btnStop.classList.toggle('hidden', !visible);
  }
}

// --- Chat ---
async function sendMessage() {
  const text = input.value.trim();
  if (!text || isProcessing) return;

  if (!zstack.isLoggedIn()) {
    showError(`请先连接 ZStack（点击 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg> 配置）`);
    return;
  }
  if (!llm.apiKey) {
    showError(`请先配置 AI 模型 API Key（点击 <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M19.14 12.94c.04-.31.06-.63.06-.94 0-.31-.02-.63-.06-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.04.31-.06.63-.06.94s.02.63.06.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg> 配置）`);
    return;
  }

  const welcome = chatArea.querySelector('.welcome-msg');
  if (welcome) welcome.remove();

  const now = new Date().toLocaleTimeString('zh-CN', { hour: '2-digit', minute: '2-digit' });
  appendMessage('user', text, now);
  chatHistory.push({ role: 'user', text, time: now });

  input.value = '';
  input.style.height = 'auto';
  // 禁用输入框和发送按钮，防止重复提交
  input.disabled = true;
  btnSend.disabled = true;
  input.classList.add('input-disabled');
  isProcessing = true;
  responseStartTime = Date.now();
  setStopButtonVisible(true);

  const typingEl = appendTyping();
  let assistantBubble = null;
  let toolIndicator = null;
  let thinkingEl = null;
  let thinkingText = '';
  let accumulatedText = '';

  try {
    const response = await llm.chat(text, (event) => {
      if (event.type === 'thinking_delta') {
        if (typingEl.parentNode) typingEl.remove();
        thinkingText += event.text;
        if (!thinkingEl) {
          thinkingEl = document.createElement('div');
          thinkingEl.className = 'message assistant';
          thinkingEl.innerHTML = `<div class="message-bubble thinking-bubble">
            <details class="thinking-block" open>
              <summary><span class="thinking-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg></span> 思考中...</summary>
              <div class="thinking-content"></div>
            </details>
          </div>`;
          chatArea.appendChild(thinkingEl);
        }
        const contentEl = thinkingEl.querySelector('.thinking-content');
        contentEl.textContent = thinkingText;
        scrollToBottom();
      }
      if (event.type === 'text_delta') {
        if (typingEl.parentNode) typingEl.remove();
        if (toolIndicator?.parentNode) toolIndicator.remove();
        // 收到正文后，折叠思考过程
        if (thinkingEl) {
          const details = thinkingEl.querySelector('details');
          if (details) {
            details.removeAttribute('open');
            details.querySelector('summary').innerHTML = `<span class="thinking-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z"/></svg></span> 思考完成 <span class="thinking-chars">${thinkingText.length}字</span>`;
          }
          thinkingEl = null;
        }
        accumulatedText += event.text;
        if (!assistantBubble) {
          assistantBubble = appendMessage('assistant', '', now);
        }
        const bubble = assistantBubble.querySelector('.message-bubble');
        bubble.innerHTML = renderMarkdown(accumulatedText);
        // Add streaming cursor
        const cursor = document.createElement('span');
        cursor.className = 'streaming-cursor';
        bubble.appendChild(cursor);
        addCodeCopyButtons(assistantBubble);
        scrollToBottom();
      }
      if (event.type === 'text') {
        // Non-streaming fallback: full text at once
        if (typingEl.parentNode) typingEl.remove();
        if (toolIndicator?.parentNode) toolIndicator.remove();
        accumulatedText = event.text;
        if (!assistantBubble) {
          assistantBubble = appendMessage('assistant', '', now);
        }
        const bubble = assistantBubble.querySelector('.message-bubble');
        bubble.innerHTML = renderMarkdown(accumulatedText);
        addCodeCopyButtons(assistantBubble);
        scrollToBottom();
      }
      if (event.type === 'tool_start') {
        if (typingEl.parentNode) typingEl.remove();
        if (toolIndicator?.parentNode) toolIndicator.remove();
        toolIndicator = document.createElement('div');
        toolIndicator.className = 'message assistant';
        const details = event.toolDetails || event.tools.map(t => t.replace(/_/g, ' '));
        const elapsed = ((Date.now() - responseStartTime) / 1000).toFixed(0);
        const detailsHtml = details.map(d => `<div class="tool-detail-item">→ ${escapeHtml(d)}</div>`).join('');
        toolIndicator.innerHTML = `<div class="message-bubble tool-progress"><div class="tool-spinner"></div><div class="tool-details"><div class="tool-round">第${event.round}轮调用 (${elapsed}s)</div>${detailsHtml}</div></div>`;
        chatArea.appendChild(toolIndicator);
        scrollToBottom();
      }
      if (event.type === 'usage') {
        // 保存当前任务的 token 消耗统计
        currentUsage = {
          prompt_tokens: event.prompt_tokens || 0,
          completion_tokens: event.completion_tokens || 0,
          total_tokens: event.total_tokens || 0,
          estimated: event.estimated || false
        };
        // 累加到会话总量
        sessionUsage.prompt += currentUsage.prompt_tokens;
        sessionUsage.completion += currentUsage.completion_tokens;
        sessionUsage.total += currentUsage.total_tokens;
        // 如果任意一次是估算的，标记为估算
        if (event.estimated) sessionUsage.estimated = true;
      }
    });

    if (typingEl.parentNode) typingEl.remove();
    if (toolIndicator?.parentNode) toolIndicator.remove();

    const finalText = accumulatedText || response || '';
    const elapsed = ((Date.now() - responseStartTime) / 1000).toFixed(1);

    if (!assistantBubble && finalText) {
      assistantBubble = appendMessage('assistant', finalText, `${now} · ${elapsed}s`);
    } else if (assistantBubble) {
      const bubble = assistantBubble.querySelector('.message-bubble');
      // Remove streaming cursor and render final
      bubble.innerHTML = renderMarkdown(finalText);
      addCodeCopyButtons(assistantBubble);
      const timeEl = assistantBubble.querySelector('.msg-time');
      if (timeEl) timeEl.textContent = `${now} · ${elapsed}s`;
    }

    chatHistory.push({ role: 'assistant', text: finalText, time: now });
    
    // 显示 token 消耗统计
    const estimatedLabel = currentUsage?.estimated ? ' (估算)' : '';
    const sessionEstimatedLabel = sessionUsage.estimated ? ' (估算)' : '';
    const usageIndicator = document.createElement('div');
    usageIndicator.className = 'message assistant';
    usageIndicator.innerHTML = `<div class="message-bubble token-stats">
      <span class="token-icon">📊</span> Token 消耗: 
      本次 ${currentUsage?.total_tokens || 0}${estimatedLabel} / 
      会话累计 ${sessionUsage.total}${sessionEstimatedLabel}
    </div>`;
    chatArea.appendChild(usageIndicator);
    scrollToBottom();
    
    saveChatHistory();
  } catch (e) {
    if (typingEl.parentNode) typingEl.remove();
    if (toolIndicator?.parentNode) toolIndicator.remove();

    // 更友好的错误提示
    let errorMsg = e.message || '未知错误';
    if (errorMsg.includes('Failed to fetch') || errorMsg.includes('NetworkError') || errorMsg.includes('net::ERR')) {
      errorMsg = '网络连接失败，请检查 ZStack 服务是否可用';
    } else if (errorMsg.includes('timeout') || errorMsg.includes('Timeout')) {
      errorMsg = '请求超时，请稍后重试';
    } else if (errorMsg.includes('session') || errorMsg.includes('401') || errorMsg.includes('login') || errorMsg.includes('OAuth')) {
      showError('会话已过期，正在重新连接...');
      try {
        await connectZStack();
        showError('已重连，请重新发送');
        isProcessing = false;
        setStopButtonVisible(false);
        input.disabled = false;
        input.classList.remove('input-disabled');
        btnSend.disabled = !input.value.trim();
        scrollToBottom();
        return;
      } catch (re) {
        errorMsg = '会话过期，重连失败: ' + re.message;
      }
    }

    lastFailedMsg = text;
    showErrorWithRetry(errorMsg);
  }

  isProcessing = false;
  setStopButtonVisible(false);
  // 恢复输入框状态
  input.disabled = false;
  input.classList.remove('input-disabled');
  btnSend.disabled = !input.value.trim();
  scrollToBottom();
}

// --- UI Helpers ---
function appendMessage(role, text, time) {
  const div = document.createElement('div');
  div.className = `message ${role}`;

  const header = document.createElement('div');
  header.className = 'msg-header';
  const avatar = document.createElement('span');
  avatar.className = 'msg-avatar';
  avatar.innerHTML = role === 'user' ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg>';
  header.appendChild(avatar);
  const label = document.createElement('span');
  label.textContent = role === 'user' ? '你' : 'AI 助手';
  header.appendChild(label);
  div.appendChild(header);

  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  if (role === 'assistant' && text) {
    bubble.innerHTML = renderMarkdown(text);
  } else {
    bubble.textContent = text;
  }
  div.appendChild(bubble);
  if (role === 'assistant') addCodeCopyButtons(div);

  const actions = document.createElement('div');
  actions.className = 'msg-actions';
  if (role === 'assistant') {
    const copyBtn = document.createElement('button');
    copyBtn.className = 'msg-action-btn';
    copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> 复制';
    copyBtn.addEventListener('click', () => {
      const raw = text || bubble.textContent;
      navigator.clipboard.writeText(raw).then(() => {
        copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg> 已复制';
        setTimeout(() => copyBtn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg> 复制', 1500);
      });
    });
    actions.appendChild(copyBtn);
  }
  if (time) {
    const ts = document.createElement('span');
    ts.className = 'msg-time';
    ts.textContent = time;
    actions.appendChild(ts);
  }
  div.appendChild(actions);

  chatArea.appendChild(div);
  scrollToBottom();
  return div;
}

function appendTyping() {
  const div = document.createElement('div');
  div.className = 'message assistant';
  div.innerHTML = `
    <div class="msg-header"><span class="msg-avatar"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 14l5-5 5 5z"/></svg></span><span>AI 助手</span></div>
    <div class="message-bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  chatArea.appendChild(div);
  scrollToBottom();
  return div;
}

function showMessage(msg) {
  const div = document.createElement('div');
  div.className = 'success-msg';
  div.innerHTML = msg;
  chatArea.appendChild(div);
  scrollToBottom();
  setTimeout(() => { if (div.parentNode) div.remove(); }, 5000);
}

function showError(msg) {
  const div = document.createElement('div');
  div.className = 'error-msg';
  div.innerHTML = msg;
  chatArea.appendChild(div);
  scrollToBottom();
  setTimeout(() => { if (div.parentNode) div.remove(); }, 8000);
}

function showErrorWithRetry(msg) {
  const div = document.createElement('div');
  div.className = 'error-msg error-with-retry';
  div.innerHTML = `<span>${escapeHtml(msg)}</span><button class="retry-btn">🔄 重试</button>`;
  div.querySelector('.retry-btn').addEventListener('click', () => {
    div.remove();
    if (lastFailedMsg) {
      input.value = lastFailedMsg;
      lastFailedMsg = null;
      sendMessage();
    }
  });
  chatArea.appendChild(div);
  scrollToBottom();
}

function exportConversation() {
  if (chatHistory.length === 0) {
    showError('没有对话可导出');
    return;
  }
  const lines = chatHistory.map(m => {
    const prefix = m.role === 'user' ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg> 用户' : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor"><path d="M20.5 11H19V7c0-1.1-.9-2-2-2h-4V3.5C13 2.12 11.88 1 10.5 1S8 2.12 8 3.5V5H4c-1.1 0-1.99.9-1.99 2v3.8H3.5c1.49 0 2.7 1.21 2.7 2.7s-1.21 2.7-2.7 2.7H2V20c0 1.1.9 2 2 2h3.8v-1.5c0-1.49 1.21-2.7 2.7-2.7 1.49 0 2.7 1.21 2.7 2.7V22H17c1.1 0 2-.9 2-2v-4h1.5c1.38 0 2.5-1.12 2.5-2.5S21.88 11 20.5 11z"/></svg> 助手';
    const time = m.time ? ` [${m.time}]` : '';
    return `### ${prefix}${time}\n\n${m.text}\n`;
  });
  const content = `# ZStack AI 对话记录\n\n导出时间: ${new Date().toLocaleString('zh-CN')}\n\n---\n\n${lines.join('\n---\n\n')}`;
  const blob = new Blob([content], { type: 'text/markdown' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `zstack-chat-${new Date().toISOString().slice(0,10)}.md`;
  a.click();
  URL.revokeObjectURL(url);
}

function setStatus(state, text) {
  statusBar.className = `status-bar ${state}`;
  statusText.textContent = text;
}

function scrollToBottom() {
  chatArea.scrollTop = chatArea.scrollHeight;
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// --- Chat History Persistence ---
async function saveChatHistory() {
  try {
    const toSave = chatHistory.slice(-50);
    await chrome.storage.local.set({ chatHistory: toSave });
  } catch (e) {
    console.error('Save chat history error:', e);
  }
}

async function loadChatHistory() {
  try {
    const data = await chrome.storage.local.get('chatHistory');
    if (!data.chatHistory || data.chatHistory.length === 0) return;

    chatHistory = data.chatHistory;
    sessionUsage = { prompt: 0, completion: 0, total: 0, estimated: false };
    const welcome = chatArea.querySelector('.welcome-msg');
    if (welcome) welcome.remove();

    for (const msg of chatHistory) {
      appendMessage(msg.role, msg.text, msg.time);
      if (msg.role === 'user') {
        llm.messages.push({ role: 'user', content: msg.text });
      } else if (msg.role === 'assistant') {
        llm.messages.push({ role: 'assistant', content: msg.text });
      }
    }
    scrollToBottom();
  } catch (e) {
    console.error('Load chat history error:', e);
  }
}

// --- Start ---
init();

// ========== Environment Management ==========

function renderEnvSelector() {
  const select = document.getElementById('env-select');
  select.innerHTML = '<option value="">+ 添加环境</option>';
  
  environments.forEach((env, index) => {
    const option = document.createElement('option');
    option.value = index;
    option.textContent = `${env.name} (${env.platform} - ${env.endpoint})`;
    if (index === currentEnvId) option.selected = true;
    select.appendChild(option);
  });
  
  // 显示当前环境名
  const envName = currentEnvId !== null && environments[currentEnvId] 
    ? environments[currentEnvId].name 
    : '未选择环境';
  document.getElementById('status-text').textContent = envName;
}

function setupEnvEventListeners() {
  const envSelect = document.getElementById('env-select');
  
  const btnAddEnv = document.getElementById('btn-add-env');
  
  // 选择环境 - 加载配置并自动连接
  envSelect.addEventListener('change', async (e) => {
    const idx = parseInt(e.target.value);
    if (isNaN(idx)) {
      // 添加新环境 - 清空表单
      document.getElementById('env-name').value = '';
      document.getElementById('zstack-endpoint').value = '';
      document.getElementById('zstack-account').value = 'admin';
      document.getElementById('zstack-password').value = '';
      document.getElementById('platform-type').value = 'zstack';
      currentEnvId = null;
      setStatus('disconnected', '请添加环境');
    } else {
      // 选中已有环境 - 加载配置并自动连接
      currentEnvId = idx;
      const env = environments[idx];
      if (env) {
        document.getElementById('platform-type').value = env.platform || 'zstack';
        document.getElementById('env-name').value = env.name || '';
        document.getElementById('zstack-endpoint').value = env.endpoint || '';
        document.getElementById('zstack-account').value = env.account || 'admin';
        document.getElementById('zstack-password').value = env.password || '';
        
        // 自动连接
        setStatus('connecting', '连接中...');
        try {
          zstack.configure(env.endpoint);
          await zstack.login(env.account, env.password);
          setStatus('connected', `已连接 ${env.endpoint}`);
          
          // 清空对话历史
          llm.clearHistory();
          chatHistory = [];
          chrome.storage.local.set({ chatHistory: [] });
          
          configureLLM();
          showMessage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg> 已切换到环境: ${env.name}`);
        } catch (err) {
          setStatus('disconnected', '连接失败');
          showError(`连接失败: ${err.message}`);
        }
      }
    }
  });
  
  // 连接按钮 - 保存并连接
  
  // 添加环境按钮 - 打开设置页面准备新增
  btnAddEnv?.addEventListener('click', () => {
    currentEnvId = null;  // 标记为新增模式
    document.getElementById('env-select').value = '';
    setStatus('disconnected', '请配置新环境');
    // 打开设置面板
    settingsPanel.classList.remove('hidden');
    document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.settings-content').forEach(c => c.classList.add('hidden'));
    document.querySelector('.settings-tab[data-tab="zstack"]').classList.add('active');
    document.getElementById('tab-zstack').classList.remove('hidden');
  });
  
  // 删除环境按钮
  const btnDeleteEnv = document.getElementById('btn-delete-env');
  btnDeleteEnv?.addEventListener('click', async () => {
    if (currentEnvId === null || currentEnvId === undefined || !environments[currentEnvId]) {
      showError('请先选择要删除的环境');
      return;
    }
    const envName = environments[currentEnvId].name;
    if (!confirm(`确定要删除环境 "${envName}" 吗？`)) {
      return;
    }
    environments.splice(currentEnvId, 1);
    currentEnvId = null;
    await chrome.storage.local.set({ environments, currentEnvId });
    
    // 清除连接状态
    zstack.logout();
    await chrome.storage.local.remove(['zstackEndpoint', 'zstackAccount', 'zstackPassword']);
    
    renderEnvSelector();
    // 清空表单
    document.getElementById('env-name').value = '';
    document.getElementById('zstack-endpoint').value = '';
    document.getElementById('zstack-account').value = 'admin';
    document.getElementById('zstack-password').value = '';
    setStatus('disconnected', '环境已删除');
    showMessage(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/></svg> 环境已删除`);
  });
  
  // AI 模型配置按钮
  const btnLLMConfig = document.getElementById('btn-llm-config');
  btnLLMConfig?.addEventListener('click', () => {
    settingsPanel.classList.remove('hidden');
    document.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.settings-content').forEach(c => c.classList.add('hidden'));
    document.querySelector('.settings-tab[data-tab="llm"]').classList.add('active');
    document.getElementById('tab-llm').classList.remove('hidden');
  });
}
