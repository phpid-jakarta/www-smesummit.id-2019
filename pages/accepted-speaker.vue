<template>
  <div class="container">
    <section
      class="section">
      <SpeakerList
        :items="speakers" />
    </section>
  </div>
</template>

<script>
import SpeakerList from '../components/SpeakerList'
import { SPEAKERS } from '../constant/speaker'

export default {
  name: 'AcceptedSpeakers',
  layout: 'no-hero',
  head () {
    return {
      title: 'Awesome Speakers in SME Summit 2019'
    }
  },
  components: {
    SpeakerList
  },
  data () {
    return {
      speakers: SPEAKERS
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
