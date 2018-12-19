importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1112440e05aaa04890eb.js",
    "revision": "3b341f2ddaae6fec809e8477501341f8"
  },
  {
    "url": "/_nuxt/1696b569684e51976ef6.js",
    "revision": "d7761abde06b9d79d4efbfbeec42d251"
  },
  {
    "url": "/_nuxt/2791fded2bddb1689847.js",
    "revision": "3f9e8a34407b6d60118ae0c1a98c24df"
  },
  {
    "url": "/_nuxt/418a84c192d312876cf3.js",
    "revision": "8c965617427030459e57e008c673c6ad"
  },
  {
    "url": "/_nuxt/576a50ebb55c7beadcf7.js",
    "revision": "5992f75a9d07970d18a08bde5e3b33f8"
  },
  {
    "url": "/_nuxt/5e00750a0aaa41f94106.js",
    "revision": "59349f0c87c3e34e29cbf62b8839e45a"
  },
  {
    "url": "/_nuxt/69a22c635980ba2a464f.js",
    "revision": "a1d935353cc4ee1991391d03c1f2ae8a"
  },
  {
    "url": "/_nuxt/8f2c61953ce7072515a8.js",
    "revision": "458786ae040ec41814b94c01dbd1ee2c"
  },
  {
    "url": "/_nuxt/9029e44bc4fa3d4aa6f6.js",
    "revision": "9cbe29c5a5420c3b8230dc635222583f"
  },
  {
    "url": "/_nuxt/b12d2986337a738c1117.js",
    "revision": "73df488196a5d9ad25a438febe11f642"
  },
  {
    "url": "/_nuxt/b221fce13850ac989cec.js",
    "revision": "f0d180d93cce09354eef0e1711eb0553"
  },
  {
    "url": "/_nuxt/bd783c66959d1d00301a.js",
    "revision": "0b2ba58e9f7064ee0eb85ddd18110998"
  },
  {
    "url": "/_nuxt/c89fde536a534a7a7e6b.js",
    "revision": "1b9d842c1fbe5db98436fb07cf66d0e1"
  },
  {
    "url": "/_nuxt/d93cabdaf2aed6b4e2e9.js",
    "revision": "2010e3d036a0875b3f0540ca68186aa3"
  },
  {
    "url": "/_nuxt/e12bedd5d28a325179c6.js",
    "revision": "e4365fd0be29866046b131cd47c80104"
  },
  {
    "url": "/_nuxt/e28591d2150679f9b6ef.js",
    "revision": "292b123ad772939be09e3edd1e7b61c0"
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
