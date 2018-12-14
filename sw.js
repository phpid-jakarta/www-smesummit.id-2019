importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/062cd86163bdc558f33d.js",
    "revision": "7fd00e3cd8ac8cf9b4ca57bc1a5d7703"
  },
  {
    "url": "/_nuxt/230d440da916b750df27.js",
    "revision": "5e008df1ba102dec7899bba2f18230de"
  },
  {
    "url": "/_nuxt/2469c77586b832cc3c07.js",
    "revision": "40997f144a55df38aeebb26489fd26c9"
  },
  {
    "url": "/_nuxt/578fa64bc566a9f791db.js",
    "revision": "5781103f5cd70e4e76491f61b58baca7"
  },
  {
    "url": "/_nuxt/61a0eb26d0ba1aee18bd.js",
    "revision": "bc28547b54da449b42c13bd13d200ea8"
  },
  {
    "url": "/_nuxt/678ef14b269edd6f4144.js",
    "revision": "1253329b2e14f01004b8686aa5bc2f8c"
  },
  {
    "url": "/_nuxt/6d6486eaf929b65b2189.js",
    "revision": "8bc40041ff8048f915b86bafe2524b9e"
  },
  {
    "url": "/_nuxt/752a63311b9fe3896c26.js",
    "revision": "4a76075733b3677465b33f0468eee91e"
  },
  {
    "url": "/_nuxt/8f89ffc5b99bc93af009.js",
    "revision": "5c80f50b585f8af5d56002c40ca2b026"
  },
  {
    "url": "/_nuxt/b3e4301fc8a803e7d56d.js",
    "revision": "d86629f6bd2a95218ab1c063955000e1"
  },
  {
    "url": "/_nuxt/c73d9d7a9753762fa279.js",
    "revision": "f16501211fffee9f7f37c5e2625ce058"
  },
  {
    "url": "/_nuxt/d05625593f459a170ee0.js",
    "revision": "e6a8a2589381005eefd6d0045dfa4633"
  },
  {
    "url": "/_nuxt/db407ebb70a9dc9856e5.js",
    "revision": "c4c328b7652385a7e72ff6258c10f499"
  },
  {
    "url": "/_nuxt/f08c6354bc38f3dcf6cd.js",
    "revision": "7c2ba9a8d16264f83db9a99d4dc7d077"
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
