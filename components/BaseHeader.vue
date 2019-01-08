<template>
  <header class="header_sticky">
    <nav class="level header_wrapper">
      <div class="level-item has-text-centered">
        <a
          class=""
          title="SME Summit Logo"
          href="/#home">
          <img
            class="brand-logo"
            src="/images/logo/SMESummit_Logo.png"
            alt="SME Summit Logo"
            style="height: 60px;">
        </a>
      </div>
      <!-- DESKTOP MENU -->
      <div class="level-item has-text-centered is-hidden-mobile">
        <nav class="level">
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/about"
              title="About">
              About
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/register"
              title="Register">
              Register
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/sponsor"
              title="Sponsorship">
              Sponsorship
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/speaker"
              title="Speakers">
              Speakers
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/contact"
              title="Contact">
              Contact
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/faq"
              title="FAQ">
              FAQ
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="https://smesummit2019.wordpress.com/"
              target="_blank"
              rel="noopener"
              title="Blog">
              Blog
            </a>
          </p>
        </nav>
      </div>
      <div class="level-item is-hidden-mobile" />
      <!-- BURGER MENU -->
      <div
        :class="{ 'is-active': isShowMenu }"
        class="level-item burger navbar-burger"
        @click="onClickBurger">
        <span /> <span /> <span />
      </div>
      <!-- MOBILE MENU -->
      <div
        v-if="isShowMenu"
        :class="{ 'is-active': isShowMenu }"
        class="mobile-menu">
        <nav class="level">
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/#home"
              title="Home">
              Home
            </a>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/about"
              title="About"
              @click.native="hideMenu">
              About
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/register"
              title="Register"
              @click.native="hideMenu">
              Register
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/sponsor"
              title="Sponsorship"
              @click.native="hideMenu">
              Sponsorship
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/speaker"
              title="Speakers"
              @click.native="hideMenu">
              Speakers
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/contact"
              title="Contact"
              @click.native="hideMenu">
              Contact
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/faq"
              title="FAQ"
              @click.native="hideMenu">
              FAQ
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="https://smesummit2019.wordpress.com/"
              target="_blank"
              rel="noopener"
              title="Blog">
              Blog
            </a>
          </p>
        </nav>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'BaseHeader',
  data () {
    return {
      isShowMenu: false
    }
  },
  mounted () {
    /* eslint-disable */
    particlesJS.load('particle', '/particle.json')
  },
  methods: {
    onClickBurger () {
      this.isShowMenu = !this.isShowMenu
    },
    hideMenu () {
      this.isShowMenu = false
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
