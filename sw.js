importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/2d47de3df413940d90e2.js",
    "revision": "a7a33a9dbfdf68e76069e4cca28ce19f"
  },
  {
    "url": "/_nuxt/30af274e39b1e98a98d0.js",
    "revision": "6f06c26edd4bf29cc5d472a7a78f9d2b"
  },
  {
    "url": "/_nuxt/451825f38a519f68ff65.js",
    "revision": "16c8ce44ae6bbc11c1283382ff5ffd41"
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
    "url": "/_nuxt/9ec62238a0477172988b.js",
    "revision": "48948a5f83360bd2f96269ec2b4336ef"
  },
  {
    "url": "/_nuxt/a85210bcc816fdb10ba1.js",
    "revision": "907c732c02c8bcd0ea1a194f3e51f957"
  },
  {
    "url": "/_nuxt/a8aeab9736ddb9038597.js",
    "revision": "2c7fde7e58d69ed0bdf720ec499aa52d"
  },
  {
    "url": "/_nuxt/b076803f26cf85d0adc9.js",
    "revision": "8032177cc7903c890a331149865cf4cb"
  },
  {
    "url": "/_nuxt/c68640694ffbe7a123c6.js",
    "revision": "d866cf2a7f866db7f2a2b8836a05f501"
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
    "url": "/_nuxt/f2fc429ff3441a7c64c5.js",
    "revision": "115f94598cbed773a46eec1a1c89b4c7"
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
