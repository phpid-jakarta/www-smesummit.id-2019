<template>
  <div class="container">
    <section
      id="developers"
      class="section developers">
      <h2 class="title has-text-centered title-section caption-text">
        DEVELOPERS
      </h2>

      <article
        v-for="(dev, index) in developers"
        :key="'developers' + index"
        class="media">
        <figure class="media-left">
          <p class="image is-64x64">
            <img :src="dev.image">
          </p>
        </figure>
        <div class="media-content">
          <div class="content">
            <p>
              <strong>{{ dev.name }}</strong> <a
                :href="dev.github_link"
                target="_blank"
                rel="noopener">
                <small>{{ dev.github_username }}</small>
              </a>
            </p>
          </div>
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import { DEVELOPERS } from '../constant/developers'
export default {
  name: 'DevelopersPage',
  layout: 'no-hero',
  head () {
    return {
      title: 'Developers | SME Summit 2019'
    }
  },
  data () {
    return {
      developers: DEVELOPERS
    }
  }
}
</script>

<style lang="scss">
.message-body{
  a {
    color: #209cee !important;
  }
}
.developers{
  /deep/ ul li {
    list-style-type: disc;
    margin-left: 1em;
  }
}
</style>
