<template>
  <div class="app nuxt-app">
    <BaseHeader
      :is-have-bg="true" />
    <nuxt style="margin-top: 100px;" />
    <BaseFooter />
    <BaseToast />
  </div>
</template>

<script>
import BaseHeader from '../components/BaseHeader'
import BaseFooter from '../components/BaseFooter'
import BaseToast from '../components/BaseToast'

require('intersection-observer')
require('particles.js')

export default {
  name: 'NoHeroLayout',
  components: {
    BaseHeader,
    BaseFooter,
    BaseToast
  }
}
</script>

<style lang="scss">
  @import '@/assets/index.scss';
</style>
