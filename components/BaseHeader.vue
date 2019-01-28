<template>
  <header
    class="header_sticky"
    :class="{ 'is--have-bg': isHaveBg }">
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
            <span class="link">
              Register
            </span>
            <ul class="sub-menu">
              <li>
                <nuxt-link
                  to="/register"
                  title="Register for Attendant">
                  Register for Attendant
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/sponsor"
                  title="Register for Sponsor">
                  Register for Sponsor
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/speaker"
                  title="Register for Speaker">
                  Register for Speaker
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/coacher"
                  title="Register for Coacher">
                  Register for Coacher
                </nuxt-link>
              </li>
              <li>
                <nuxt-link
                  to="/volunteer"
                  title="Register for Volunteer">
                  Register for Volunteer
                </nuxt-link>
              </li>
            </ul>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/accepted-speaker"
              title="Speakers">
              Speakers
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/accepted-coacher"
              title="Coachers">
              Coachers
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/accepted-sponsor"
              title="Sponsors">
              Sponsors
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
              to="/accepted-speaker"
              title="Speakers"
              @click.native="hideMenu">
              Speakers
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/accepted-coacher"
              title="Coachers"
              @click.native="hideMenu">
              Coachers
            </nuxt-link>
          </p>
          <p class="level-item has-text-centered">
            <nuxt-link
              class="link"
              to="/accepted-sponsor"
              title="Sponsorship"
              @click.native="hideMenu">
              Sponsorship
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
  props: {
    isHaveBg: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isShowMenu: false
    }
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
