importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/03047b836e08132e7db9.js",
    "revision": "f2b945226f6d081c6a76c0af75a761d0"
  },
  {
    "url": "/_nuxt/05ed793ceddd29a71506.js",
    "revision": "c88ad9d3acc23095836e26cd26333f79"
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
    "url": "/_nuxt/6bf65418c32723507652.js",
    "revision": "db075b3624fcb16e2a0f22ad5c4bf145"
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
    "url": "/_nuxt/8138fad83c900293b62d.js",
    "revision": "a14edbab5085b12e6b3a1cd242ffcb8c"
  },
  {
    "url": "/_nuxt/88fe5ff342620ac527b1.js",
    "revision": "fcbaa96a1b04db2a7d50f77e2f2e70e2"
  },
  {
    "url": "/_nuxt/8a1769458bebc2b13517.js",
    "revision": "f4d07a6b894916139940b5ff31fba76d"
  },
  {
    "url": "/_nuxt/93d4c6bf570280e6eb55.js",
    "revision": "e2b1249e44cdc4acaa8c7c6148b9a98f"
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
