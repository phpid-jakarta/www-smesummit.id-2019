importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/005f2bfc704ff1c6f1a2.js",
    "revision": "8b81d0384478d2f77a791cc2cb3bde2f"
  },
  {
    "url": "/_nuxt/0166b0e0aad552e6ff81.js",
    "revision": "8622679cb434202b413aea957a61beb9"
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
    "url": "/_nuxt/35eb64297b29e94c2b52.js",
    "revision": "fe2d360904f0df0e8e7fc3cc94c2a83d"
  },
  {
    "url": "/_nuxt/39d405e4d670fb4f6ebb.js",
    "revision": "476c12c883a843ff6b6d21b711775ccc"
  },
  {
    "url": "/_nuxt/478e1c0960489a6a91fe.js",
    "revision": "d77db6b060115aecc0c0d51cb698d6c3"
  },
  {
    "url": "/_nuxt/4ab7a870953d9d652e5f.js",
    "revision": "265a85ae9bd86c38ccaec735a44826e0"
  },
  {
    "url": "/_nuxt/4be7199152d973a8cacc.js",
    "revision": "c383856acc8ce135c2b827f2d9fc136c"
  },
  {
    "url": "/_nuxt/605aa6ef054511221a52.js",
    "revision": "e597077fc05eed935a8a321f97b9c5cc"
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
    "url": "/_nuxt/6687008b92ad037441c2.js",
    "revision": "d6367833afd0c7ddde7a20e22244d0aa"
  },
  {
    "url": "/_nuxt/71851cae5ec90f5b2767.js",
    "revision": "f85b93193b0ab3124a2a2c165b716e35"
  },
  {
    "url": "/_nuxt/770cc0332452f605c519.js",
    "revision": "490f3be2307551d9b955e9a2e3961836"
  },
  {
    "url": "/_nuxt/94e39c28f469174f03c2.js",
    "revision": "b08c0312c9e81e328a824c57cbc1bbf8"
  },
  {
    "url": "/_nuxt/accc856e96d396edd09f.js",
    "revision": "c696dc343341e9bca4f3366b23af6bed"
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
    "url": "/_nuxt/e639c7fb59c9f050f714.js",
    "revision": "92bac60c71b33ef53fec966d49670ffa"
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
