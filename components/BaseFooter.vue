<template>
  <footer class="footer_container has-text-centered">
    <div class="columns">
      <div class="column">
        <p class="has-text-weight-bold">
          Organized by
        </p>

        <figure class="image">
          <picture>
            <img
              v-lazy="'/images/organizer/logo-phpid-putih300.png'"
              class="organizer__logo"
              src="/images/placeholder.png"
              alt="PHP Indonesia">
          </picture>
        </figure>
      </div>
      <div class="column is-two-fifths sitemap">
        <p class="has-text-weight-bold">
          Location
        </p>
        <div class="sitemap__wrapper">
          <div class="sitemap__item">
            Ballroom Ayana Hotel Midplaza, Jakarta
            <br>
            <small class="is-size-7">
              Jl. Jenderal Sudirman Kav. 10-11 Jakarta Pusat, Jakarta 10220, Indonesia
            </small>
          </div>
        </div>
      </div>
      <div class="column sitemap">
        <p class="has-text-weight-bold">
          Registration
        </p>
        <ul class="sitemap__wrapper">
          <li class="sitemap__item">
            <nuxt-link
              to="/register"
              title="Register as Attendant">
              Attendant
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/speaker"
              title="Register as Speakers">
              Speakers
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/coacher"
              title="Register as Coacher">
              Coacher
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/sponsor"
              title="Register as Sponsors">
              Sponsors
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/volunteer"
              title="Register as Volunteers">
              Volunteers
            </nuxt-link>
          </li>
        </ul>
      </div>
      <div class="column sitemap">
        <p class="has-text-weight-bold">
          Sitemap
        </p>
        <ul class="sitemap__wrapper">
          <li class="sitemap__item">
            <a
              href="/"
              title="Home">
              Home
            </a>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/accepted-speaker"
              title="Speaker">
              Speaker
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/accepted-coacher"
              title="Coacher">
              Coacher
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/accepted-sponsor"
              title="Sponsors">
              Sponsors
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/organizer"
              title="Organizer">
              Organizers
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/contact"
              title="Contact Us">
              Contact
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <nuxt-link
              to="/faq"
              title="FAQ">
              FAQ
            </nuxt-link>
          </li>
          <li class="sitemap__item">
            <a
              href="https://smesummit2019.wordpress.com/"
              target="_blank"
              rel="noopener"
              title="Blog">
              Blog
            </a>
          </li>
        </ul>
      </div>
      <div class="column sitemap">
        <p class="has-text-weight-bold">
          Contact Us
        </p>
        <div class="sitemap__wrapper">
          <div class="sitemap__item">
            <div>
              <svg
                fill="#fff"
                width="1.5em"
                height="1.5em"
                style="margin-bottom: -6px;"
                viewBox="0 0 512 512">
                <path
                  d="M256 256c52.805 0 96-43.201 96-96s-43.195-96-96-96-96 43.201-96 96 43.195 96 96 96zm0 48c-63.598 0-192 32.402-192 96v48h384v-48c0-63.598-128.402-96-192-96z" />
              </svg>
              {{ SALMA.name }} <br>
              <svg
                fill="#fff"
                width="1.5em"
                height="1.5em"
                style="margin-bottom: -6px;"
                viewBox="0 0 512 512">
                <path
                  d="M460.6 147.3L353 256.9c-.8.8-.8 2 0 2.8l75.3 80.2c5.1 5.1 5.1 13.3 0 18.4-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8l-75-79.9c-.8-.8-2.1-.8-2.9 0L313.7 297c-15.3 15.5-35.6 24.1-57.4 24.2-22.1.1-43.1-9.2-58.6-24.9l-17.6-17.9c-.8-.8-2.1-.8-2.9 0l-75 79.9c-2.5 2.5-5.9 3.8-9.2 3.8s-6.7-1.3-9.2-3.8c-5.1-5.1-5.1-13.3 0-18.4l75.3-80.2c.7-.8.7-2 0-2.8L51.4 147.3c-1.3-1.3-3.4-.4-3.4 1.4V368c0 17.6 14.4 32 32 32h352c17.6 0 32-14.4 32-32V148.7c0-1.8-2.2-2.6-3.4-1.4z" />
                <path
                  d="M256 295.1c14.8 0 28.7-5.8 39.1-16.4L452 119c-5.5-4.4-12.3-7-19.8-7H79.9c-7.5 0-14.4 2.6-19.8 7L217 278.7c10.3 10.5 24.2 16.4 39 16.4z" />
              </svg>
              {{ SALMA.email }} <br>
              <svg
                fill="#fff"
                width="1.5em"
                height="1.5em"
                style="margin-bottom: -6px;"
                viewBox="0 0 512 512">
                <path
                  d="M436.9 364.8c-14.7-14.7-50-36.8-67.4-45.1-20.2-9.7-27.6-9.5-41.9.8-11.9 8.6-19.6 16.6-33.3 13.6-13.7-2.9-40.7-23.4-66.9-49.5-26.2-26.2-46.6-53.2-49.5-66.9-2.9-13.8 5.1-21.4 13.6-33.3 10.3-14.3 10.6-21.7.8-41.9C184 125 162 89.8 147.2 75.1c-14.7-14.7-18-11.5-26.1-8.6 0 0-12 4.8-23.9 12.7-14.7 9.8-22.9 18-28.7 30.3-5.7 12.3-12.3 35.2 21.3 95 27.1 48.3 53.7 84.9 93.2 124.3l.1.1.1.1c39.5 39.5 76 66.1 124.3 93.2 59.8 33.6 82.7 27 95 21.3 12.3-5.7 20.5-13.9 30.3-28.7 7.9-11.9 12.7-23.9 12.7-23.9 2.9-8.1 6.2-11.4-8.6-26.1z" />
              </svg>
              {{ SALMA.phone }}
            </div>
          </div>
        </div>
      </div>
    </div>

    <div><p>This website is crafted by PHPID Community</p></div>
    <div><p>Copyright © 2019, All Rights Reserved.</p></div>
  </footer>
</template>

<script>
import { ARGA, SALMA } from '../constant/contact'

export default {
  name: 'BaseFooter',
  data () {
    return {
      ARGA,
      SALMA
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
