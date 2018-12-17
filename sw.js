importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/05c0df0868a1134842ca.js",
    "revision": "961254335148562317630c91e132a800"
  },
  {
    "url": "/_nuxt/204e5473d0f1228bd128.js",
    "revision": "39a31f165005f3f1f5cbabbce6955732"
  },
  {
    "url": "/_nuxt/22adc1dcdcfff2e903f5.js",
    "revision": "b12f1b6da4131dbf96b3d0047872571e"
  },
  {
    "url": "/_nuxt/2b9feff7f7d83ded0e8f.js",
    "revision": "00dd6d3a7efc943cd8161f2dd4b157c3"
  },
  {
    "url": "/_nuxt/53901a6b1f5732ed89a7.js",
    "revision": "8c389a0ab3d1f8b4b42b0595623f676e"
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
    "url": "/_nuxt/930794e73519ad84509f.js",
    "revision": "8a650609c643bf05a9c95ef796c158d6"
  },
  {
    "url": "/_nuxt/9c93146746863158965e.js",
    "revision": "1eb3afa80f8904cc58aa82ef395dd0cd"
  },
  {
    "url": "/_nuxt/9e96c05fcb4585969c03.js",
    "revision": "8e4bc185dee764a18500900b40280d4e"
  },
  {
    "url": "/_nuxt/cd3ed13c2833fba92db3.js",
    "revision": "71d5072426d8e0032856310e21e1e105"
  },
  {
    "url": "/_nuxt/d64683224cbf43d74412.js",
    "revision": "d297e7ef39cf4fb130ff9f96654bfe6e"
  },
  {
    "url": "/_nuxt/e12bedd5d28a325179c6.js",
    "revision": "e4365fd0be29866046b131cd47c80104"
  },
  {
    "url": "/_nuxt/f0f32c015b139abe93bc.js",
    "revision": "70e4d0e53c089bbf362f8f817d726ecb"
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
