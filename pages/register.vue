<template>
  <div class="container">
    <section
      id="reg-attendants"
      class="section reg-attendants">
      <h2 class="title has-text-centered title-section caption-text">
        REGISTER FOR ATTENDANTS
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
          <label class="label">Company Name</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Your Company Name" >
          </div>
        </div>

        <div class="field">
          <label class="label">Your Role/Position</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Ex: IT, Owner, etc" >
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
          <label class="label">Which Sector Do You Want To Get Coached? </label>
          <div class="control">
            <div class="select">
              <select>
                <option
                  value=""
                  disabled>Select dropdown</option>
                <option>Technology</option>
                <option>Digital Marketing</option>
                <option>Human Capital</option>
                <option>Financials</option>
                <option>Regulations</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Your Current Problem/Case</label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Ex: we already implemented IT in our company but still confused about its scalability"
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
