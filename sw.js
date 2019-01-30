importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/005f2bfc704ff1c6f1a2.js",
    "revision": "8b81d0384478d2f77a791cc2cb3bde2f"
  },
  {
    "url": "/_nuxt/01e41cbdaa2aff6c9012.js",
    "revision": "dbff1f37ea1b842ef01c131cdee190db"
  },
  {
    "url": "/_nuxt/05bcd187357801aa7e77.js",
    "revision": "aae0afb80db44a7064887643dcebb464"
  },
  {
    "url": "/_nuxt/16e054ac8ff73848244a.js",
    "revision": "6be0ddaa2e9f283a34cd2275da0079d8"
  },
  {
    "url": "/_nuxt/2f509427d162be28a57b.js",
    "revision": "e266134c5432aff84631a62e4d783f43"
  },
  {
    "url": "/_nuxt/304bfbedf20de7490917.js",
    "revision": "5c3d6fd55c2866148f8a62225b4945cb"
  },
  {
    "url": "/_nuxt/39df2d0a0733d0739d1e.js",
    "revision": "2f0a117965816355dfa36a7c7a30ff36"
  },
  {
    "url": "/_nuxt/4cf738723436276de0d0.js",
    "revision": "94088cedbf70ac7e464c64654c328b92"
  },
  {
    "url": "/_nuxt/51078d9cbaef7aa1eec4.js",
    "revision": "52d73fe262d96e53ea45778ccb0dc76d"
  },
  {
    "url": "/_nuxt/6083dd64835f18b46490.js",
    "revision": "39c2878f80d6682eabdf1be813912ed7"
  },
  {
    "url": "/_nuxt/64c610c2df3610d06b6c.js",
    "revision": "849a79ebb0b3699c2bcafd391c7dbfd2"
  },
  {
    "url": "/_nuxt/65533d38eb56c940b2f3.js",
    "revision": "32220138eed33225945c9674c308d9b0"
  },
  {
    "url": "/_nuxt/66ee69cf430a4c258e1c.js",
    "revision": "1ed383b43f90e07027c53cda4979f8be"
  },
  {
    "url": "/_nuxt/68a4dc87bb6ea30dee6f.js",
    "revision": "f4d0b8933fb7b4b1d1ad54ac692bbfb6"
  },
  {
    "url": "/_nuxt/8ec0d0f9006a063a7417.js",
    "revision": "e5008fc938ecb1167711e7beca234226"
  },
  {
    "url": "/_nuxt/a6e702e40388e7f68028.js",
    "revision": "90a1f2e03ed74f7003910f95324969c8"
  },
  {
    "url": "/_nuxt/a89dfb4b65f20a242c4a.js",
    "revision": "5c1212e0336c04c4c091e07afaf716f9"
  },
  {
    "url": "/_nuxt/c96d8cc01d4444436633.js",
    "revision": "bc0ca650fb8d7bc5f045d51eb22ec7fc"
  },
  {
    "url": "/_nuxt/cc412da9aea64a273b86.js",
    "revision": "4a32f6348e179ce5240d8adfe7f70991"
  },
  {
    "url": "/_nuxt/cfc92144c4736c2e5564.js",
    "revision": "38268d54982e869dde5855529eb939a3"
  },
  {
    "url": "/_nuxt/e842857bed73d3754338.js",
    "revision": "acd6725db8aae977f5c24022eec25de4"
  },
  {
    "url": "/_nuxt/f1978945e18cf90009ee.js",
    "revision": "949fdf837b794b7a810e38d297b72bef"
  },
  {
    "url": "/_nuxt/f50a4e3d263074da1065.js",
    "revision": "22e85d743dc36e592b0f867433ab45fc"
  },
  {
    "url": "/_nuxt/fa7d620380e435524009.js",
    "revision": "eca982e93360582145ac9304a1fa9594"
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
