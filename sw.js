importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0499d50dbadfb8a63742.js",
    "revision": "dbf253ec69d05c0e1cda506e37ff0ddf"
  },
  {
    "url": "/_nuxt/18797268dd8391023b8c.js",
    "revision": "d1867e33e972ae2c9a2b1d55941c8a12"
  },
  {
    "url": "/_nuxt/2d0295d5710c0f7e12f6.js",
    "revision": "735674f1106ccb3649cf644f2493cd48"
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
    "url": "/_nuxt/775f061e5ae417bd99d2.js",
    "revision": "d1e804eeb24d0e872631cdc06364623a"
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
    "url": "/_nuxt/bc202291e77fd819cd81.js",
    "revision": "3affecaa1a0d972bef60cbc43ee70bb0"
  },
  {
    "url": "/_nuxt/bdac30138398a969fdac.js",
    "revision": "ce24e2f82968017e1a37da7a156e1747"
  },
  {
    "url": "/_nuxt/c20e47a196673ff62eb1.js",
    "revision": "498b0fe78d29a868d44203545bbc0c54"
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
    "url": "/_nuxt/eeaf70c353cafbebad7b.js",
    "revision": "f25c82bcc3a8b68d393359716053c760"
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
