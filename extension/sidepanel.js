import { ZStackClient } from './lib/zstack.js';
import { LLMEngine } from './lib/llm.js';

const zstack = new ZStackClient();
const llm = new LLMEngine();

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

let isProcessing = false;

// --- Init ---
async function init() {
  await loadSettings();
  setupEventListeners();
  // Try auto-detect ZStack endpoint
  chrome.runtime.sendMessage({ type: 'GET_DETECTED_ENDPOINT' }, (res) => {
    if (res?.endpoint && !document.getElementById('zstack-endpoint').value) {
      document.getElementById('zstack-endpoint').value = res.endpoint;
    }
  });
}

async function loadSettings() {
  const data = await chrome.storage.local.get([
    'zstackEndpoint', 'zstackAccount', 'zstackPassword',
    'llmProvider', 'llmBaseUrl', 'llmApiKey', 'llmModel',
    'initialized'
  ]);

  // First run: pre-fill with defaults from OpenClaw config
  if (!data.initialized) {
    await chrome.storage.local.set({
      initialized: true,
      llmProvider: 'anthropic',
      llmBaseUrl: 'https://cdr.digiman.live/claude-kiro-oauth',
      llmApiKey: '123456',
      llmModel: 'claude-opus-4-6'
    });
    data.llmProvider = 'anthropic';
    data.llmBaseUrl = 'https://cdr.digiman.live/claude-kiro-oauth';
    data.llmApiKey = '123456';
    data.llmModel = 'claude-opus-4-6';
  }

  if (data.zstackEndpoint) document.getElementById('zstack-endpoint').value = data.zstackEndpoint;
  if (data.zstackAccount) document.getElementById('zstack-account').value = data.zstackAccount;
  if (data.zstackPassword) document.getElementById('zstack-password').value = data.zstackPassword;
  if (data.llmProvider) document.getElementById('llm-provider').value = data.llmProvider;
  if (data.llmBaseUrl) document.getElementById('llm-baseurl').value = data.llmBaseUrl;
  if (data.llmApiKey) document.getElementById('llm-apikey').value = data.llmApiKey;
  if (data.llmModel) document.getElementById('llm-model').value = data.llmModel;

  // Update LLM model placeholder based on provider
  updateModelPlaceholder();

  // Auto-connect if we have credentials
  if (data.zstackEndpoint && data.zstackPassword) {
    await connectZStack();
  }
  if (data.llmApiKey) {
    configureLLM();
  }
}

function setupEventListeners() {
  btnSettings.addEventListener('click', () => {
    settingsPanel.classList.toggle('hidden');
  });

  btnClear.addEventListener('click', () => {
    llm.clearHistory();
    chatArea.innerHTML = `
      <div class="welcome-msg">
        <div class="welcome-icon">⚡</div>
        <p>ZStack AI 运维助手</p>
        <p class="welcome-sub">配置连接后，用自然语言管理你的云平台</p>
        <div class="quick-actions">
          <button class="quick-btn" data-msg="查看所有云主机">📋 查看云主机</button>
          <button class="quick-btn" data-msg="帮我创建一台云主机">➕ 创建云主机</button>
          <button class="quick-btn" data-msg="查看物理主机状态">🖥️ 物理主机</button>
          <button class="quick-btn" data-msg="查看可用镜像">💿 可用镜像</button>
        </div>
      </div>`;
    bindQuickButtons();
  });

  btnConnect.addEventListener('click', connectZStack);
  btnSaveLLM.addEventListener('click', saveLLMSettings);

  document.getElementById('llm-provider').addEventListener('change', updateModelPlaceholder);

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
  bindQuickButtons();
}

function bindQuickButtons() {
  document.querySelectorAll('.quick-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      input.value = btn.dataset.msg;
      sendMessage();
    });
  });
}

function updateModelPlaceholder() {
  const provider = document.getElementById('llm-provider').value;
  const modelInput = document.getElementById('llm-model');
  if (provider === 'anthropic') {
    modelInput.placeholder = 'claude-opus-4-6';
    if (!modelInput.value) modelInput.value = '';
  } else {
    modelInput.placeholder = 'gpt-4o-mini';
    if (!modelInput.value) modelInput.value = '';
  }
}

// --- ZStack Connection ---
async function connectZStack() {
  const endpoint = document.getElementById('zstack-endpoint').value.trim();
  const account = document.getElementById('zstack-account').value.trim();
  const password = document.getElementById('zstack-password').value;

  if (!endpoint || !account || !password) {
    showError('请填写完整的 ZStack 连接信息');
    return;
  }

  setStatus('connecting', '连接中...');

  try {
    zstack.configure(endpoint);
    await zstack.login(account, password);

    // Save settings
    await chrome.storage.local.set({
      zstackEndpoint: endpoint,
      zstackAccount: account,
      zstackPassword: password
    });

    // Display version info
    const ver = zstack.version;
    const isEnt = zstack.isEnterprise;
    console.log('Version:', ver, 'Enterprise:', isEnt);
    let verText = '';
    if (ver) {
      verText = ver.full ? `v${ver.full}` : `v${ver.major}.${ver.minor}.${ver.update}`;
    }
    if (isEnt) {
      verText += ' 企业版';
    }
    document.getElementById('version-info').textContent = verText;

    setStatus('connected', '已连接');
    configureLLM();
  } catch (e) {
    setStatus('disconnected', '连接失败');
    showError(`连接失败: ${e.message}`);
  }
}

