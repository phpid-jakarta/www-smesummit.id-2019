importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/005f2bfc704ff1c6f1a2.js",
    "revision": "8b81d0384478d2f77a791cc2cb3bde2f"
  },
  {
    "url": "/_nuxt/0975c0f2f77fbaf50624.js",
    "revision": "25aa31274610b994741ef64c6728c9b2"
  },
  {
    "url": "/_nuxt/1d3a828ce350dba99152.js",
    "revision": "5b99ac8603e779933f86db6116fe41e4"
  },
  {
    "url": "/_nuxt/39d405e4d670fb4f6ebb.js",
    "revision": "476c12c883a843ff6b6d21b711775ccc"
  },
  {
    "url": "/_nuxt/3e6169ce0d9ade39c4e7.js",
    "revision": "3383aff4a904ea5d7eb6ebe40e4e90c9"
  },
  {
    "url": "/_nuxt/478e1c0960489a6a91fe.js",
    "revision": "d77db6b060115aecc0c0d51cb698d6c3"
  },
  {
    "url": "/_nuxt/4be7199152d973a8cacc.js",
    "revision": "c383856acc8ce135c2b827f2d9fc136c"
  },
  {
    "url": "/_nuxt/612dfa864f7d40c85e81.js",
    "revision": "8f90972e502725fa386c458b60adda10"
  },
  {
    "url": "/_nuxt/61ec8828231cee127045.js",
    "revision": "0aa25acb9dbe4bd3e22ac815e4421acb"
  },
  {
    "url": "/_nuxt/71851cae5ec90f5b2767.js",
    "revision": "f85b93193b0ab3124a2a2c165b716e35"
  },
  {
    "url": "/_nuxt/7202c5a2cbe9330369fe.js",
    "revision": "b5cc6b6498a6b985ec05d15c185eafee"
  },
  {
    "url": "/_nuxt/80e8b6c8fe589e5738a6.js",
    "revision": "9f2751e9c6baf559ea1f1025b099e4a3"
  },
  {
    "url": "/_nuxt/91d8805b42c0fddd9df1.js",
    "revision": "b6e12671e10081972affae75e882887f"
  },
  {
    "url": "/_nuxt/acb1616d0afa03264315.js",
    "revision": "45e641494d6434cef31f2b81b3b3a1ef"
  },
  {
    "url": "/_nuxt/accc856e96d396edd09f.js",
    "revision": "c696dc343341e9bca4f3366b23af6bed"
  },
  {
    "url": "/_nuxt/b64003105998b82d2557.js",
    "revision": "2888c21ce8bf648d4bf32972da6221c5"
  },
  {
    "url": "/_nuxt/bf88f7eeec94de0f581b.js",
    "revision": "4094d95e89a4a2699309ce00f66e5bb6"
  },
  {
    "url": "/_nuxt/bfcada8acdb360ab3228.js",
    "revision": "bcccae4bf255a48cdcb3f40830b6a4b1"
  },
  {
    "url": "/_nuxt/c997f21410590bcccbab.js",
    "revision": "d1da94db80cd136b0bce3cf5e0f46b3a"
  },
  {
    "url": "/_nuxt/cc0e9fb02c211e305e1e.js",
    "revision": "00a615f111bf430ab8d0d6df541be09e"
  },
  {
    "url": "/_nuxt/d98f8ec99bc11f0661ec.js",
    "revision": "1b53241d7407e44db7e038b28e9f2248"
  },
  {
    "url": "/_nuxt/d99f4938bc88c5843816.js",
    "revision": "24544a4ab3b8957e96bbbc918dccde4b"
  },
  {
    "url": "/_nuxt/f1400f5a2a50c771b371.js",
    "revision": "e652fb5ef9cc94698ccf92a337ba8379"
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
