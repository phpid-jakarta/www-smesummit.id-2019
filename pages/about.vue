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
  </div>
</template>

<script>
import { DESC } from '../constant/index'

export default {
  name: 'AboutPage',
  head () {
    return {
      title: 'About | SME Summit 2019'
    }
  },
  data () {
    return {
      aboutTitle: DESC.ABOUT
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
