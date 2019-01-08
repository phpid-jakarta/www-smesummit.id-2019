importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1b61e0f55a832ed1d10b.js",
    "revision": "27f48476a6dbd4a0ed61c89d84719e7e"
  },
  {
    "url": "/_nuxt/341e8cc597b36b19f296.js",
    "revision": "cbfd1856f8de8f99344b2701d4f9d89e"
  },
  {
    "url": "/_nuxt/4aee7baa26f00083430f.js",
    "revision": "df6fcd67b1b322557c3beabad2421c12"
  },
  {
    "url": "/_nuxt/5446bf38998bf7bfdfc6.js",
    "revision": "a65359759b1b6315ea672bf5ddf0cec9"
  },
  {
    "url": "/_nuxt/579a2ccd919569a4070a.js",
    "revision": "bffcdb4c9ab2d1509068f328fddf7b36"
  },
  {
    "url": "/_nuxt/5a57993ce5e4fcc4ab20.js",
    "revision": "c60be307dd36919d8d5db470e1629b66"
  },
  {
    "url": "/_nuxt/5dca9ca21c600c6df6f3.js",
    "revision": "d0b52b85fe2383e782c24a029cdabffb"
  },
  {
    "url": "/_nuxt/90914fde25d068eee04b.js",
    "revision": "cb8d780291eda7cadfab8e527e85ea49"
  },
  {
    "url": "/_nuxt/9a9258960d6b3e6d2610.js",
    "revision": "c0591ff38bf5640fc40377ba9a3cf849"
  },
  {
    "url": "/_nuxt/a2b944b750fec9c1e56a.js",
    "revision": "05ccc081a53dc40bc7f429dfad28b07d"
  },
  {
    "url": "/_nuxt/aa6aac94b2605213b4ef.js",
    "revision": "87c65851283e5036c57bdf7624bd4aef"
  },
  {
    "url": "/_nuxt/c126cc68ef203367db8c.js",
    "revision": "658889fe38b183e491de3fd2413aaca4"
  },
  {
    "url": "/_nuxt/c814226f52dae5f705fc.js",
    "revision": "139e28c0d39adc526ed2068485f97e12"
  },
  {
    "url": "/_nuxt/c89906b26f18e400d21c.js",
    "revision": "6e27991921c0be46a7fdb7d0ad71d2e5"
  },
  {
    "url": "/_nuxt/ca261beb4d5ad1f1c74b.js",
    "revision": "f0f214d80c24d3f46fd58fed75feeba5"
  },
  {
    "url": "/_nuxt/cec8a53476e3ddce9b4d.js",
    "revision": "63eb44240ce2af2265d0a16bcf083b40"
  },
  {
    "url": "/_nuxt/d0776e336c8089334ea0.js",
    "revision": "214e97d117a5626bf6108350a643f4af"
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
