importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/08d6b84b13a9c5a1db18.js",
    "revision": "476922151f7eb0503e99f62588b437cb"
  },
  {
    "url": "/_nuxt/38c239abf10b89a53015.js",
    "revision": "f617e548c1f9453236120dde1154058b"
  },
  {
    "url": "/_nuxt/4c156028495440689d04.js",
    "revision": "3b1195f18f927cb98806cf924694ad9b"
  },
  {
    "url": "/_nuxt/53012a2fce24a2f65cb0.js",
    "revision": "793d4a2fb0ce6ce34d4137ab1dec7246"
  },
  {
    "url": "/_nuxt/575eaa895efe6edf5a54.js",
    "revision": "cee525879ab2bf7d28f370d2067e582c"
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
    "url": "/_nuxt/686e023719021760253f.js",
    "revision": "cbd69bdf3dda5468bfeb615bda563fcb"
  },
  {
    "url": "/_nuxt/705f2d9351c3593fe233.js",
    "revision": "043e1441d308071487e447a4dded3429"
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
    "url": "/_nuxt/a6963c2f5023d72f64d1.js",
    "revision": "9be8735c0e49a31e8f6be5be03732ad3"
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
    "url": "/_nuxt/ce789f03c3651ea172c4.js",
    "revision": "7e84568bbbd33839b339b2e428d01c87"
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
