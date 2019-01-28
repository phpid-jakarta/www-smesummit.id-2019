importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/005f2bfc704ff1c6f1a2.js",
    "revision": "8b81d0384478d2f77a791cc2cb3bde2f"
  },
  {
    "url": "/_nuxt/02440002607fa72bfd4c.js",
    "revision": "b6e0992826fafa6b5d423911164c7d02"
  },
  {
    "url": "/_nuxt/07c8ae52ae57a855c695.js",
    "revision": "ba63aca2c7831925268c850835ab429b"
  },
  {
    "url": "/_nuxt/1492834a9819bf9a3dbb.js",
    "revision": "9df5bdafea4822aa7eda2926adf2e447"
  },
  {
    "url": "/_nuxt/22112c421694817b57f2.js",
    "revision": "9fd210d4a57b194c91c993fff34aa80d"
  },
  {
    "url": "/_nuxt/4755e9a1e8e8530d281a.js",
    "revision": "24653b3dac28ad2efe3e09511c76e4a2"
  },
  {
    "url": "/_nuxt/71786a78633f35021a76.js",
    "revision": "f27fd2448acc99bee83280ed9bdc33fa"
  },
  {
    "url": "/_nuxt/71f84eee5600f78ffb1c.js",
    "revision": "d3b06e4d36778460c3e9567b60398435"
  },
  {
    "url": "/_nuxt/73e2b12aac13a2b54ff8.js",
    "revision": "bab8ad2e458c45003887856a7b98ff19"
  },
  {
    "url": "/_nuxt/75c74e816cf0bf29a8e4.js",
    "revision": "53cac0e2d9f6cfde0fbc7d02e85bd644"
  },
  {
    "url": "/_nuxt/77f960975da7cacdfe9f.js",
    "revision": "d5d461124bda075e1d27a20d169b34be"
  },
  {
    "url": "/_nuxt/78d51675efebf01fe172.js",
    "revision": "98432a88f8f13fdcb5ca43a3bcb74b7d"
  },
  {
    "url": "/_nuxt/7f752d1464414ab4c2fd.js",
    "revision": "59040246e09b4342aea3c8cf108701fc"
  },
  {
    "url": "/_nuxt/80e1c6917b2a1cdd6cd2.js",
    "revision": "3ef1c0f79de25f9f7fb98feafaa847cf"
  },
  {
    "url": "/_nuxt/83628d1a88ad71730333.js",
    "revision": "6668cf3e7d9e815472503adbfe6c20c5"
  },
  {
    "url": "/_nuxt/85a763743c4d2de003a1.js",
    "revision": "17a4efd594c4c4d5d6d7ee737d7eba7b"
  },
  {
    "url": "/_nuxt/8ceb4dfe4015d81507d8.js",
    "revision": "4c2a53bd5e5fb910fcdcd48633b4ee8f"
  },
  {
    "url": "/_nuxt/9148e5f2256bcc36de7f.js",
    "revision": "e843c23c82faed0e2a6a960c563cd2b6"
  },
  {
    "url": "/_nuxt/921a5c9e7fd70dbe8ef5.js",
    "revision": "bcab754a83a00a7757499dc58d27e268"
  },
  {
    "url": "/_nuxt/a92c4c3750dd7e8d5d9b.js",
    "revision": "f341d80e432d690068c8213a6a7dd643"
  },
  {
    "url": "/_nuxt/b5653a560350878b17ca.js",
    "revision": "1b6b7519075a8192deff665e3ee9cbe7"
  },
  {
    "url": "/_nuxt/d4b19685d323be278c1e.js",
    "revision": "976b0cd8bb0096bacef37fd44ae78ced"
  },
  {
    "url": "/_nuxt/d5e69d914fc35c0e1c42.js",
    "revision": "07c0c804cbc41e17b9d685661caa0ad2"
  },
  {
    "url": "/_nuxt/de554af5da50194adf63.js",
    "revision": "7bb4311102d584995f2de5f885610d3a"
  },
  {
    "url": "/_nuxt/f033798cbffba50769c2.js",
    "revision": "bf895fc79a425f42bdbadb8e989dff24"
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
