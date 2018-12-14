importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07e3201de2096778c29f.js",
    "revision": "2cf0f3457ac6d0867ce0fb460e2570a6"
  },
  {
    "url": "/_nuxt/2616fbfdbcd97585dd8c.js",
    "revision": "3d12c10d045fe8e22d39c286b369f598"
  },
  {
    "url": "/_nuxt/6242fa505450f56c236c.js",
    "revision": "0ecf52b2a17465c8e332adeb14c51563"
  },
  {
    "url": "/_nuxt/6f81f7a9da43601dd622.js",
    "revision": "f8a5c73514f41d75b67f6ee4fb003f90"
  },
  {
    "url": "/_nuxt/799afc8cececc41a4a60.js",
    "revision": "f83d124f59803e295d35c2d8a72dfe22"
  },
  {
    "url": "/_nuxt/813b2fb1f915de769222.js",
    "revision": "b2900614b1c3e4d8c1f79de641d69794"
  },
  {
    "url": "/_nuxt/83862a9d5c7c520c92c9.js",
    "revision": "6158dea3968fedd9753f0bf4ec135af4"
  },
  {
    "url": "/_nuxt/86e26795c8c128846353.js",
    "revision": "d7b452cbce7759324a2efacdbe0ce4da"
  },
  {
    "url": "/_nuxt/8e3ff3dda85a870432fa.js",
    "revision": "849ca93794c48449ed8d6b38de1165ed"
  },
  {
    "url": "/_nuxt/9294bc2c2ec568d33367.js",
    "revision": "1b7f2c210f2a2d2a0c62f52b85b5e9c8"
  },
  {
    "url": "/_nuxt/9cf74537af6b3c2c56ae.js",
    "revision": "db2caee0891a3115008f559e8382984d"
  },
  {
    "url": "/_nuxt/a22291fd4fe15ad57706.js",
    "revision": "589c7af0867c73a6c16ca31cd7efbf1f"
  },
  {
    "url": "/_nuxt/a7b0df5a8fcd07036b68.js",
    "revision": "d351f2ecd80676a405f6df797e735cef"
  },
  {
    "url": "/_nuxt/dfb00992f5ecdfc3a11a.js",
    "revision": "bcf6e36e0ee789d53a5ee501d87ae53e"
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
