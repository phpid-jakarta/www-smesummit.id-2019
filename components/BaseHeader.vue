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
            <a
              class="link"
              href="/about"
              title="About">
              About
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/register"
              title="Register">
              Register
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/sponsor"
              title="Sponsorship">
              Sponsorship
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/speaker"
              title="Speakers">
              Speakers
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/#location"
              title="Location">
              Location
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/faq"
              title="FAQ">
              FAQ
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
            <a
              class="link"
              href="/about"
              title="About">
              About
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/register"
              title="Register">
              Register
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/sponsor"
              title="Sponsorship">
              Sponsorship
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/speaker"
              title="Speakers">
              Speakers
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/#location"
              title="Location">
              Location
            </a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/faq"
              title="FAQ">
              FAQ
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
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
