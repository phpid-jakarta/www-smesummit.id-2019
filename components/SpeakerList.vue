<template>
  <section
    id="speakers"
    class="section speakers">
    <h2 class="title has-text-centered title-section caption-text">
      AWESOME SPEAKERS
    </h2>
    <div class="level">
      <div
        v-for="(speaker, index) in items"
        :key="'speaker-' + index"
        class="level-item">
        <div class="speaker__item">
          <figure class="image is-200x200">
            <picture>
              <img
                v-lazyload
                src="/images/person.png"
                :data-src="speaker.photo.jpeg"
                data-err="/images/person.png"
                :alt="speaker.name"
                class="is-rounded">
            </picture>
          </figure>
          <div class="speaker__name">
            <h2>{{ speaker.name }}</h2>
            <h3>{{ speaker.title }}</h3>
            <h5>{{ speaker.sector }}</h5>
          </div>
          <div class="speaker__social">
            <a
              v-if="speaker.in"
              :href="speaker.in"
              :title="`${speaker.name} Linkedin`"
              target="_blank"
              rel="noopener">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 512 512"
                class="icon__in">
                <path d="M417.2 64H96.8C79.3 64 64 76.6 64 93.9V415c0 17.4 15.3 32.9 32.8 32.9h320.3c17.6 0 30.8-15.6 30.8-32.9V93.9C448 76.6 434.7 64 417.2 64zM183 384h-55V213h55v171zm-25.6-197h-.4c-17.6 0-29-13.1-29-29.5 0-16.7 11.7-29.5 29.7-29.5s29 12.7 29.4 29.5c0 16.4-11.4 29.5-29.7 29.5zM384 384h-55v-93.5c0-22.4-8-37.7-27.9-37.7-15.2 0-24.2 10.3-28.2 20.3-1.5 3.6-1.9 8.5-1.9 13.5V384h-55V213h55v23.8c8-11.4 20.5-27.8 49.6-27.8 36.1 0 63.4 23.8 63.4 75.1V384z" />
              </svg>
            </a>

            <a
              v-if="speaker.fb"
              :href="speaker.fb"
              :title="`${speaker.name} Facebook`"
              target="_blank"
              rel="noopener">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 512 512"
                class="icon__fb">
                <path d="M426.8 64H85.2C73.5 64 64 73.5 64 85.2v341.6c0 11.7 9.5 21.2 21.2 21.2H256V296h-45.9v-56H256v-41.4c0-49.6 34.4-76.6 78.7-76.6 21.2 0 44 1.6 49.3 2.3v51.8h-35.3c-24.1 0-28.7 11.4-28.7 28.2V240h57.4l-7.5 56H320v152h106.8c11.7 0 21.2-9.5 21.2-21.2V85.2c0-11.7-9.5-21.2-21.2-21.2z" />
              </svg>
            </a>
            <a
              v-if="speaker.tw"
              :href="speaker.tw"
              :title="`${speaker.name} Twitter`"
              target="_blank"
              rel="noopener">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 512 512"
                class="icon__tw">
                <path d="M492 109.5c-17.4 7.7-36 12.9-55.6 15.3 20-12 35.4-31 42.6-53.6-18.7 11.1-39.4 19.2-61.5 23.5C399.8 75.8 374.6 64 346.8 64c-53.5 0-96.8 43.4-96.8 96.9 0 7.6.8 15 2.5 22.1-80.5-4-151.9-42.6-199.6-101.3-8.3 14.3-13.1 31-13.1 48.7 0 33.6 17.2 63.3 43.2 80.7-16-.4-31-4.8-44-12.1v1.2c0 47 33.4 86.1 77.7 95-8.1 2.2-16.7 3.4-25.5 3.4-6.2 0-12.3-.6-18.2-1.8 12.3 38.5 48.1 66.5 90.5 67.3-33.1 26-74.9 41.5-120.3 41.5-7.8 0-15.5-.5-23.1-1.4C62.8 432 113.7 448 168.3 448 346.6 448 444 300.3 444 172.2c0-4.2-.1-8.4-.3-12.5C462.6 146 479 129 492 109.5z" />
              </svg>
            </a>

            <a
              v-if="speaker.insta"
              :href="speaker.insta"
              :title="`${speaker.name} Instagram`"
              target="_blank"
              rel="noopener">
              <svg
                width="2em"
                height="2em"
                viewBox="0 0 512 512"
                class="icon__instagram">
                <path d="M336 96c21.2 0 41.3 8.4 56.5 23.5S416 154.8 416 176v160c0 21.2-8.4 41.3-23.5 56.5S357.2 416 336 416H176c-21.2 0-41.3-8.4-56.5-23.5S96 357.2 96 336V176c0-21.2 8.4-41.3 23.5-56.5S154.8 96 176 96h160m0-32H176c-61.6 0-112 50.4-112 112v160c0 61.6 50.4 112 112 112h160c61.6 0 112-50.4 112-112V176c0-61.6-50.4-112-112-112z" />
                <path d="M360 176c-13.3 0-24-10.7-24-24s10.7-24 24-24c13.2 0 24 10.7 24 24s-10.8 24-24 24zm-104 16c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64m0-32c-53 0-96 43-96 96s43 96 96 96 96-43 96-96-43-96-96-96z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div
      v-if="showButton"
      class="level btn-call">
      <div class="level-item">
        <nuxt-link
          class="button is-outlined is-large is-info caption-text"
          to="/speaker">
          Become Speaker
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SpeakerList',
  props: {
    items: {
      type: Array,
      default: () => []
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
