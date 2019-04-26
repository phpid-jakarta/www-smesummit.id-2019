importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/104a031a88e449c0955f.js",
    "revision": "b68421303ada386df6821159f16ebdad"
  },
  {
    "url": "/_nuxt/1115d962e1e6855e6f86.js",
    "revision": "d5b21e884f313ac2c8252176686081ff"
  },
  {
    "url": "/_nuxt/128c01de49f57bbcaa1c.js",
    "revision": "a8694e3241c6c33ae431a99e03f85163"
  },
  {
    "url": "/_nuxt/14a7899ad0b6fc47cfdf.js",
    "revision": "4d28e3fe7a146921e4863970fcbd8ed5"
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
    "url": "/_nuxt/456844cbf04a762c50ca.js",
    "revision": "73995812275bdf47c05a3915baaf7cdd"
  },
  {
    "url": "/_nuxt/4d38bd0f3bf8fd88b7bc.js",
    "revision": "0a8991da4d0b476e9db511e36e751c5a"
  },
  {
    "url": "/_nuxt/4f4b53880f0a92d17741.js",
    "revision": "9ca9cf72044f4fe14dda1ada07b89386"
  },
  {
    "url": "/_nuxt/5387b62128abe89197c0.js",
    "revision": "fc589f17222c20fe672b40e3862b46cc"
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
    "url": "/_nuxt/7a6963578539aa6a2b6a.js",
    "revision": "c0227544717a482f61f20badb9603bed"
  },
  {
    "url": "/_nuxt/85ff0c8bc947a8b51f99.js",
    "revision": "b2bbb9f678d65bc8a4666be5f7ae20b6"
  },
  {
    "url": "/_nuxt/9435261e467ef5b1315a.js",
    "revision": "c0f90da60e51c22037728a3d0b18a9cb"
  },
  {
    "url": "/_nuxt/9bafb66bcf9d33f9b1d4.js",
    "revision": "4b1605c42d0077500d4f1330b6c97db2"
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
    "url": "/_nuxt/b7f7272cf73e076bc313.js",
    "revision": "6a2f6685b383957bebecdb217b09706c"
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
    "url": "/_nuxt/c2ebff539dcd447ec66d.js",
    "revision": "0940f97fd58d01a4a07dc63e655732f3"
  },
  {
    "url": "/_nuxt/d96b38a509547d302fda.js",
    "revision": "57ef9a347dbef24dc0201a05a72eb3e8"
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
