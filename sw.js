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
    "url": "/_nuxt/30b1ab21a62a777d8fc3.js",
    "revision": "21e3d092c062e2e50b804de7d16b0e0e"
  },
  {
    "url": "/_nuxt/39df2d0a0733d0739d1e.js",
    "revision": "2f0a117965816355dfa36a7c7a30ff36"
  },
  {
    "url": "/_nuxt/461973442cf1f86549e3.js",
    "revision": "2bdff1f1341e4f84b659f9ffecd6016d"
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
    "url": "/_nuxt/64c610c2df3610d06b6c.js",
    "revision": "849a79ebb0b3699c2bcafd391c7dbfd2"
  },
  {
    "url": "/_nuxt/65533d38eb56c940b2f3.js",
    "revision": "32220138eed33225945c9674c308d9b0"
  },
  {
    "url": "/_nuxt/68a4dc87bb6ea30dee6f.js",
    "revision": "f4d0b8933fb7b4b1d1ad54ac692bbfb6"
  },
  {
    "url": "/_nuxt/8bec70d6fd7632a066b9.js",
    "revision": "64fa8fe786def3c54c3fba6835b105e3"
  },
  {
    "url": "/_nuxt/8ec0d0f9006a063a7417.js",
    "revision": "e5008fc938ecb1167711e7beca234226"
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
    "url": "/_nuxt/cfc92144c4736c2e5564.js",
    "revision": "38268d54982e869dde5855529eb939a3"
  },
  {
    "url": "/_nuxt/dffbee2a3493d7de42b4.js",
    "revision": "6100c83226ba4fe5879d773a55733061"
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
    "url": "/_nuxt/f58bc28b65ca6869de55.js",
    "revision": "ba24073ccba4f6b749aae19b12626363"
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
