<template>
  <div class="wrapper">
    <section
      id="about"
      class="section about">
      <h2 class="title has-text-centered title-section caption-text">
        ABOUT SME SUMMIT 2019
      </h2>
      <div class="has-text-centered">
        <p class="is-size-5">
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
            href="#">
            Register Closed
          </a>
        </div>
      </div>
    </section>

    <SpeakerList
      :items="speakers" />

    <BaseImageList
      :items="sponsors"
      list-sub-title="MAIN SPONSOR"
      :show-button="false" />

    <BaseImageList
      :items="silver_sponsor"
      list-title=""
      list-sub-title="SILVER SPONSOR" />

    <BaseImageList
      :items="supporter"
      list-type="supporter"
      list-title="SUPPORTED BY"
      :show-button="false" />

    <BaseImageList
      :items="partners"
      list-type="media-partner"
      list-title="OFFICIAL MEDIA PARTNER"
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

import { DESC } from '../constant/index'
import { SPEAKERS } from '../constant/speaker'
import { MAIN_SPONSORS, SILVER_SPONSORS } from '../constant/sponsor'
import { PARTNERS } from '../constant/media-partner'
import { TARGETS } from '../constant/target'
import { BENEFITS } from '../constant/benefit'
import { SUPPORTER } from '../constant/supporter'

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
      DESC,
      aboutTitle: DESC.ABOUT,
      speakers: SPEAKERS,
      sponsors: MAIN_SPONSORS,
      silver_sponsor: SILVER_SPONSORS,
      partners: PARTNERS,
      benefits: BENEFITS,
      supporter: SUPPORTER
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
