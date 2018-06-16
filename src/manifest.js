module.exports = {
  name: 'Onde ver o Mundial 2018',
  version: '1.0.0',
  description: 'Extensão com a indicação de onde podem ver o Mundial 2018',
  author: 'chateaufiesta',
  manifest_version: 2,
  icons: {
    '16': 'icons/16.png',
    '128': 'icons/128.png'
  },
  permissions: [
    '<all_urls>',
    '*://*/*',
    'activeTab',
    'tabs',
    'cookies',
    'background',
    'contextMenus',
    'unlimitedStorage',
    'storage',
    'notifications',
    'identity',
    'identity.email'
  ],
  browser_action: {
    default_title: 'title',
    default_popup: 'pages/popup.html'
  },
  background: {
    persistent: false,
    page: 'pages/background.html'
  },
  devtools_page: 'pages/devtools.html',
  options_page: 'pages/options.html',
  content_scripts: [{
    js: ['js/inject.js'],
    run_at: 'document_end',
    matches: ['<all_urls>'],
    all_frames: true
  }],
  content_security_policy: "script-src 'self' https://mundial2018-b8bb3.firebaseio.com https://s-usc1c-nss-223.firebaseio.com 'unsafe-eval'; object-src 'self'",
  web_accessible_resources: ['panel.html', 'js/content.js']
}