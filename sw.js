importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/1115d962e1e6855e6f86.js",
    "revision": "d5b21e884f313ac2c8252176686081ff"
  },
  {
    "url": "/_nuxt/1a3ec03df69ed0005d36.js",
    "revision": "a6123aa7aafb7a7bddb5e6f02586864d"
  },
  {
    "url": "/_nuxt/1badace5a1552c1bc841.js",
    "revision": "1a289988ac3ab08565e6f4e1daf0acae"
  },
  {
    "url": "/_nuxt/3444c7091e4cdb5e4f28.js",
    "revision": "754398c681a6558aaf040e8d05fb3fbc"
  },
  {
    "url": "/_nuxt/34faf151eca308930172.js",
    "revision": "fc5fff30c63062c6d68beb56bb14f17f"
  },
  {
    "url": "/_nuxt/36517acd0827f394eddb.js",
    "revision": "91cce145363516ad7f4e99d43ae1b751"
  },
  {
    "url": "/_nuxt/47f8e822b30dd936d7e0.js",
    "revision": "8c57e243000b13a449b13146c335ffe0"
  },
  {
    "url": "/_nuxt/4d38bd0f3bf8fd88b7bc.js",
    "revision": "0a8991da4d0b476e9db511e36e751c5a"
  },
  {
    "url": "/_nuxt/5781bcf96e1cb5b68d1f.js",
    "revision": "e38b7eea9fc75132358d7b27048603aa"
  },
  {
    "url": "/_nuxt/643b1a708632cbcd5c0c.js",
    "revision": "80b65484a07f99210cadbe6f789ae4cf"
  },
  {
    "url": "/_nuxt/6839477bafffbafaa59e.js",
    "revision": "34ee545e3686bf4d5a7e96a7b6a8aa60"
  },
  {
    "url": "/_nuxt/790489a590d4c302b28a.js",
    "revision": "8af00f993d73a8e4ecd0a11674e535af"
  },
  {
    "url": "/_nuxt/7a6963578539aa6a2b6a.js",
    "revision": "c0227544717a482f61f20badb9603bed"
  },
  {
    "url": "/_nuxt/84360cbe993b802d2883.js",
    "revision": "46e3a5a2339b2572fe03be415c90123e"
  },
  {
    "url": "/_nuxt/8a7a9260a0c8e7264c38.js",
    "revision": "03736b1c1de8df3bf1ddda54cb3486c2"
  },
  {
    "url": "/_nuxt/8db4395ebdb55db7643c.js",
    "revision": "4328644e25ce12dddab560a93b3843b8"
  },
  {
    "url": "/_nuxt/91023560347fcf19ca48.js",
    "revision": "b69c9a62dba56bb74af6c71f862adba2"
  },
  {
    "url": "/_nuxt/92e2711c7126dfb96f07.js",
    "revision": "fd6f666598d4de31d38e6de03aaf1874"
  },
  {
    "url": "/_nuxt/9435261e467ef5b1315a.js",
    "revision": "c0f90da60e51c22037728a3d0b18a9cb"
  },
  {
    "url": "/_nuxt/a290425519611716e55b.js",
    "revision": "df23d7cc2dd4e61c3eff6b7b7a0a1044"
  },
  {
    "url": "/_nuxt/ab506fd2b3a51a17edfa.js",
    "revision": "603ba05c2601c15199e5c2510cfffeb2"
  },
  {
    "url": "/_nuxt/ad93bb6f0ca97e2e8088.js",
    "revision": "1a5113e9861a624a9551e87c2cef151f"
  },
  {
    "url": "/_nuxt/b91946288494157588be.js",
    "revision": "4bb4a70e9f5158f249f90162ffb9e544"
  },
  {
    "url": "/_nuxt/ba72e62a19f9b46d31c9.js",
    "revision": "df80d26005455e4a7054ab01c649fd9e"
  },
  {
    "url": "/_nuxt/c2ae85a6ee898f321508.js",
    "revision": "6bddb696b27793ed6afc4dead7517aca"
  },
  {
    "url": "/_nuxt/c8b575e1333aa9a02436.js",
    "revision": "95162672be0243586455a982673b296a"
  },
  {
    "url": "/_nuxt/ca6c7bdaffc4436059e3.js",
    "revision": "500890851125f9f0392800831e4c14b0"
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
