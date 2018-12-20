importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/31fc435f8ad3df786e6e.js",
    "revision": "377d1553be8c4efc0374b9059c9e13f8"
  },
  {
    "url": "/_nuxt/4c156028495440689d04.js",
    "revision": "3b1195f18f927cb98806cf924694ad9b"
  },
  {
    "url": "/_nuxt/5fedf5c2a0b978a5d9aa.js",
    "revision": "bd37ec344cf4131438c1cafc315eccef"
  },
  {
    "url": "/_nuxt/63cce8cbe459f8ddfbf7.js",
    "revision": "24b3b020272e54822f30b792fe36894e"
  },
  {
    "url": "/_nuxt/6651b555a0885c52c4fd.js",
    "revision": "c19243a1a8e38127ca795c02fd7ea498"
  },
  {
    "url": "/_nuxt/686e023719021760253f.js",
    "revision": "cbd69bdf3dda5468bfeb615bda563fcb"
  },
  {
    "url": "/_nuxt/7d2e3c4dafac21a070e0.js",
    "revision": "69595c0f5648a702d6b5835df5b59805"
  },
  {
    "url": "/_nuxt/855e757d2258675223b7.js",
    "revision": "066687e8ff57d251348136b2fca76bc0"
  },
  {
    "url": "/_nuxt/a7bac6050ce5c6c662c6.js",
    "revision": "b12aa05f20b0ff732244bd80d06aa8f0"
  },
  {
    "url": "/_nuxt/aabb6358f928b3934dce.js",
    "revision": "ee98eea73f9f8ab32046a5a69f47ea87"
  },
  {
    "url": "/_nuxt/b142347101febed97676.js",
    "revision": "211bed4c35ec79c5d83307b20b85df2e"
  },
  {
    "url": "/_nuxt/b4c38596e6229ff67381.js",
    "revision": "d74be70f63ec6fc107b8de95c9d7914c"
  },
  {
    "url": "/_nuxt/c03af1e0bda4c991ee21.js",
    "revision": "d5680b32ce2874d13685a5645bf207e7"
  },
  {
    "url": "/_nuxt/dd542d876784a566bda0.js",
    "revision": "82b2d4a9330259167fdd847cc5ad5d13"
  },
  {
    "url": "/_nuxt/ee9cd3ce825c71f5c37d.js",
    "revision": "8d45cabf34d1ce2317f5fb26b4dfd73d"
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
