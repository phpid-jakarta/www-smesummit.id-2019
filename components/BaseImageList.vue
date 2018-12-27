<template>
  <section
    :id="listType"
    class="section"
    :class="listType">
    <h2 class="title has-text-centered title-section caption-text">
      {{ listTitle }}
    </h2>
    <div class="has-text-centered">
      <div class="level">
        <div
          v-for="(item, index) in items"
          :key="listType + index"
          class="level-item">
          <img
            v-lazy="item.logo"
            class="sponsors_item"
            :alt="item.name"
            src="/images/placeholder.png">
        </div>
      </div>
    </div>

    <div
      v-if="showButton"
      class="level btn-call">
      <div class="level-item">
        <nuxt-link
          class="button is-outlined is-large is-info caption-text"
          to="/sponsor">
          Become Sponsor
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BaseImageList',
  props: {
    items: {
      type: Array,
      default: () => []
    },
    listType: {
      type: String,
      default: 'sponsor'
    },
    listTitle: {
      type: String,
      default: 'SPONSOR'
    },
    showButton: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
