/* ===================================================================
   COMPANY CONFIG — AKMR Trade Point
   Put this file next to index.html in the AKMR Trade Point GitHub repo,
   renamed to exactly: config.js
   This is the ONLY file that should differ between the two companies'
   repos — index.html itself should always be byte-for-byte identical
   (copy the latest index.html here whenever you update features).
   =================================================================== */
window.APP_CONFIG = {
  // Shown on the passcode screen, top strip, sidebar, and in every
  // "erased for ___" / error-log message.
  companyName: "AKMR Trade Point",

  // 2-4 letter monogram shown in the round logo badges.
  initials: "ATP",

  // Used to build this browser's localStorage keys, so AKMR Trade Point's
  // saved data can never collide with Darvi Essence's saved data even if
  // someone somehow opens both on the same device/browser.
  storageKeyPrefix: "akmr_trade_point",

  // The shared passcode gate shown before the dashboard opens.
  passcode: "AkmrTrade2026",

  // Firestore collection name for this company's cloud-synced data.
  cloudCollection: "akmrTradePoint",

  // Firebase project — from Firebase Console → Project settings → Your apps → SDK config.
  // Leave apiKey as "YOUR_API_KEY" to run in local-only mode (no cross-device sync).
  firebase: {
    apiKey: "AIzaSyDlQf9wFzTb6MdbwiVGCuB-6du0oIaFa2s",
    authDomain: "akmr-trade-point.firebaseapp.com",
    projectId: "akmr-trade-point",
    storageBucket: "akmr-trade-point.firebasestorage.app",
    messagingSenderId: "532323693693",
    appId: "1:532323693693:web:678f6fc45feed34398ad14"
  }
};
