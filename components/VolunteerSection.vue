<template>
  <section
    id="volunteers"
    class="section volunteers">
    <h2 class="title has-text-centered title-section caption-text">
      CALL FOR VOLUNTEERS
    </h2>

    <img
      v-lazyload
      src="/images/placeholder.png"
      data-src="/images/banner/volunteer.jpg"
      data-err="/images/placeholder.png"
      class="volunteer_banner"
      alt="Volunteer">

    <div class="level btn-call">
      <div class="level-item">
        <nuxt-link
          class="button is-outlined is-large is-info caption-text"
          to="/volunteer">
          Become Volunteer
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VolunteerSection'
}
</script>
