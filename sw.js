importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1432928906fbc909b55f.js",
    "revision": "a284aba5f229fc15a19cfeaaef97810f"
  },
  {
    "url": "/_nuxt/1f6e3af69e92c5960165.js",
    "revision": "adfc2ae78cbbcd070187a93dfb3356ca"
  },
  {
    "url": "/_nuxt/2a0233253ac37eea1245.js",
    "revision": "0a1db7ea3f6764c5295eb2ca62ccbf8a"
  },
  {
    "url": "/_nuxt/30af274e39b1e98a98d0.js",
    "revision": "6f06c26edd4bf29cc5d472a7a78f9d2b"
  },
  {
    "url": "/_nuxt/4a8b343249995338c4cd.js",
    "revision": "d27f1c9e7ab933040367e29c5c0b46bd"
  },
  {
    "url": "/_nuxt/57494e76f20330ccd8c7.js",
    "revision": "e96f5908c4d1da5bd19b5f947f86aa49"
  },
  {
    "url": "/_nuxt/675316e59555be0b8ec9.js",
    "revision": "1c6967c13d70f3bc824c9430e099c6e6"
  },
  {
    "url": "/_nuxt/7e3fb9795c0e9081d519.js",
    "revision": "ce488080dfc1df1f8cd0da8ff3baf98e"
  },
  {
    "url": "/_nuxt/cb801bce9a8532718876.js",
    "revision": "4ffe0909013c24d06b6029849597dcc5"
  },
  {
    "url": "/_nuxt/ce376a7fa0b84fcb0d88.js",
    "revision": "884664561a42df67361e22cc998a0397"
  },
  {
    "url": "/_nuxt/e12bedd5d28a325179c6.js",
    "revision": "e4365fd0be29866046b131cd47c80104"
  },
  {
    "url": "/_nuxt/e87467c7282c94f0bbce.js",
    "revision": "ddc58036d8f354e3cb62a97a2475c026"
  },
  {
    "url": "/_nuxt/f2fc429ff3441a7c64c5.js",
    "revision": "115f94598cbed773a46eec1a1c89b4c7"
  },
  {
    "url": "/_nuxt/fb2ffb6dc6ae7210070c.js",
    "revision": "e7df323340ea7aeccf46261380cdaddc"
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
