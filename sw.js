importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/19da6f6af8a81a81ced4.js",
    "revision": "622b1ee30e2c31a4477cb3c42721a2dc"
  },
  {
    "url": "/_nuxt/20d73eef90ffb617cdee.js",
    "revision": "a40d526531a1eacb99e9bfdaa1a98181"
  },
  {
    "url": "/_nuxt/22adc1dcdcfff2e903f5.js",
    "revision": "b12f1b6da4131dbf96b3d0047872571e"
  },
  {
    "url": "/_nuxt/4e4c4acbf38134d164bd.js",
    "revision": "8c389a0ab3d1f8b4b42b0595623f676e"
  },
  {
    "url": "/_nuxt/687d3644a4b8cbbdd984.js",
    "revision": "7466119b4e86a8deed530ef6a0fc9a90"
  },
  {
    "url": "/_nuxt/6c5442ae2d6cba7384e5.js",
    "revision": "8c6d22c859d7131856f1251251773a53"
  },
  {
    "url": "/_nuxt/7e3fb9795c0e9081d519.js",
    "revision": "ce488080dfc1df1f8cd0da8ff3baf98e"
  },
  {
    "url": "/_nuxt/7f219cf979a41f72afb1.js",
    "revision": "a4506f2d54b1650f9d5d3c4c9819b0f9"
  },
  {
    "url": "/_nuxt/8b8e2abda6fd0878e7fc.js",
    "revision": "7343d15549465db90745838cf7927a79"
  },
  {
    "url": "/_nuxt/a44809ba404e16b62716.js",
    "revision": "58720be326f4e6b3cfc14156c8f8cd99"
  },
  {
    "url": "/_nuxt/cb70c6526771c43cb371.js",
    "revision": "71d5072426d8e0032856310e21e1e105"
  },
  {
    "url": "/_nuxt/cd89d074d6012cbb4fb1.js",
    "revision": "da4008bd9863308a8019d87adc11b923"
  },
  {
    "url": "/_nuxt/f0f32c015b139abe93bc.js",
    "revision": "70e4d0e53c089bbf362f8f817d726ecb"
  },
  {
    "url": "/_nuxt/f11595f152554f46d5c8.js",
    "revision": "ec3b7765b4971f4195715f083457c2b7"
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
