// Detect if current page is a ZStack UI
(function() {
  function detectZStack() {
    const url = window.location.href;
    // ZStack UI typically runs on port 5000
    const match = url.match(/^(https?:\/\/[^/]+)/);
    if (!match) return;

    const host = match[1];
    // Check for ZStack UI indicators
    const isZStack =
      document.title.includes('ZStack') ||
      document.querySelector('meta[name="zstack"]') ||
      document.querySelector('[class*="zstack"]') ||
      document.querySelector('#zstack-app') ||
      url.includes(':5000');

    if (isZStack) {
      // Derive API endpoint (UI on 5000, API on 8080)
      const apiEndpoint = host.replace(':5000', ':8080');
      chrome.runtime.sendMessage({
        type: 'ZSTACK_DETECTED',
        endpoint: apiEndpoint,
        uiUrl: host
      });
    }
  }

  // Run detection after page loads
  if (document.readyState === 'complete') {
    detectZStack();
  } else {
    window.addEventListener('load', detectZStack);
  }
})();
