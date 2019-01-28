<template lang="html">
  <div
    v-show="loading"
    :width="w"
    class="loading-page">
    <p>Loading...</p>
  </div>
</template>

<script>
export default {
  data: () => ({
    loading: false,
    w: 0
  }),
  methods: {
    start () {
      this.loading = true
    },
    finish () {
      this.loading = false
    },
    increase (num) {
      this.w = num
    }
  }
}
</script>

<style scoped>
.loading-page {
  background-color: #f00;
  height: 5px;
  width: 0;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 999;
  -webkit-transition:width 500ms ease-out, height 500ms ease-out;
  -moz-transition:width 500ms ease-out, height 500ms ease-out;
  -o-transition:width 500ms ease-out, height 500ms ease-out;
  transition:width 500ms ease-out, height 500ms ease-out;
}
</style>