function configureLLM() {
  const provider = document.getElementById('llm-provider').value;
  const baseUrl = document.getElementById('llm-baseurl').value.trim();
  const apiKey = document.getElementById('llm-apikey').value.trim();
  const model = document.getElementById('llm-model').value.trim();

  const defaults = { openai: 'gpt-4o-mini', anthropic: 'claude-opus-4-6' };

  llm.configure({
    apiKey,
    baseUrl,
    provider,
    model: model || defaults[provider],
    zstackClient: zstack
  });
}

async function saveLLMSettings() {
  const provider = document.getElementById('llm-provider').value;
  const baseUrl = document.getElementById('llm-baseurl').value.trim();
  const apiKey = document.getElementById('llm-apikey').value.trim();
  const model = document.getElementById('llm-model').value.trim();

  await chrome.storage.local.set({
    llmProvider: provider,
    llmBaseUrl: baseUrl,
    llmApiKey: apiKey,
    llmModel: model
  });

  configureLLM();
  settingsPanel.classList.add('hidden');
}

// --- Chat ---
async function sendMessage() {
  const text = input.value.trim();
  if (!text || isProcessing) return;

  // Check prerequisites
  if (!zstack.isLoggedIn()) {
    showError('请先连接 ZStack（点击 ⚙️ 配置）');
    return;
  }
  if (!llm.apiKey) {
    showError('请先配置 AI 模型 API Key（点击 ⚙️ 配置）');
    return;
  }

  // Clear welcome message
  const welcome = chatArea.querySelector('.welcome-msg');
  if (welcome) welcome.remove();

  // Add user message
  appendMessage('user', text);
  input.value = '';
  input.style.height = 'auto';
  btnSend.disabled = true;
  isProcessing = true;

  // Add typing indicator
  const typingEl = appendTyping();
  let assistantBubble = null;
  let toolIndicator = null;

  try {
    const response = await llm.chat(text, (event) => {
      if (event.type === 'text') {
        // Remove typing/tool indicators on first text
        if (typingEl.parentNode) typingEl.remove();
        if (toolIndicator?.parentNode) toolIndicator.remove();

        if (!assistantBubble) {
          assistantBubble = appendMessage('assistant', '');
        }
        assistantBubble.querySelector('.message-bubble').textContent += event.text;
        scrollToBottom();
      }
      if (event.type === 'tool_start') {
        if (typingEl.parentNode) typingEl.remove();
        if (toolIndicator?.parentNode) toolIndicator.remove();
        toolIndicator = document.createElement('div');
        toolIndicator.className = 'message assistant';
        const toolList = event.tools.map(t => t.replace(/_/g, ' ')).join(', ');
        toolIndicator.innerHTML = `<div class="message-bubble tool-progress">⚙️ 执行中 (第${event.round}轮): ${escapeHtml(toolList)}</div>`;
        chatArea.appendChild(toolIndicator);
        scrollToBottom();
      }
      if (event.type === 'tool_done') {
        // Keep indicator until next round or final text
      }
    });

    // If no streaming happened, show the full response
    if (typingEl.parentNode) typingEl.remove();
    if (toolIndicator?.parentNode) toolIndicator.remove();
    if (!assistantBubble && response) {
      appendMessage('assistant', response);
    }
  } catch (e) {
    if (typingEl.parentNode) typingEl.remove();
    if (toolIndicator?.parentNode) toolIndicator.remove();
    showError(e.message);
  }

  isProcessing = false;
  btnSend.disabled = !input.value.trim();
  scrollToBottom();
}

// --- UI Helpers ---
function appendMessage(role, text) {
  const div = document.createElement('div');
  div.className = `message ${role}`;
  div.innerHTML = `<div class="message-bubble">${escapeHtml(text)}</div>`;
  chatArea.appendChild(div);
  scrollToBottom();
  return div;
}

function appendTyping() {
  const div = document.createElement('div');
  div.className = 'message assistant';
  div.innerHTML = `<div class="message-bubble"><div class="typing"><span></span><span></span><span></span></div></div>`;
  chatArea.appendChild(div);
  scrollToBottom();
  return div;
}

function showError(msg) {
  const div = document.createElement('div');
  div.className = 'error-msg';
  div.textContent = msg;
  chatArea.appendChild(div);
  scrollToBottom();
  setTimeout(() => div.remove(), 8000);
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

// --- Start ---
init();
