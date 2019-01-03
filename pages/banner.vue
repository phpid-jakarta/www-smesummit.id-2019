<template>
  <div class="container">
    <div
      v-for="image in images"
      :key="image"
      class="columns">
      <div class="column" />
      <div class="column">
        <img
          v-lazy="`/images/banner/banner-${image}.jpeg`"
          class="banner__item"
          :alt="`Bannner ${image}`"
          src="/images/placeholder.png">
      </div>
      <div class="column" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'BannerPage',
  data () {
    return {
      images: [1, 2, 3, 4, 5, 6, 7]
    }
  }
}
</script>

<style lang="scss" scoped>
.column{
  text-align: center;
}
.banner__item{
  width: 500px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
}
</style>
