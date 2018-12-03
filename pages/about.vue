<template>
  <div class="container">
    <section
      id="about"
      class="section about">
      <h2 class="title has-text-centered title-section caption-text">
        About
      </h2>
      <p class="is-size-3">
        {{ aboutTitle }}
      </p>
    </section>
  </div>
</template>

<script>
import constant from '../constant'

export default {
  name: 'AboutPage',
  data () {
    return {
      aboutTitle: constant.about
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
