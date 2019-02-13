importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0442848d7011e28f7fb5.js",
    "revision": "05655dcdfcec12d1ef6c0dea4b8d4ef4"
  },
  {
    "url": "/_nuxt/45fe533e2624675856ad.js",
    "revision": "7cfb029858384f217a91f2c34220865e"
  },
  {
    "url": "/_nuxt/4ae9f66389887dede91a.js",
    "revision": "a69cecc278f21a32af91bad98539e388"
  },
  {
    "url": "/_nuxt/54d96165c9f9330d5cac.js",
    "revision": "1492e725a6ca8d4b2201d3824de7f772"
  },
  {
    "url": "/_nuxt/85f47f1ca16f755e674d.js",
    "revision": "114d14c375c0a96dfda814522a33867e"
  },
  {
    "url": "/_nuxt/8a44658e8fe8da06314e.js",
    "revision": "ff8bbd204ad17a0f2a04292083f1fc6c"
  },
  {
    "url": "/_nuxt/8d397f64ef24b2449485.js",
    "revision": "c9bc1cd338ed38284e4994f0cf70c05a"
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
    "url": "/_nuxt/b014dff0e67bee4a718e.js",
    "revision": "21e287f05295a97cb190d6680a0ca7c1"
  },
  {
    "url": "/_nuxt/b8165abe3731d9bded7a.js",
    "revision": "f8f287e17bd087b474ccde2158af370b"
  },
  {
    "url": "/_nuxt/c28b7552bd8cf073e906.js",
    "revision": "a571a6700cd26e8418efa79cffba2dd8"
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
    "url": "/_nuxt/cd9dc7d9c9437a3e08d0.js",
    "revision": "142eedb2be8ea433cbfd105fffad925a"
  },
  {
    "url": "/_nuxt/d67dac5d4945f037c895.js",
    "revision": "6ae543b765e482b6d583af7b8591baea"
  },
  {
    "url": "/_nuxt/db7a86034edd9b519074.js",
    "revision": "b3730b86b446e17d7e40bc566cb13abf"
  },
  {
    "url": "/_nuxt/dbd64c2b5c318aefdc01.js",
    "revision": "838a09ec6c144ded6a9daf7bd764c1ab"
  },
  {
    "url": "/_nuxt/dd1339a090238f1c537f.js",
    "revision": "89b137e9686d7d624f7bd2416b276607"
  },
  {
    "url": "/_nuxt/e1bfefd9d24957b7af0e.js",
    "revision": "6b8e79518e631b75fe1bd440a65c4f1e"
  },
  {
    "url": "/_nuxt/e8245c8edbec5b143e81.js",
    "revision": "5021e3ab11d01d73d67cd03f796cc192"
  },
  {
    "url": "/_nuxt/f6dfe8b4e4bad8a5b174.js",
    "revision": "6b4f14f78ad871a8d64d28d3f4630702"
  },
  {
    "url": "/_nuxt/f911b5013f49f8496533.js",
    "revision": "edcb335874607b78c3e75f7f0b423523"
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
