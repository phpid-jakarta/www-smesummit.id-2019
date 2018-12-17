importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/06ddad7bb6832d5ef218.js",
    "revision": "f6f98365006f334e8eb7bdf4395c3bab"
  },
  {
    "url": "/_nuxt/271b3a0d8a99103438b3.js",
    "revision": "e27af3221b9ba71545b0b35522dc7435"
  },
  {
    "url": "/_nuxt/2e07d26ea634ddbd6f8b.js",
    "revision": "8e306306aea947105b05ca6220d8f637"
  },
  {
    "url": "/_nuxt/396d9e573a446641462a.js",
    "revision": "30da035e8d96afdfc604db210929afff"
  },
  {
    "url": "/_nuxt/552685472dca21d38374.js",
    "revision": "3385174e3e7bb70f4b0fcad09fa0c0eb"
  },
  {
    "url": "/_nuxt/600b5ea6b44bb2c1fee7.js",
    "revision": "5b44c493c9515371cf3eb478e5bdefd3"
  },
  {
    "url": "/_nuxt/67cc77aeba32ec9f46e4.js",
    "revision": "a8279584eb3e5e97eacf2ec7e485ac8e"
  },
  {
    "url": "/_nuxt/6c8f44a426ccb9292219.js",
    "revision": "85a31d4821025bdb8b7c2d5440ba5c4a"
  },
  {
    "url": "/_nuxt/87f97c3b63a9e585db74.js",
    "revision": "992853f24a721b035b6f06ffefe388d5"
  },
  {
    "url": "/_nuxt/8ad0891e35541ba5e8d3.js",
    "revision": "ec8e2ceb3969b3d81f51ca6ebc1ab8c5"
  },
  {
    "url": "/_nuxt/9cfffbda94fc0d8b29fb.js",
    "revision": "f2bc7a587846d64cf8ebe2d5a51e6e4a"
  },
  {
    "url": "/_nuxt/bba0ea00873e2f9431ec.js",
    "revision": "709f43005593f7c017cec2c1c16e2f7a"
  },
  {
    "url": "/_nuxt/c82d8fd380fe993e84d9.js",
    "revision": "3a840cc03283c502f04f4f011d89d301"
  },
  {
    "url": "/_nuxt/d2b7b0d9e1d7efaaa71d.js",
    "revision": "74c9581fd3517204a7adc06b39e43fcb"
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
