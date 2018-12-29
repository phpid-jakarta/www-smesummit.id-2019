importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0499d50dbadfb8a63742.js",
    "revision": "dbf253ec69d05c0e1cda506e37ff0ddf"
  },
  {
    "url": "/_nuxt/082a21d55d7eaebab08a.js",
    "revision": "46a99780adaf4b1629cc691b6deb20ec"
  },
  {
    "url": "/_nuxt/18797268dd8391023b8c.js",
    "revision": "d1867e33e972ae2c9a2b1d55941c8a12"
  },
  {
    "url": "/_nuxt/26aa4a2f49b98b7924e2.js",
    "revision": "6f09f3bfda60ae7b4242ff770659afdd"
  },
  {
    "url": "/_nuxt/3a474a31a1c925296fc8.js",
    "revision": "858e979db715f0c63392245088995b22"
  },
  {
    "url": "/_nuxt/4cd3f991ae500ed31010.js",
    "revision": "5259f92d66a674ad0ef7ba6f72f3ad64"
  },
  {
    "url": "/_nuxt/5de6426fbef50c042dc4.js",
    "revision": "78b280ae44c517cf175b2059884b83c2"
  },
  {
    "url": "/_nuxt/6879c05aebffc9aeac3d.js",
    "revision": "63432ffc5d694b58d2502559f2308e3f"
  },
  {
    "url": "/_nuxt/7866b9213e9b6c2ca99b.js",
    "revision": "6a4679580b64193e67133620206de699"
  },
  {
    "url": "/_nuxt/850c7cabc4f4e49c0f09.js",
    "revision": "303264aeec92b5abd7a81d51876b9b23"
  },
  {
    "url": "/_nuxt/8f8cefed0113e3be6181.js",
    "revision": "389e1c959864f7df244ca18b2a3f676a"
  },
  {
    "url": "/_nuxt/9f99b8f2cf492609048f.js",
    "revision": "58904b23180390babed1aead2128fc3c"
  },
  {
    "url": "/_nuxt/bdac30138398a969fdac.js",
    "revision": "ce24e2f82968017e1a37da7a156e1747"
  },
  {
    "url": "/_nuxt/d235e6d80ef650a827f6.js",
    "revision": "33aea162f5b2178b002d280600e972d6"
  },
  {
    "url": "/_nuxt/e0ba2697cef84dcd7846.js",
    "revision": "a4a3f42fe2c2e74aee2d53674ed7039a"
  },
  {
    "url": "/_nuxt/f8833403aea93c80c7b2.js",
    "revision": "344832a973ee8031803b5c988605590c"
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
