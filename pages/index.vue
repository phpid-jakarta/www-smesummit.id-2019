<template>
  <div class="wrapper">
    <section
      id="about"
      class="section about">
      <h2 class="title has-text-centered title-section caption-text">
        ABOUT SME SUMMIT 2019
      </h2>
      <div class="has-text-centered">
        <p class="is-size-3">
          {{ aboutTitle }}
        </p>
      </div>
    </section>

    <section
      id="register"
      class="register gradient-section clearfix">
      <h2 class="title has-text-centered title-section caption-text">
        ARE YOU THIS PERSON ?
      </h2>

      <h2 class="is-size-3 has-text-centered has-text-white">
        <span>&nbsp;</span><span class="typed-container"/>
      </h2>

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-large is-danger caption-text"
            href="/register"
          >Register Here</a
          >
        </div>
      </div>
    </section>

    <section
      id="speakers"
      class="section speakers">
      <h2 class="title has-text-centered title-section caption-text">
        SPEAKERS
      </h2>
      <div class="level">
        <div class="level-item">
          <a
            href="https://www.linkedin.com/in/kenratriiswari/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure class="image is-128x128">
              <picture>
                <source
                  type="image/webp"
                  srcset="/images/speaker/ken-ratri-iswari.webp"
                >
                <img
                  class="is-rounded"
                  src="/images/speaker/ken-ratri-iswari.jpeg"
                  alt="Ken Ratri Iswari"
                >
              </picture>
            </figure>
          </a>
        </div>
      </div>

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-outlined is-large is-info caption-text"
            href="/speaker"
          >Become Speaker</a
          >
        </div>
      </div>
    </section>

    <section
      id="sponsors"
      class="section sponsors">
      <h2 class="title has-text-centered title-section caption-text">
        SPONSORS
      </h2>
      <div class="has-text-centered">
        <img
          class="sponsors_item"
          src="/images/sponsor/biznet-gio-logo.svg" >
      </div>

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-outlined is-large is-info caption-text"
            href="/sponsor"
          >Become Sponsor</a
          >
        </div>
      </div>
    </section>

    <section
      id="media-partner"
      class="section media-partner">
      <h2 class="title has-text-centered title-section caption-text">
        MEDIA PARTNER
      </h2>
      <div class="has-text-centered">
        <img
          class="sponsors_item"
          src="/images/media-partner/codepolitan_logo.png"
        >
      </div>
    </section>

    <section
      id="volunteers"
      class="section volunteers">
      <h2 class="title has-text-centered title-section caption-text">
        CALL FOR VOLUNTEERS
      </h2>

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-outlined is-large is-info caption-text"
            href="/volunteer"
          >Become Volunteer</a
          >
        </div>
      </div>
    </section>

    <section
      id="location"
      class="section location">
      <h2 class="title has-text-centered title-section caption-text">
        LOCATION
      </h2>
      <article class="level">
        <figure class="level-item">
          <picture>
            <source
              type="image/webp"
              srcset="/images/venue/ayana_ballroom_3_300px.webp"
            >
            <img
              src="/images/venue/ayana_ballroom_3_300px.jpeg"
              alt="Ballroom Ayana Hotel Midplaza, Jakarta"
              height="300"
            >
          </picture>
        </figure>
        <div class="level-item">
          <div class="content">
            <p class="is-size-4">Ballroom Ayana Hotel Midplaza, Jakarta</p>
            <p>
              Jl. Jenderal Sudirman Kav. 10-11 Jakarta Pusat, Jakarta 10220,
              Indonesia
            </p>
            <p>
              <a
                href="https://goo.gl/maps/L9HS9Dn2oWx"
                target="_blank"
                rel="noopener"
              >
                See in Google Maps
              </a>
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import Typed from 'typed.js'
import { ABOUT_DESC } from '../constant/index'

export default {
  name: 'IndexPage',
  data () {
    return {
      aboutTitle: ABOUT_DESC
    }
  },
  mounted () {
    /* eslint-disable */
    const options = {
      strings: [
        'CEO of Small and Medium Enterprise',
        'IT Manager or equal of Non-Tech Company',
        'Professional Freelancer',
        'Academic/Lecture'
      ],
      typeSpeed: 40,
      backSpeed: 40,
      backDelay: 1000,
      loop: true,
      loopCount: Infinity,
      showCursor: false,
    }
    new Typed('.typed-container', options)
  }
}
</script>

<style>
</style>
