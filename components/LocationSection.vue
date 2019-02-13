<template>
  <section
    id="location"
    class="section location">
    <h2 class="title has-text-centered title-section caption-text">
      LOCATION
    </h2>
    <article class="level">
      <figure class="level-item">
        <picture>
          <img
            v-lazyload
            src="/images/placeholder.png"
            data-src="/images/venue/ayana_ballroom_3_300px.jpeg"
            data-err="/images/placeholder.png"
            alt="Ballroom Ayana Hotel Midplaza, Jakarta"
            height="300">
        </picture>
      </figure>
      <div class="level-item">
        <div class="content">
          <p class="is-size-4">
            Ballroom Ayana Hotel Midplaza, Jakarta
          </p>
          <p>
            Jl. Jenderal Sudirman Kav. 10-11 Jakarta Pusat, Jakarta 10220,
            Indonesia
          </p>
          <p>
            <a
              href="https://goo.gl/maps/L9HS9Dn2oWx"
              target="_blank"
              rel="noopener">
              See in Google Maps
            </a>
          </p>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'LocationSection'
}
</script>
