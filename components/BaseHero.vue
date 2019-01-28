<template>
  <section
    id="home"
    class="hero is-fullheight is-welcome-cover">
    <div class="hero-body">
      <div class="container">
        <div class="columns">
          <div class="column is-8 is-offset-2">
            <div class="block">
              <div class="hero-content has-text-white">
                <h1
                  id="conf_title"
                  class="is-size-1 has-text-white caption-text">
                  {{ DESC.TITLE }}
                </h1>
                <h2 class="is-size-4 has-text-white">
                  {{ DESC.TAGLINE }}
                </h2>
                <br>
                <p
                  class="is-size-5"
                  style="line-height: 2;">
                  <svg
                    fill="#fff"
                    width="1.5em"
                    height="1.5em"
                    style="margin-bottom: -6px;"
                    viewBox="0 0 512 512">
                    <path
                      d="M424 96h-40v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H160v24c0 4.4-3.6 8-8 8h-16c-4.4 0-8-3.6-8-8V96H88c-22 0-40 18-40 40v272c0 22 18 40 40 40h336c22 0 40-18 40-40V136c0-22-18-40-40-40zm8 300c0 11-9 20-20 20H100c-11 0-20-9-20-20V216c0-4.4 3.6-8 8-8h336c4.4 0 8 3.6 8 8v180zM160 72c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72zm224 0c0-4.4-3.6-8-8-8h-16c-4.4 0-8 3.6-8 8v24h32V72z" />
                  </svg>
                  {{ DESC.PLACE_N_DATE }}
                </p>
                <p
                  class="is-size-5"
                  style="line-height: 2;">
                  <svg
                    fill="#fff"
                    width="1.5em"
                    height="1.5em"
                    style="margin-bottom: -6px;"
                    viewBox="0 0 512 512">
                    <path
                      d="M256 48c-79.5 0-144 59.9-144 133.7 0 104 144 282.3 144 282.3s144-178.3 144-282.3C400 107.9 335.5 48 256 48zm0 190.9c-25.9 0-46.9-21-46.9-46.9s21-46.9 46.9-46.9 46.9 21 46.9 46.9-21 46.9-46.9 46.9z" />
                  </svg>
                  {{ DESC.VENUE }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="particle" />
  </section>
</template>

<script>
import { DESC } from '../constant/index'

export default {
  name: 'BaseHero',
  data () {
    return {
      DESC
    }
  },
  mounted () {
    /* eslint-disable */
    particlesJS.load('particle', '/particle.json')
    /* eslint-disable */
    if ('IntersectionObserver' in window) {
      const about = document.querySelector('#conf_title')
      const lazyImageObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.intersectionRatio <= 0) {
            document.querySelector('.header_sticky').classList.add('is--have-bg')
          } else {
            document
              .querySelector('.header_sticky')
              .classList.remove('is--have-bg')
          }
        })
      })

      lazyImageObserver.observe(about)
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
