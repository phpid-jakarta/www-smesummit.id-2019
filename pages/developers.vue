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

      <br><br><br>
      <nav class="panel">
        <p class="panel-heading">
          Project Repositories
        </p>
        <a
          class="panel-block"
          href="https://github.com/phpid-jakarta/www-smesummit.id-2019"
          target="_blank"
          rel="noopener">
          <span class="panel-icon">
            <svg viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
            </svg>
          </span>
          Web Frontend
        </a>
        <a
          class="panel-block"
          href="https://github.com/phpid-jakarta/api-smesummit.id-2019"
          target="_blank"
          rel="noopener">
          <span class="panel-icon">
            <svg viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
            </svg>
          </span>
          Rest API
        </a>
        <a
          class="panel-block"
          href="https://github.com/phpindonesia/backend.smesummit.id"
          target="_blank"
          rel="noopener">
          <span class="panel-icon">
            <svg viewBox="0 0 448 512">
              <path
                fill="currentColor"
                d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z" />
            </svg>
          </span>
          Admin Dashboard
        </a>
      </nav>
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
