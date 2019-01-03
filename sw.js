importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/341618c4d5d79773c25e.js",
    "revision": "94c9d0bc02881637a221dccceccdc541"
  },
  {
    "url": "/_nuxt/38812d5e6506a08ffcd9.js",
    "revision": "aa01019f69d6e1697b6041335c7c02ba"
  },
  {
    "url": "/_nuxt/3ee761149015641b33b3.js",
    "revision": "cabbe3aa67335bde4b479ece1afaa394"
  },
  {
    "url": "/_nuxt/5446bf38998bf7bfdfc6.js",
    "revision": "a65359759b1b6315ea672bf5ddf0cec9"
  },
  {
    "url": "/_nuxt/583ef69b93d4ee71dd31.js",
    "revision": "b77b59dc1015ef094d89b1b3ae1e6f20"
  },
  {
    "url": "/_nuxt/5a57993ce5e4fcc4ab20.js",
    "revision": "c60be307dd36919d8d5db470e1629b66"
  },
  {
    "url": "/_nuxt/64291de0d7d737bc85be.js",
    "revision": "f21ad9edb99cdf32fb0a2150f3477b1a"
  },
  {
    "url": "/_nuxt/91c64c74c2e64f2a88fb.js",
    "revision": "f70088f6471b6b34609e53255a518432"
  },
  {
    "url": "/_nuxt/94309dbc46753db90349.js",
    "revision": "c46d1ffab56906ddac5f0ca861b89a02"
  },
  {
    "url": "/_nuxt/99842361dca1d7b0e5c4.js",
    "revision": "a91533769c2f75f78de54d61486aeb7f"
  },
  {
    "url": "/_nuxt/a7de07c7e2fd14b9eb50.js",
    "revision": "13741e967e0f1a3477c8cad8e5ca1a1b"
  },
  {
    "url": "/_nuxt/b78709c1d27f9efd0a08.js",
    "revision": "374935df2ceef951c52b16895188c81c"
  },
  {
    "url": "/_nuxt/bc56f9a5e90b50ce651f.js",
    "revision": "40b02e70b8bd969fbdb7fa5236e71aac"
  },
  {
    "url": "/_nuxt/bdf508248d748a4d2f5e.js",
    "revision": "22a1dd805038f2401e5cc8c1d9b71942"
  },
  {
    "url": "/_nuxt/c2c689b94834ffab020c.js",
    "revision": "05031dba7cdeed22ac0c3ac9b04bac2f"
  },
  {
    "url": "/_nuxt/d0776e336c8089334ea0.js",
    "revision": "214e97d117a5626bf6108350a643f4af"
  },
  {
    "url": "/_nuxt/dff2e20e379a478aa213.js",
    "revision": "b28a9a69ef8819931d4c9fa4e525a5b7"
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
