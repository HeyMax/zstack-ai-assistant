// Open side panel when clicking the extension icon
chrome.action.onClicked.addListener((tab) => {
  chrome.sidePanel.open({ tabId: tab.id });
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
