<template>
  <header class="header_sticky">
    <nav class="level header_wrapper">
      <!-- DESKTOP MENU -->
      <div class="level-item has-text-centered is-hidden-mobile nav-right">
        <nav class="level">
          <div class="level-item has-text-centered">
            <a
              class=""
              href="/#home">
              <img
                class="brand-logo"
                src="/images/logo/SMESummit_Logo.png"
                alt=""
                style="height: 60px;"
              >
            </a>
          </div>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/about">About</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/register">Register</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/sponsor">Sponsorship</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/speaker">Speakers</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/#location">Location</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/faq">FAQ</a>
          </p>
        </nav>
      </div>
      <!-- BURGER MENU -->
      <div
        :class="{ 'is-active': isShowMenu }"
        class="level-item burger"
        @click="onClickBurger">
        <span/> <span/> <span/>
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
              href="/#home">Home</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/about">About</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/register">Register</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/sponsor">Sponsorship</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/speaker">Speakers</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/#location">Location</a>
          </p>
          <p class="level-item has-text-centered">
            <a
              class="link"
              href="/faq">FAQ</a>
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
