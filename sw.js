importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/11acb88dcf834c97ecc6.js",
    "revision": "1c3986e54d9e89acd755cb045a435de3"
  },
  {
    "url": "/_nuxt/1a3ec03df69ed0005d36.js",
    "revision": "a6123aa7aafb7a7bddb5e6f02586864d"
  },
  {
    "url": "/_nuxt/1c0623883a8193c862d5.js",
    "revision": "b9ec991b95fa936ff9f8964c15a3810f"
  },
  {
    "url": "/_nuxt/28f5acb56b9a218ee9d2.js",
    "revision": "6d1f389ab72a21ca19621522230b4f8b"
  },
  {
    "url": "/_nuxt/3b9e68a8fbd1636f5131.js",
    "revision": "2033c75ad61ebb19e973232b850301ce"
  },
  {
    "url": "/_nuxt/3dc6371b57a35075ece9.js",
    "revision": "43380d887498c815c1debebe063ff40e"
  },
  {
    "url": "/_nuxt/562b127be0f2e18cecda.js",
    "revision": "2fe2caaccaab737dc6f2a5a0b8674f8a"
  },
  {
    "url": "/_nuxt/6005472e80d231c31e71.js",
    "revision": "d0b32de97cc58a2e34b99dff67427558"
  },
  {
    "url": "/_nuxt/6362610988cba0b633bc.js",
    "revision": "3b59fdf687c1e1c80011e907812e1b5e"
  },
  {
    "url": "/_nuxt/6ed1dca270c0ae746d24.js",
    "revision": "967acec06b8d290e8ac47a53723c1bb0"
  },
  {
    "url": "/_nuxt/6f17c5343e1cc4f410ee.js",
    "revision": "e6223a1b75e6ab01f28a3892711eff1a"
  },
  {
    "url": "/_nuxt/7140b976a49d62d426fa.js",
    "revision": "5204e64c51ba1d57a785fca4d97ea5ff"
  },
  {
    "url": "/_nuxt/7549f45586559db35f06.js",
    "revision": "bd03d62368bbb384813e75cd10efd614"
  },
  {
    "url": "/_nuxt/8a39d2b9a3f6313fce1f.js",
    "revision": "4461cc5afdd8ea8cda9c7bc2ee7256c2"
  },
  {
    "url": "/_nuxt/916b2def64aad4f74db4.js",
    "revision": "998f7938f7a6b9c9edddd1d0738cb9de"
  },
  {
    "url": "/_nuxt/95615b7be59600037eea.js",
    "revision": "fe020ac8b580ab46069146d1ce5c7218"
  },
  {
    "url": "/_nuxt/9945e779442ae70630d6.js",
    "revision": "d1c0baaa5747232b19fc94a70469039e"
  },
  {
    "url": "/_nuxt/a4198e5170de52b8abb8.js",
    "revision": "2d84ee066055f1e9f3cbaa43c1086342"
  },
  {
    "url": "/_nuxt/a52e0b340809f66176e3.js",
    "revision": "56ac644053611fb3cdf188ce705a298c"
  },
  {
    "url": "/_nuxt/b30b3c82fa05c07b6e36.js",
    "revision": "5e92bd88a4c334a1267b152383e5e396"
  },
  {
    "url": "/_nuxt/b7d4f2f0862d24b5916d.js",
    "revision": "7c5c0a6caa3136683d88275327eaea0c"
  },
  {
    "url": "/_nuxt/cd716278db6f09818573.js",
    "revision": "b84247751f6cd7ba89b7494867abcd93"
  },
  {
    "url": "/_nuxt/cdcc030e72cc4bf4ecbb.js",
    "revision": "145b5721be3a0872b6ee7c28cd111cc2"
  },
  {
    "url": "/_nuxt/d1e5aa9f706b2fbc52ca.js",
    "revision": "326ea42fb8eb76c6a0f46b4a92a8b044"
  },
  {
    "url": "/_nuxt/e1a61aae38fb1c7ec960.js",
    "revision": "e697417dcc1ca8657643147f737ab7ae"
  },
  {
    "url": "/_nuxt/e36a68a02ce1e84f27be.js",
    "revision": "0e303e41d6d1841fcd39477bbeff3656"
  },
  {
    "url": "/_nuxt/f0a9d8762e47bcd1eb64.js",
    "revision": "701de6fc7cacea0d735eef740253874f"
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
