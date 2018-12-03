<template>
  <div class="container">
    <section
      id="reg-sponsor"
      class="section reg-sponsor">
      <h2 class="title has-text-centered title-section caption-text">
        REGISTER FOR SPONSORSHIP
      </h2>

      <form class="form">
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
          <label class="label">Company Logo URL</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Your Company Logo URL"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Your Company Bussiness Sector</label>
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
          <label class="label">PIC Email</label>
          <div class="control">
            <input
              class="input"
              type="email"
              placeholder="Ex: example@mail.com"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">PIC Phone/WA/Telegram</label>
          <div class="control">
            <input
              class="input"
              type="text"
              placeholder="Ex: 0812-123-456-789-00, @your.telegram"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Sponsorship Grade</label>
          <div class="control">
            <div class="select">
              <select>
                <option
                  value=""
                  disabled>Select dropdown</option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Silver</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label
            class="label"
          >Tell Us Why You Interest to Give Sponsorship</label
          >
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Ex: we like helping others to run bussiness"
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
