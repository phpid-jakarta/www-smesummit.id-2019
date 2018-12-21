importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/3c714a307ef622ea409f.js",
    "revision": "c05c6119b04739e37b7b7a9641ba24ce"
  },
  {
    "url": "/_nuxt/4c08c5b56dc3ed2c861c.js",
    "revision": "fe2e9a507527716b779f265aa1f662ef"
  },
  {
    "url": "/_nuxt/4c156028495440689d04.js",
    "revision": "3b1195f18f927cb98806cf924694ad9b"
  },
  {
    "url": "/_nuxt/575eaa895efe6edf5a54.js",
    "revision": "cee525879ab2bf7d28f370d2067e582c"
  },
  {
    "url": "/_nuxt/63cce8cbe459f8ddfbf7.js",
    "revision": "24b3b020272e54822f30b792fe36894e"
  },
  {
    "url": "/_nuxt/6ec0b228074fa89e6c22.js",
    "revision": "8cb78306e46f64fa213a0d82761ab964"
  },
  {
    "url": "/_nuxt/705f2d9351c3593fe233.js",
    "revision": "043e1441d308071487e447a4dded3429"
  },
  {
    "url": "/_nuxt/7e7c8f729e9b360b2e65.js",
    "revision": "1ba54f168ae94b08fa8baab4b40d2aed"
  },
  {
    "url": "/_nuxt/9ae3940aad879f3e8024.js",
    "revision": "23f99a4caf91fa23a711b49656c783b3"
  },
  {
    "url": "/_nuxt/a6963c2f5023d72f64d1.js",
    "revision": "9be8735c0e49a31e8f6be5be03732ad3"
  },
  {
    "url": "/_nuxt/b3fca936d01387fcd3ed.js",
    "revision": "c81b0dd12ed0129130e084f9194e155c"
  },
  {
    "url": "/_nuxt/bc171811663dac049da3.js",
    "revision": "5ef750e4781dbfcb89fb1c8c63ee9ad7"
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
    "url": "/_nuxt/d7880ca41113ae19a54e.js",
    "revision": "6352b3b5fe272931a63aa7b95f61d12a"
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
