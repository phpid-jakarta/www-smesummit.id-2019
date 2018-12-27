importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0c6904f22347bd4b4c43.js",
    "revision": "6df31653da0d2df25191150e76f079f8"
  },
  {
    "url": "/_nuxt/2b39bd9b235d87e40cb5.js",
    "revision": "0fcb5e1f37280f734ad98bd25528d632"
  },
  {
    "url": "/_nuxt/4cd3f991ae500ed31010.js",
    "revision": "5259f92d66a674ad0ef7ba6f72f3ad64"
  },
  {
    "url": "/_nuxt/7077235bf87478d8c1b8.js",
    "revision": "e0945a7f952d0a1aa9a3ffd6abf9dbf0"
  },
  {
    "url": "/_nuxt/75edcce0d6a08660bff5.js",
    "revision": "de51b884df6d56a114d22c68c00f07d9"
  },
  {
    "url": "/_nuxt/8e18514e4ce8be01415a.js",
    "revision": "b0f03bddd4ef35ff39dd5d052620a476"
  },
  {
    "url": "/_nuxt/8f8cefed0113e3be6181.js",
    "revision": "389e1c959864f7df244ca18b2a3f676a"
  },
  {
    "url": "/_nuxt/9a321521a0f2ae20afb8.js",
    "revision": "9c267ac52f5b816bf30336bd86fe9494"
  },
  {
    "url": "/_nuxt/a2a67a4dba3efb434133.js",
    "revision": "799d8bbcca3bd50b4ae0315f088151e1"
  },
  {
    "url": "/_nuxt/bdac30138398a969fdac.js",
    "revision": "ce24e2f82968017e1a37da7a156e1747"
  },
  {
    "url": "/_nuxt/be79ea99fdbb3924421c.js",
    "revision": "a014d0ff6a63a42a4034700c3ee53c9f"
  },
  {
    "url": "/_nuxt/be87ad9f33961d0dee78.js",
    "revision": "64aed6283407f4cf8149c4b1bbddc0b9"
  },
  {
    "url": "/_nuxt/c68f0ef2e7765b59e6db.js",
    "revision": "d92d274ae7200644d1314f8e0f8d5193"
  },
  {
    "url": "/_nuxt/e65632d6db4b0caa2356.js",
    "revision": "2434cbb3e90dfc19a37d1258c910edeb"
  },
  {
    "url": "/_nuxt/ea23767c3f6f1919165a.js",
    "revision": "f5f9150554346fee0e77fc0a3a5d4a27"
  },
  {
    "url": "/_nuxt/fce0a2ded3b0d3a26517.js",
    "revision": "ea4ba2684009a449e2c32a7ce9776c90"
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
