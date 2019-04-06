importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/09702eb7486d7a8cc260.js",
    "revision": "58771b06884fa260817295e1bea27658"
  },
  {
    "url": "/_nuxt/0fb3ada8b6b623dc223d.js",
    "revision": "65d43541824ff27807ee8ddc2218db60"
  },
  {
    "url": "/_nuxt/18459526a674d4acf078.js",
    "revision": "de7c45c31c76017e8201a9a446942808"
  },
  {
    "url": "/_nuxt/2035264e8ecf25b0be0e.js",
    "revision": "d643252c3f2c277a6517df3e2102c41d"
  },
  {
    "url": "/_nuxt/20517d2458fe9d3c12cc.js",
    "revision": "60bc7f10733eb166659283f4a185100e"
  },
  {
    "url": "/_nuxt/30c9394d84c5f72513a3.js",
    "revision": "958fcd0a8227a24b7d41281aa2db6ed6"
  },
  {
    "url": "/_nuxt/676bbc9bcfb6acf6fae0.js",
    "revision": "ce28772f805e4e10930e1d2ea8de0c15"
  },
  {
    "url": "/_nuxt/692c5e8f1b14a57ffead.js",
    "revision": "6bdcd87d32eda0aac8cac62bfe8f5613"
  },
  {
    "url": "/_nuxt/719c264374b6921e3fa4.js",
    "revision": "c4f677eb1a86e4a3842e75dd01277bd3"
  },
  {
    "url": "/_nuxt/8d397f64ef24b2449485.js",
    "revision": "c9bc1cd338ed38284e4994f0cf70c05a"
  },
  {
    "url": "/_nuxt/90f1203f0c39030b42c0.js",
    "revision": "7f45051b08e2af5e713790063aac59d8"
  },
  {
    "url": "/_nuxt/9710aa19b32f49f8b596.js",
    "revision": "7c4f9b9b03e468744c913626c30c07c4"
  },
  {
    "url": "/_nuxt/a0b354a1903794b6a89c.js",
    "revision": "dcdbaabc8862d029e9c3f59f137b203a"
  },
  {
    "url": "/_nuxt/a88bd7b9c244b9ddc9a0.js",
    "revision": "d492ac7b6975c9af9d63a70dd2576472"
  },
  {
    "url": "/_nuxt/ace49dc2bc9d735603b3.js",
    "revision": "2cc1f5c9ae5220398ca801cc3642631c"
  },
  {
    "url": "/_nuxt/b014dff0e67bee4a718e.js",
    "revision": "21e287f05295a97cb190d6680a0ca7c1"
  },
  {
    "url": "/_nuxt/c6225cf8325ec6492369.js",
    "revision": "f23a48a88b99aeeaf92ebc7cf62fd3bf"
  },
  {
    "url": "/_nuxt/ca002ee433fc1b326756.js",
    "revision": "a617760abef48830d059e7d1debbf195"
  },
  {
    "url": "/_nuxt/cacc9231707a5ee50b36.js",
    "revision": "98a128e65a2fc4ef0a217d5fb75c6d4d"
  },
  {
    "url": "/_nuxt/cd9dc7d9c9437a3e08d0.js",
    "revision": "142eedb2be8ea433cbfd105fffad925a"
  },
  {
    "url": "/_nuxt/d67dac5d4945f037c895.js",
    "revision": "6ae543b765e482b6d583af7b8591baea"
  },
  {
    "url": "/_nuxt/d86dcd35d75a1913b431.js",
    "revision": "8586cd45f0ed66adac479e919e6b5449"
  },
  {
    "url": "/_nuxt/dd1339a090238f1c537f.js",
    "revision": "89b137e9686d7d624f7bd2416b276607"
  },
  {
    "url": "/_nuxt/f1e160a2dd3ee9555322.js",
    "revision": "ff0224c1efb97372ea1dd3188973afcf"
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
