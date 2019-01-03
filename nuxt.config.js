const pkg = require('./package')
const appTitle = 'SME Summit 2019'

module.exports = {
  mode: 'spa',

  /*
  ** Headers of the page
  */

  head: {
    title: `${appTitle}`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', content: pkg.description },
      { name: 'theme-color', content: '#2779d6' },

      { property: 'og:image', content: '/images/favicon/SMESummit_Logo.png' },
      { property: 'og:title', content: `${appTitle}` },
      { property: 'og:description', content: pkg.description },
      { property: 'og:url', content: 'https://smesummit.id' },

      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:image:src', content: '/images/favicon/SMESummit_Logo.png' },
      { name: 'twitter:title', content: `${appTitle}` },
      { name: 'twitter:description', content: pkg.description },
      { name: 'twitter:url', content: 'https://smesummit.id' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/images/favicon/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes: '96x96', href: '/images/favicon/favicon-96x96.png' }
    ],
    noscript: [
      {
        innerHTML: 'This website requires JavaScript.',
        body: true
      }
    ]
  },
  manifest: {
    name: `${appTitle}`,
    short_name: 'SME Summit'
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#2779d6' },

  /*
  ** Global CSS
  */
  css: [
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '~/plugins/lazyload', ssr: false }
  ],

  generate: {
    routes: () => {
      let res = [
        '/',
        '/about',
        '/coacher',
        '/contact',
        '/faq',
        '/register',
        '/speaker',
        '/sponsor',
        '/volunteer',
        '/organizer',
        '/banner'
      ]
      return res
    }
  },
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc:https://github.com/nuxt-community/modules/tree/master/packages/bulma
    '@nuxtjs/bulma',
    '@nuxtjs/pwa'
  ],

  /*
  ** Build configuration
  */
  build: {
    postcss: {
      plugins: [
        require('autoprefixer')({
          browsers: ['last 2 versions']
        })
      ],
      preset: {
        features: {
          customProperties: false
        }
      }
    },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
