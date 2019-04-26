<template>
  <section
    :id="listType"
    class="section"
    :class="listType">
    <h2 class="title has-text-centered title-section caption-text">
      {{ listTitle }}
    </h2>
    <h3
      v-if="listSubTitle !== ''"
      class="title has-text-centered title-section caption-text">
      {{ listSubTitle }}
    </h3>
    <div class="has-text-centered">
      <div class="level">
        <div
          v-for="(item, index) in items"
          :key="listType + index"
          class="level-item">
          <a
            :href="item.link + '?utm_source=www-smesummit-id?utm_medium=banner'"
            :title="item.name"
            target="_blank"
            rel="noopener">
            <img
              v-lazyload
              src="/images/placeholder.png"
              :data-src="item.logo"
              data-err="/images/placeholder.png"
              class="sponsors_item"
              :alt="item.name">
          </a>
        </div>
      </div>
    </div>

    <div
      v-if="showButton"
      class="level btn-call">
      <div class="level-item">
        <nuxt-link
          class="button is-outlined is-large is-info caption-text"
          to="#">
          Register Closed
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
    listSubTitle: {
      type: String,
      default: ''
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
