importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/069c8ee24fa9dec5e43a.js",
    "revision": "cb2d374059a4c62022778325e667827f"
  },
  {
    "url": "/_nuxt/0a9baa7318e537f26b7e.js",
    "revision": "2d0b4a7d8210a61823aeb359ccb49dea"
  },
  {
    "url": "/_nuxt/0fdba82b9270843a68bf.js",
    "revision": "ef81cc37573432d5c15327b178ffe244"
  },
  {
    "url": "/_nuxt/11d28ba642da03189911.js",
    "revision": "0d3cbd22d02bf7afcc6a8d5406baf872"
  },
  {
    "url": "/_nuxt/1a9ec6777758ef33b051.js",
    "revision": "a5d00bda8dce61520cb01c27ee1445bc"
  },
  {
    "url": "/_nuxt/1e0ebda9d257a9664870.js",
    "revision": "aff07a820340a6df9ba051d6247a06fc"
  },
  {
    "url": "/_nuxt/2682096004f4051c4aee.js",
    "revision": "feb9da22e1c34a5b023d9d03693851e8"
  },
  {
    "url": "/_nuxt/472e09a77023a5aee06a.js",
    "revision": "330e5173ec14895ecb8fed890bf58a3c"
  },
  {
    "url": "/_nuxt/4cc4290681df0f4ada0f.js",
    "revision": "2f714fdbc24bb21fbd2a1d756df11ebf"
  },
  {
    "url": "/_nuxt/53ad6a5f7c0af91020fc.js",
    "revision": "62d3eed2b710c47429de9c3d0ddbd9bd"
  },
  {
    "url": "/_nuxt/603e03c57af0d61ef88d.js",
    "revision": "1ed3eaeb8ba70d9eb20648b820900ca9"
  },
  {
    "url": "/_nuxt/7aa3d17dff053d576603.js",
    "revision": "7345f60dced7f28c97845b62f6156fbe"
  },
  {
    "url": "/_nuxt/81104bd739d299772b52.js",
    "revision": "cb0bb6aa8a0739ca31ebc24ae8b68615"
  },
  {
    "url": "/_nuxt/b38dba249fa1d7250fb6.js",
    "revision": "a767fa8a86731484c2ab06f74379a999"
  },
  {
    "url": "/_nuxt/bcbaca55b0cd46583fb3.js",
    "revision": "d0f51c89c9eb982591e94e52576b6503"
  },
  {
    "url": "/_nuxt/c602e3a76de06144d0ae.js",
    "revision": "3c7323a7db805339bbfe9e4af7905d8e"
  },
  {
    "url": "/_nuxt/d19cb159d40c8accb6d4.js",
    "revision": "596e2fbf115d38d55d4732d40b01e10a"
  },
  {
    "url": "/_nuxt/d1e30a68434c0503349e.js",
    "revision": "a53c7c6c740477d721c0beaf18002e21"
  },
  {
    "url": "/_nuxt/d7ecb8364a529bbdbca4.js",
    "revision": "f0bd8df4a7ccd6e8d23b09e608eff932"
  },
  {
    "url": "/_nuxt/e9cda649dcc818d0221a.js",
    "revision": "58bb2f4956b35b3ad09290b76b797505"
  },
  {
    "url": "/_nuxt/ea273a4160df75aafa2b.js",
    "revision": "57f09f5131415b61d7dee44b5d75ba99"
  },
  {
    "url": "/_nuxt/ff791f7bdc79bf611fbc.js",
    "revision": "3ac924c454a3f050644df73e7c161f05"
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
