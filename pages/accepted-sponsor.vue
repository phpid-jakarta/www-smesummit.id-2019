<template>
  <div class="container">
    <section
      class="section">
      <BaseImageList
        :items="sponsors"
        list-sub-title="MAIN SPONSOR"
        :show-button="false" />

      <BaseImageList
        :items="silver_sponsor"
        list-title=""
        list-sub-title="SILVER SPONSOR" />
    </section>
  </div>
</template>

<script>
import BaseImageList from '../components/BaseImageList'
import { MAIN_SPONSORS, SILVER_SPONSORS } from '../constant/sponsor'
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
      sponsors: MAIN_SPONSORS,
      silver_sponsor: SILVER_SPONSORS
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
