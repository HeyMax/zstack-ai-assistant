// Open side panel and inject ZStack detection when clicking the extension icon
chrome.action.onClicked.addListener(async (tab) => {
  chrome.sidePanel.open({ tabId: tab.id });

  // Inject content script on demand (only for the active tab, no blanket injection)
  try {
    await chrome.scripting.executeScript({
      target: { tabId: tab.id },
      files: ['content.js']
    });
  } catch {
    // Injection may fail on restricted pages (chrome://, etc.) — safe to ignore
  }
});

// Listen for ZStack page detection from content script
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'ZSTACK_DETECTED') {
    // Store the detected ZStack endpoint
    chrome.storage.local.set({ detectedEndpoint: msg.endpoint });
    // Enable side panel for this tab
    if (sender.tab) {
      chrome.sidePanel.setOptions({
        tabId: sender.tab.id,
        enabled: true
      });
    }
  }
  if (msg.type === 'GET_DETECTED_ENDPOINT') {
    chrome.storage.local.get('detectedEndpoint', (data) => {
      sendResponse({ endpoint: data.detectedEndpoint || null });
    });
    return true; // async response
  }
});

// Request host permission dynamically when user configures a ZStack/MCP endpoint
chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === 'REQUEST_HOST_PERMISSION') {
    const origin = msg.origin; // e.g. "http://172.24.0.254:8080/*"
    chrome.permissions.request({ origins: [origin] }, (granted) => {
      sendResponse({ granted });
    });
    return true;
  }
});
