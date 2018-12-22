importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a2c95ea6ab42fa23fae.js",
    "revision": "cff846e2a7daaa5cf3bacdda8ec9f929"
  },
  {
    "url": "/_nuxt/0d5349f862d5a4523eb7.js",
    "revision": "ec5faec6d21e5700cd291e2412eafd00"
  },
  {
    "url": "/_nuxt/2eb127c630a4294edaa3.js",
    "revision": "e8518cb6069f83e5ddcd24c6847b982e"
  },
  {
    "url": "/_nuxt/3175b2e7e7f68f937c4a.js",
    "revision": "d844403600b9b29dc3024164e3971c27"
  },
  {
    "url": "/_nuxt/6eeca3497919acc93e3f.js",
    "revision": "f1b2ab45694f3b90864a1383a00ff96b"
  },
  {
    "url": "/_nuxt/787fcdcf158feef257cc.js",
    "revision": "bf85fcf14d423968835b34a31bdb7362"
  },
  {
    "url": "/_nuxt/7b38ba11608b243f7a26.js",
    "revision": "1772cb46c24990e50c60953979eb2903"
  },
  {
    "url": "/_nuxt/8283f1b8febbcccd2ea8.js",
    "revision": "441b2e822482a0385694652c763d159a"
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
    "url": "/_nuxt/d229731607cbd6f2770a.js",
    "revision": "1cb71035c40faad5cec393e928149c12"
  },
  {
    "url": "/_nuxt/e3f492ed155b27984521.js",
    "revision": "8e485f9b78f5b25a427402fc0592439a"
  },
  {
    "url": "/_nuxt/ea86da59e9c323683382.js",
    "revision": "0e70676a51661568d8c31246ef821b42"
  },
  {
    "url": "/_nuxt/ead32667a095e8ca9777.js",
    "revision": "8257e94a1698496911dd4f24c3c7a047"
  },
  {
    "url": "/_nuxt/f5a220a64a7ff7fe2df2.js",
    "revision": "6e01d4d47826437924a95dbdb5dbd6d9"
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
