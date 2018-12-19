importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0038a16494470ac72742.js",
    "revision": "164c30c2ecd30e32e7a0222bd4e0214a"
  },
  {
    "url": "/_nuxt/03aa9e3ccf811bfb778d.js",
    "revision": "a837e7bc8f39ec86ba01ea6746242a31"
  },
  {
    "url": "/_nuxt/2733f8f9607057bd7bdc.js",
    "revision": "3cdd8ef772646c356b930fd8f12b24a6"
  },
  {
    "url": "/_nuxt/28e5d5f076acf265e60d.js",
    "revision": "940d99157c377a32bac09442792cc265"
  },
  {
    "url": "/_nuxt/4bb153971ac3e84b5e01.js",
    "revision": "8a4d873490ea910e9942a05c8ae364aa"
  },
  {
    "url": "/_nuxt/798ee9f600f852821dfe.js",
    "revision": "8d9111c18a5c7472638aeb8cd9bc0459"
  },
  {
    "url": "/_nuxt/95bf6c23d1eb8a98351f.js",
    "revision": "473f44e1e904bc7ddb1c053f459f3aa2"
  },
  {
    "url": "/_nuxt/a1d4ebb31b4b1455695f.js",
    "revision": "003792a059255d5987af677798d3d373"
  },
  {
    "url": "/_nuxt/b194bd200b15d7c76466.js",
    "revision": "f8872e594381edb1d5108fe912bffc01"
  },
  {
    "url": "/_nuxt/bede321f78aad9c148ba.js",
    "revision": "fced9fd7f5dcba12c7fc4003672e79ff"
  },
  {
    "url": "/_nuxt/ddc0cc12279144547a12.js",
    "revision": "81bfdafc06efc2313970307894081625"
  },
  {
    "url": "/_nuxt/e12bedd5d28a325179c6.js",
    "revision": "e4365fd0be29866046b131cd47c80104"
  },
  {
    "url": "/_nuxt/e880841d3c5eef20d270.js",
    "revision": "8da4fcb98b47e18c17263b9f0b13db16"
  },
  {
    "url": "/_nuxt/ec909788077656f6db04.js",
    "revision": "cbc38fbb238c3c8d3827f23bf937ea8d"
  },
  {
    "url": "/_nuxt/f4c9f697cb05edd6d1d9.js",
    "revision": "27480b0a1cb1ca297b96f39e51250482"
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
