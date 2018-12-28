<template>
  <div class="wrapper">
    <section
      id="about"
      class="section about">
      <h2 class="title has-text-centered title-section caption-text">
        ABOUT SME SUMMIT 2019
      </h2>
      <div class="has-text-centered">
        <p>
          {{ aboutTitle }}
        </p>
      </div>
    </section>

    <BenefitList
      :items="benefits" />

    <section
      id="register"
      class="register gradient-section clearfix">
      <h2 class="title has-text-centered title-section caption-text">
        ARE YOU THIS PERSON ?
      </h2>

      <h2 class="is-size-3 has-text-centered has-text-white">
        <span>&nbsp;</span><span class="typed-container" />
      </h2>

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-large is-danger caption-text"
            href="/register">
            Register Here
          </a>
        </div>
      </div>
    </section>

    <SpeakerList
      :items="speakers" />

    <BaseImageList
      :items="sponsors" />

    <BaseImageList
      :items="partners"
      list-type="media-partner"
      list-title="MEDIA PARTNER"
      :show-button="false" />

    <VolunteerSection />
    <LocationSection />
  </div>
</template>

<script>
import Typed from 'typed.js'

import BaseImageList from '../components/BaseImageList'
import BenefitList from '../components/BenefitList'
import SpeakerList from '../components/SpeakerList'
import VolunteerSection from '../components/VolunteerSection'
import LocationSection from '../components/LocationSection'

import { ABOUT_DESC } from '../constant/index'
import { SPEAKERS } from '../constant/speaker'
import { SPONSORS } from '../constant/sponsor'
import { PARTNERS } from '../constant/media-partner'
import { TARGETS } from '../constant/target'
import { BENEFITS } from '../constant/benefit'

export default {
  name: 'IndexPage',
  components: {
    BaseImageList,
    BenefitList,
    SpeakerList,
    VolunteerSection,
    LocationSection
  },
  data () {
    return {
      aboutTitle: ABOUT_DESC,
      speakers: SPEAKERS,
      sponsors: SPONSORS,
      partners: PARTNERS,
      benefits: BENEFITS
    }
  },
  mounted () {
    /* eslint-disable */
    const options = {
      strings: TARGETS,
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
