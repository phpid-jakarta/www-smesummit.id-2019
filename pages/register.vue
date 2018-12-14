<template>
  <div class="container">
    <section
      id="reg-attendants"
      class="section reg-attendants">
      <h2 class="title has-text-centered title-section caption-text">
        REGISTER FOR ATTENDANTS
      </h2>
      <form class="form">
        <!-- TOKEN -start -->
        <input
          :value="_token"
          class="hidden">

        <div class="field">
          <label class="label">Name</label>
          <div class="control">
            <input
              v-model="formData.name"
              class="input"
              type="text"
              placeholder="Your Name" >
          </div>
        </div>

        <div class="field">
          <label class="label">Company Name</label>
          <div class="control">
            <input
              v-model="formData.company_name"
              class="input"
              type="text"
              placeholder="Your Company Name" >
          </div>
        </div>

        <div class="field">
          <label class="label">Company Sector</label>
          <div class="control">
            <input
              v-model="formData.company_sector"
              class="input"
              type="text"
              placeholder="Your Company Sector" >
          </div>
        </div>

        <div class="field">
          <label class="label">Your Role/Position</label>
          <div class="control">
            <input
              v-model="formData.position"
              class="input"
              type="text"
              placeholder="Ex: IT, Owner, etc" >
          </div>
        </div>

        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input
              v-model="formData.email"
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
              v-model="formData.phone"
              class="input"
              type="text"
              placeholder="Ex: 0812-123-456-789-00 or @your.telegram"
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Which Sector Do You Want To Get Coached? </label>
          <div class="control">
            <div class="select">
              <select v-model="formData.coached_sector">
                <option
                  value=""
                  disabled>Select dropdown</option>
                <option>Technology</option>
                <option>Digital Marketing</option>
                <option>Human Capital</option>
                <option>Financials</option>
                <option>Regulations</option>
                <option>Others</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Your Current Problem/Case</label>
          <div class="control">
            <textarea
              v-model="formData.problem_desc"
              class="textarea"
              placeholder="Ex: we already implemented IT in our company but still confused about its scalability"
            />
          </div>
        </div>

        <div class="field">
          <div>
            <img
              v-if="!loading && _captchaImage !== ''"
              :src="_captchaImage"
              alt="_captcha">
          </div>
          <div>
            <div
              :class="{'is-loading': loading}"
              class="button is-link"
              @click="refreshCaptcha">
              Refresh Captcha
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">Input Captcha</label>
          <div class="control">
            <input
              v-model="formData.captcha_input"
              class="input"
              type="text"
            >
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <div
              :disabled="loading"
              class="button is-link"
              @click="doSubmit">
              Submit
            </div>
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
import { API_ENDPOINT } from '../constant/index'

export default {
  name: 'RegisterParticipants',
  data () {
    return {
      loading: false,
      url_api: `${API_ENDPOINT.REGISTER_PARTICIPANT}`,
      formData: {
        name: '',
        company_name: '',
        position: '',
        company_sector: '',
        coached_sector: '',
        email: '',
        phone: '',
        problem_desc: '',
        captcha_input: ''
      }
    }
  },
  computed: {
    _token () {
      return this.$store.state.token
    },
    _captchaImage () {
      return this.$store.state.captcha
    }
  },
  mounted () {
    this.requestToken()
  },
  methods: {
    requestToken () {
      this.loading = true
      this.$store.dispatch('fetchNewToken', {
        url: this.url_api,
        success: () => {
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      })
    },
    refreshCaptcha () {
      this.requestToken()
    },
    doSubmit () {
      this.loading = true
      const dataForSubmit = Object.assign({}, this.formData, { _token: this._token })
      this.$store.dispatch('postRegisterParticipant', {
        token: this._token,
        data: dataForSubmit,
        success: () => {
          setTimeout(() => {
            this.loading = false
          }, 1000)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
