<template>
  <div class="container">
    <section
      id="reg-volunteer"
      class="section reg-volunteer">
      <h2 class="title has-text-centered title-section caption-text">
        REGISTER FOR VOLUNTEERS
      </h2>

      <form class="form">
        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Your Name" >
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Ex: example@mail.com"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Phone/WA/Telegram</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Ex: 0812-123-456-789-00, @your.telegram"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Tell Us why you interest to help</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Ex: I always like to helping community in organizing an event"
            />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">Submit</button>
          </div>
          <div class="control">
            <a
              class="button is-text"
              href="/">Cancel</a>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

</style>
