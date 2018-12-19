importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03047b836e08132e7db9.js",
    "revision": "f2b945226f6d081c6a76c0af75a761d0"
  },
  {
    "url": "/_nuxt/05f5eb55988f02df5959.js",
    "revision": "dc4f7c5de8c7cb23eb5a666a5041dd16"
  },
  {
    "url": "/_nuxt/15d4de03fb50ad7e8d91.js",
    "revision": "28eb1d7e705aaa5987c71acf5fe33645"
  },
  {
    "url": "/_nuxt/3e2e78212fa914d2a37f.js",
    "revision": "acce4f946c28b0d23a61c5013f4760de"
  },
  {
    "url": "/_nuxt/686e023719021760253f.js",
    "revision": "cbd69bdf3dda5468bfeb615bda563fcb"
  },
  {
    "url": "/_nuxt/6df2fb127ae3be58e9e7.js",
    "revision": "480c912dc99a7ae81e9a397cd6322fd4"
  },
  {
    "url": "/_nuxt/7999afd4eb4950b07db2.js",
    "revision": "b40f671beec341cfb12a7cd9bf65fefc"
  },
  {
    "url": "/_nuxt/7b076aacfe9081ee20e0.js",
    "revision": "f4d6b22836f10383ed230ad8ed807ac5"
  },
  {
    "url": "/_nuxt/84061cdfc7f6c115add6.js",
    "revision": "061b8700b2b8424f1c6907544ed4c619"
  },
  {
    "url": "/_nuxt/8a1769458bebc2b13517.js",
    "revision": "f4d07a6b894916139940b5ff31fba76d"
  },
  {
    "url": "/_nuxt/9d60f8a13402bb7ce1d0.js",
    "revision": "d72196b8f9c77cb822f33a5565079444"
  },
  {
    "url": "/_nuxt/a4ea19bca004f8d5dd81.js",
    "revision": "3eac667cad8c8e3b6b6a41df38e850a8"
  },
  {
    "url": "/_nuxt/a5944107af1665e5305e.js",
    "revision": "d637f2b0f86a89fe22f0643f89a3b363"
  },
  {
    "url": "/_nuxt/ca7d8fae588aee7a623c.js",
    "revision": "05b8e3abf89cdff5d6f6456a1749b97b"
  },
  {
    "url": "/_nuxt/cbe9aa97eddc6b7dbf26.js",
    "revision": "582fa20b74c4b841f7f9b58db698db3a"
  },
  {
    "url": "/_nuxt/f7944c4f4183e4268689.js",
    "revision": "f60f82a1d2ffda9d70cfbaf423ae0c00"
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
