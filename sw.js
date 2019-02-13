importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
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
    "url": "/_nuxt/283c932df99944871b7e.js",
    "revision": "ebae280cf70ec1d83d7b3e7463c42419"
  },
  {
    "url": "/_nuxt/2de375e527b6020f0813.js",
    "revision": "915036d93fad67535e8d86ffc5087b2a"
  },
  {
    "url": "/_nuxt/405e2788f35644bef539.js",
    "revision": "c578a5eaf765d3c4772cef976891f98f"
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
    "url": "/_nuxt/564ff559d4e605652cd0.js",
    "revision": "50ea61b4f4b43deb99ebfd103d33e8f2"
  },
  {
    "url": "/_nuxt/56ae9b420a51f86d5c1b.js",
    "revision": "ce3732255a2dc04b5d532b1fd20a5653"
  },
  {
    "url": "/_nuxt/5d64a156d77a53a4cb3e.js",
    "revision": "29f4f0b56d57c01e9f7c27420a1a4e38"
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
    "url": "/_nuxt/737b4e4fa6ebf0ac0019.js",
    "revision": "8d5efbb81faf13ec1b45ffccae6892e0"
  },
  {
    "url": "/_nuxt/8ec0d0f9006a063a7417.js",
    "revision": "e5008fc938ecb1167711e7beca234226"
  },
  {
    "url": "/_nuxt/99fe8e7bf52f0c881ec8.js",
    "revision": "02559fcb55a824b51b8e1b8283927edd"
  },
  {
    "url": "/_nuxt/9a30ff5400c9f592033f.js",
    "revision": "2c040b589240a626af38f211ef1f3e61"
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
    "url": "/_nuxt/ed4d05fe62e93ca4d5b5.js",
    "revision": "db53200cd8c9f9a155c20086ccf659a1"
  },
  {
    "url": "/_nuxt/f1978945e18cf90009ee.js",
    "revision": "949fdf837b794b7a810e38d297b72bef"
  },
  {
    "url": "/_nuxt/f7211773119e9d63c9e5.js",
    "revision": "bebc905a835a36c33b233e4bcc478e2a"
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
