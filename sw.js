importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/12cdadee37c6a5bb39cb.js",
    "revision": "7ab4253f032b7eecee6df4cf1a85b6a0"
  },
  {
    "url": "/_nuxt/3dc6371b57a35075ece9.js",
    "revision": "43380d887498c815c1debebe063ff40e"
  },
  {
    "url": "/_nuxt/4b2a87c99f5bc500e557.js",
    "revision": "af5303667479a5d717421badabb94371"
  },
  {
    "url": "/_nuxt/4d38bd0f3bf8fd88b7bc.js",
    "revision": "0a8991da4d0b476e9db511e36e751c5a"
  },
  {
    "url": "/_nuxt/5e7b5a26be7531c0df51.js",
    "revision": "a04fb2769517f8ca22161a3517a09abc"
  },
  {
    "url": "/_nuxt/6e2aba80ea3848077b08.js",
    "revision": "8cb28ad11aeab46bf19c61718e4124bb"
  },
  {
    "url": "/_nuxt/705c29909b68281487cb.js",
    "revision": "e3ba4eb6a04877f63dd207e64b7b4a26"
  },
  {
    "url": "/_nuxt/7549f45586559db35f06.js",
    "revision": "bd03d62368bbb384813e75cd10efd614"
  },
  {
    "url": "/_nuxt/839487ef78be101651ba.js",
    "revision": "c1dc188f55075fcaf7f2b46bd41ce1ff"
  },
  {
    "url": "/_nuxt/85a230480b7b7553b3ef.js",
    "revision": "e477d0f5ddc980bbfe1dca4ccd7f093b"
  },
  {
    "url": "/_nuxt/89bc2139024a08236631.js",
    "revision": "81431ed2658a27da5bf0015adba61f75"
  },
  {
    "url": "/_nuxt/9928117c5b872a06d3b5.js",
    "revision": "335fbfd658334b7986242ffbeea4a9c6"
  },
  {
    "url": "/_nuxt/a7e526f00b966dc3949d.js",
    "revision": "1f38b5e96108bd817e1efdd1c8b7de6f"
  },
  {
    "url": "/_nuxt/b0fe339d26d58c30a471.js",
    "revision": "b97cf4a95e6aae537d3215753cebe947"
  },
  {
    "url": "/_nuxt/b95369ed913d7d1a8364.js",
    "revision": "eb8322b52a418ddd118e4a47354c1dc1"
  },
  {
    "url": "/_nuxt/bc9391979d5322df9f06.js",
    "revision": "38cb4d9b2ade13b4fe53ce97297f4bc0"
  },
  {
    "url": "/_nuxt/c0720e8f2c7ab30b9eab.js",
    "revision": "b39047c56b9ad064706bc1e606148abb"
  },
  {
    "url": "/_nuxt/c2b0f76e0c2778a99fda.js",
    "revision": "9dff2874f4550a415939a12756068b4a"
  },
  {
    "url": "/_nuxt/c6edee93ff2a8198ccaf.js",
    "revision": "11b4deb2a1512024d4df8373d9957380"
  },
  {
    "url": "/_nuxt/c75c9151dc837227f810.js",
    "revision": "f8ad0b39801e8fa70b95b27c5bb2cd65"
  },
  {
    "url": "/_nuxt/c9f775a3c7ab70ad5658.js",
    "revision": "0769a69ae217651ffe9afd9c367e45a3"
  },
  {
    "url": "/_nuxt/ccb90de450cb1e89d687.js",
    "revision": "1cd4f3425161fa03a83da4fb0aed5a02"
  },
  {
    "url": "/_nuxt/e068fb654db338c023ee.js",
    "revision": "bf43c4257d4c5820954cdd77f9d87c6c"
  },
  {
    "url": "/_nuxt/e87d0aff835c226deeb6.js",
    "revision": "8c82842718c046018385a0f90386c037"
  },
  {
    "url": "/_nuxt/fc6b99f058c5986202ed.js",
    "revision": "f6457f664ff2784ecc2dde013b9e7e29"
  },
  {
    "url": "/_nuxt/fd8c0338f85c474f2763.js",
    "revision": "c2dd6f52f3b625f963db23a0a6bad41c"
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
