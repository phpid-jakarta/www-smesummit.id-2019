importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/26d1d4cf171e5042f486.js",
    "revision": "328e8a00eab4eb6cab4d8ca3e15dcca7"
  },
  {
    "url": "/_nuxt/30af274e39b1e98a98d0.js",
    "revision": "6f06c26edd4bf29cc5d472a7a78f9d2b"
  },
  {
    "url": "/_nuxt/3b730edbf9f60e5664f6.js",
    "revision": "30c3080803d9a5b4215d1cba589ac828"
  },
  {
    "url": "/_nuxt/57494e76f20330ccd8c7.js",
    "revision": "e96f5908c4d1da5bd19b5f947f86aa49"
  },
  {
    "url": "/_nuxt/7e3fb9795c0e9081d519.js",
    "revision": "ce488080dfc1df1f8cd0da8ff3baf98e"
  },
  {
    "url": "/_nuxt/8b95950759f485ceb363.js",
    "revision": "49f004aafbed5900c7437a1f577c1d90"
  },
  {
    "url": "/_nuxt/a85210bcc816fdb10ba1.js",
    "revision": "907c732c02c8bcd0ea1a194f3e51f957"
  },
  {
    "url": "/_nuxt/c6d29721ce80fee84b69.js",
    "revision": "4090430708dee73c1833fb69f71b1b11"
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
    "url": "/_nuxt/e31844915c254330f118.js",
    "revision": "4a82a47a86456070e41598c1dd7b3dad"
  },
  {
    "url": "/_nuxt/e3de997ac3828fb4f2df.js",
    "revision": "dc8580b1e8e4adb13b4cb669e9f4cb2d"
  },
  {
    "url": "/_nuxt/f2fc429ff3441a7c64c5.js",
    "revision": "115f94598cbed773a46eec1a1c89b4c7"
  },
  {
    "url": "/_nuxt/f901d8293aee932dc965.js",
    "revision": "443c84723ec0ca52fd19d27bfe0f3363"
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
