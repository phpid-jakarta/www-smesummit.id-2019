importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0188dd1890326a1dc23b.js",
    "revision": "c86ee4d7dbce1c09d6dea2b0ffcf6583"
  },
  {
    "url": "/_nuxt/093496b9ca326f0e30f4.js",
    "revision": "656aa2b24d908edff68ab6adedc6c99c"
  },
  {
    "url": "/_nuxt/09e48a9f592a86588e82.js",
    "revision": "628b093ae45d3e254919f13d16690d46"
  },
  {
    "url": "/_nuxt/163b62e344e7fc7ae21b.js",
    "revision": "d6cd940c5fa006e7350df623355265ad"
  },
  {
    "url": "/_nuxt/2561c8579ad9582d2a73.js",
    "revision": "02620fd4b161660183aa563f356ce03f"
  },
  {
    "url": "/_nuxt/260cb42a7fcf9ed949d2.js",
    "revision": "b04d5087a6092f1acc5cc3c98aaade66"
  },
  {
    "url": "/_nuxt/2dbd8935c6fd58ebb1a6.js",
    "revision": "af3397fecf1f54551a575bb4f5354775"
  },
  {
    "url": "/_nuxt/3370479ce010e247a6de.js",
    "revision": "b0f498a2255310bbd304ad322156aef4"
  },
  {
    "url": "/_nuxt/51ac62a83c06f1b978af.js",
    "revision": "ad8863093178b8c9330b487aacb2e131"
  },
  {
    "url": "/_nuxt/5a57993ce5e4fcc4ab20.js",
    "revision": "c60be307dd36919d8d5db470e1629b66"
  },
  {
    "url": "/_nuxt/5f8eef48f202e47cc583.js",
    "revision": "25b6a5ccfb2393de80b7d0b067f04a9b"
  },
  {
    "url": "/_nuxt/9b939d26924607f4b1be.js",
    "revision": "1d064383892b7412cf3f70a26e322a79"
  },
  {
    "url": "/_nuxt/aae95b1c300e10a36fd5.js",
    "revision": "c9ca6e229e1576aa097734a685e5347e"
  },
  {
    "url": "/_nuxt/c89906b26f18e400d21c.js",
    "revision": "6e27991921c0be46a7fdb7d0ad71d2e5"
  },
  {
    "url": "/_nuxt/ced101406f28b2605289.js",
    "revision": "a77a7a262237edfd8fea0882c7933951"
  },
  {
    "url": "/_nuxt/faf070e347d96f01f213.js",
    "revision": "a670c8ce85644353a37e9cd0a93c8f04"
  },
  {
    "url": "/_nuxt/fc66b7c67f9a7c7fbf65.js",
    "revision": "98e3937d2f82ab636cd4eee7c1c665a8"
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
