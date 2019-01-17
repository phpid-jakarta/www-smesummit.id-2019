<template>
  <div class="container">
    <section
      id="about"
      class="section about">
      <h2 class="title has-text-centered title-section caption-text">
        About
      </h2>
      <p class="is-size-4">
        {{ aboutTitle }}
        <nuxt-link to="/faq">
          Read more in FAQ
        </nuxt-link>
      </p>
    </section>

    <BenefitList
      :items="benefits" />
  </div>
</template>

<script>
import BenefitList from '../components/BenefitList'
import { DESC } from '../constant/index'
import { BENEFITS } from '../constant/benefit'

export default {
  name: 'AboutPage',
  head () {
    return {
      title: 'About | SME Summit 2019'
    }
  },
  components: {
    BenefitList
  },
  data () {
    return {
      aboutTitle: DESC.ABOUT,
      benefits: BENEFITS
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
