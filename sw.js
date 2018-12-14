importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/13db73beda4df9a3cdcf.js",
    "revision": "8e955541e0798443d61ae9c50aac3bae"
  },
  {
    "url": "/_nuxt/169416f39fb238e89907.js",
    "revision": "78784c00de77eb1c707cc71a72b71113"
  },
  {
    "url": "/_nuxt/1d7f1860b6d5fd9dcaf6.js",
    "revision": "1f3942a7f773e3ff9640beaae9c1111d"
  },
  {
    "url": "/_nuxt/377cd5aa05d6f187952c.js",
    "revision": "4802fea265c507346f616da18b61e70c"
  },
  {
    "url": "/_nuxt/45ef066797aca20d5877.js",
    "revision": "de920549ed5dac58aa007c8e63d25b6f"
  },
  {
    "url": "/_nuxt/4775493de04771478a06.js",
    "revision": "24cc4fe2ebfb467ccc850921c5c65852"
  },
  {
    "url": "/_nuxt/6887ff5ef52f182a184b.js",
    "revision": "efc874f1dd39a6c43f8b0821437edced"
  },
  {
    "url": "/_nuxt/7b5b1ff280e8cdd1266d.js",
    "revision": "e1742392504ae588cbbbd9571040d5f6"
  },
  {
    "url": "/_nuxt/8030eddc2964e49ff9cc.js",
    "revision": "6f9085ce6df19cf2e46b399297c23a29"
  },
  {
    "url": "/_nuxt/9cf74537af6b3c2c56ae.js",
    "revision": "db2caee0891a3115008f559e8382984d"
  },
  {
    "url": "/_nuxt/a4664748abd5809433f0.js",
    "revision": "a910a52058f36f5c4f96d4c3fb6332df"
  },
  {
    "url": "/_nuxt/abbf1aeca31341a752ff.js",
    "revision": "67e789056588da5a380c92c28902334d"
  },
  {
    "url": "/_nuxt/d8456e22b52c7d8caeed.js",
    "revision": "8227330f7e67c40afcaee5584712bccc"
  }
], {
  "cacheId": "smesummit.id",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
