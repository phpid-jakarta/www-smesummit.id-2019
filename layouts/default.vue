<template>
  <div class="app nuxt-app">
    <BaseHeader />
    <BaseHero />
    <nuxt />
    <BaseFooter />
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'
import BaseHero from '../components/BaseHero'
import BaseFooter from '../components/BaseFooter'

require('intersection-observer')
require('particles.js')

export default {
  name: 'DefaultLayout',
  components: {
    BaseHeader,
    BaseHero,
    BaseFooter
  }
}
</script>

<style lang="scss">
  @import '@/assets/index.scss';
</style>
