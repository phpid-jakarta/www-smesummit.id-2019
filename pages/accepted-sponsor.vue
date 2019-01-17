<template>
  <div class="container">
    <section
      class="section">
      <BaseImageList
        :items="sponsors" />
    </section>
  </div>
</template>

<script>
import BaseImageList from '../components/BaseImageList'
import { SPONSORS } from '../constant/sponsor'
export default {
  name: 'AcceptedSponsor',
  layout: 'no-hero',
  head () {
    return {
      title: 'Awesome Sponsors in SME Summit 2019'
    }
  },
  components: {
    BaseImageList
  },
  data () {
    return {
      sponsors: SPONSORS
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
