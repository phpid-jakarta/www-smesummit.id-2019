<template>
  <section
    id="volunteers"
    class="section volunteers">
    <h2 class="title has-text-centered title-section caption-text">
      CALL FOR VOLUNTEERS
    </h2>

    <img
      v-lazy="'/images/banner/volunteer.jpg'"
      class="volunteer_banner"
      src="/images/placeholder.png"
      alt="Volunteer">

    <div class="level btn-call">
      <div class="level-item">
        <a
          class="button is-outlined is-large is-info caption-text"
          href="/volunteer">
          Become Volunteer
        </a>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VolunteerSection'
}
</script>
