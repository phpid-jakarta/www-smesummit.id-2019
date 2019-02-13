<template>
  <section
    id="benefit"
    class="section benefit">
    <h2 class="title has-text-centered title-section caption-text">
      WHY YOU SHOULD ATTEND THIS SUMMIT?
    </h2>
    <div class="has-text-centered">
      <div class="level">
        <div
          v-for="(benefit, index) in items"
          :key="'benefits-' + index"
          class="level-item">
          <!-- IDEA -->
          <img
            v-lazyload
            src="/images/placeholder.png"
            :data-src="benefit.logo"
            data-err="/images/placeholder.png"
            :alt="benefit.title ">
          <div class="item__text">
            <h4>{{ benefit.title }}</h4>
            <p class="is-size-6">
              {{ benefit.text }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'BenefitList',
  props: {
    items: {
      type: Array,
      default: () => []
    }
  }
}
</script>

<style lang="scss" scoped>
.benefit{
  .level{
    align-items: flex-start;
  }
  .level-item{
    display: block;
    padding: 1em .5em;

    // on desktop
    @media screen and (min-width: 768px) {
      max-width: 200px;
    }

    // on mobile
    @media screen and (max-width: 768px) {
      width: 100%;
    }

    img{
      width: 200px;
    }
  }
}

.item__text{
  h4{
    font-size: 1.5rem;
    color: #2779d6;
    font-family: 'PT Sans Caption', sans-serif;
    text-transform: uppercase;
  }

  p{
    color: #827f7f;
  }
}
</style>
