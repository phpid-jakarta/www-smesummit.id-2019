importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0442848d7011e28f7fb5.js",
    "revision": "05655dcdfcec12d1ef6c0dea4b8d4ef4"
  },
  {
    "url": "/_nuxt/08bad5df84de4d43a0d7.js",
    "revision": "64f2f68ac9aa6e86572709363d0564e8"
  },
  {
    "url": "/_nuxt/2c1e484d0a8e855b5456.js",
    "revision": "4803c3dcf4864300ed4ce1c13a8974cc"
  },
  {
    "url": "/_nuxt/2e3ab9e1f3cc98293b0a.js",
    "revision": "5d04a28123ec1e937eab059976382629"
  },
  {
    "url": "/_nuxt/2ffd06812ad266c0d7bd.js",
    "revision": "267414d25519b46a8a694bae743db975"
  },
  {
    "url": "/_nuxt/42fa2e7ac15a5247d170.js",
    "revision": "fd21dd53ac58d4e48d7a9f97f61b891e"
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
    "url": "/_nuxt/71213f245be09298ccb0.js",
    "revision": "2f071f06ff2f0bc98480dbca22979096"
  },
  {
    "url": "/_nuxt/769d679e5d41b31f49cc.js",
    "revision": "a198e01c67ebe8c81df47a6419a67b2f"
  },
  {
    "url": "/_nuxt/7b81f2eeae21e079f1b2.js",
    "revision": "78b0b194aa3f896af948f81155dae1d7"
  },
  {
    "url": "/_nuxt/852b9ef045d3ce3ad50a.js",
    "revision": "6f7f893f881dd0c86c7a803845211be6"
  },
  {
    "url": "/_nuxt/85f47f1ca16f755e674d.js",
    "revision": "114d14c375c0a96dfda814522a33867e"
  },
  {
    "url": "/_nuxt/874da98c293a73a82a81.js",
    "revision": "e6e605f880029ab26acf83e91f8f8d4a"
  },
  {
    "url": "/_nuxt/8a45a2be2e685918cf59.js",
    "revision": "85b3f0b022cda8f4eadf33c95af77f89"
  },
  {
    "url": "/_nuxt/a0b354a1903794b6a89c.js",
    "revision": "dcdbaabc8862d029e9c3f59f137b203a"
  },
  {
    "url": "/_nuxt/b18ba09352d4c14f2b4e.js",
    "revision": "c2a43095a1c2d994f70b0563e2b44d34"
  },
  {
    "url": "/_nuxt/b19342fb1229d9074d4c.js",
    "revision": "a693f72d0cbe1e76b1ef308b6ea97d16"
  },
  {
    "url": "/_nuxt/ba230703d7a4c4431ce5.js",
    "revision": "be26ef24bb3555b4168d83bafb9d080f"
  },
  {
    "url": "/_nuxt/c28b7552bd8cf073e906.js",
    "revision": "a571a6700cd26e8418efa79cffba2dd8"
  },
  {
    "url": "/_nuxt/c49a883960a6f499a714.js",
    "revision": "50cc6ea95e00c1f9753686bf2edc8fec"
  },
  {
    "url": "/_nuxt/c6038776dba264d89049.js",
    "revision": "92c82a6d42a08e5776cf7deb69e92589"
  },
  {
    "url": "/_nuxt/d7c371ec34196790f010.js",
    "revision": "f81b50e4bc71d527347cc1f45ba0fb52"
  },
  {
    "url": "/_nuxt/d86dcd35d75a1913b431.js",
    "revision": "8586cd45f0ed66adac479e919e6b5449"
  },
  {
    "url": "/_nuxt/f0a570700e6e4a5845c8.js",
    "revision": "08624a16f415aefac14fd6c413a5c68d"
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
