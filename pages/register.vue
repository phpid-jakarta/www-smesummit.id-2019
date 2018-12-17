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
          <label class="label">
            Name
          </label>
          <div class="control">
            <input
              v-model="formData.name"
              class="input"
              type="text"
              placeholder="Your Name"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Company Name
          </label>
          <div class="control">
            <input
              v-model="formData.company_name"
              class="input"
              type="text"
              placeholder="Your Company Name"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Company Sector
          </label>
          <div class="control">
            <input
              v-model="formData.company_sector"
              class="input"
              type="text"
              placeholder="Your Company Sector"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Your Role/Position
          </label>
          <div class="control">
            <input
              v-model="formData.position"
              class="input"
              type="text"
              placeholder="Ex: IT, Owner, etc"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Email
          </label>
          <div class="control">
            <input
              v-model="formData.email"
              class="input"
              type="email"
              placeholder="Ex: example@mail.com"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Phone/WA/Telegram
          </label>
          <div class="control">
            <input
              v-model="formData.phone"
              class="input"
              type="text"
              placeholder="Ex: 0812-123-456-789-00 or @your.telegram"
              required>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Which Sector Do You Want To Get Coached?
          </label>
          <div class="control">
            <div class="select">
              <select v-model="formData.coached_sector">
                <option
                  value=""
                  disabled>
                  Select dropdown
                </option>
                <option>Digital Marketing</option>
                <option>Startup Finance and Tax</option>
                <option>Human Resources Management</option>
                <option>Project Management</option>
                <option>Security Audit</option>
                <option>Cloud Solution</option>
                <option>Startup Regulation</option>
                <option>Skill Development</option>
                <option>Enterprise Resource Planning (ERP)</option>
                <option>Customer Relationship Management (CRM)</option>
                <option>Learning Management System</option>
                <option>Data Analytics</option>
                <option>News Portal</option>
                <option>UI/UX</option>
                <option>Automation Industry</option>
                <option>Hotel</option>
                <option>Hospital & Clilic</option>
                <option>Accounting</option>
                <option>Mobile Application</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Your Current Problem/Case
          </label>
          <div class="control">
            <textarea
              v-model="formData.problem_desc"
              class="textarea"
              placeholder="Ex: we already implemented IT in our company but still confused about its data analysis"
              required />
          </div>
        </div>

        <div class="field">
          <div>
            <img
              v-if="_captchaImage && _captchaImage !== ''"
              :src="_captchaImage"
              style="width: 250px;"
              alt="_captcha">
          </div>
          <div>
            <div
              :disabled="loadingToken"
              :class="{'is-loading': loadingToken}"
              class="button is-link"
              @click="refreshCaptcha">
              Refresh Captcha
            </div>
          </div>
        </div>

        <div class="field">
          <label class="label">
            Input Captcha
          </label>
          <div class="control">
            <input
              v-model="formData.captcha"
              class="input"
              type="text">
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <div
              :disabled="loadingSubmit"
              :class="{'is-loading': loadingSubmit}"
              class="button is-link"
              @click="doSubmit">
              Submit
            </div>
          </div>
          <div class="control">
            <a
              class="button is-text"
              href="/">
              Cancel
            </a>
          </div>
        </div>
      </form>

      <div
        v-show="isHaveError"
        class="notification is-danger"
        style="margin-top: 1em;">
        <span>Please fill all required fields before submitting data.</span>
        <br>
        <span>{{ error }}</span>
      </div>
    </section>
  </div>
</template>

<script>
import { API_ENDPOINT } from '../constant/index'
import { __isNotEmptyString } from '../utils/index'

export default {
  name: 'RegisterParticipants',
  data () {
    return {
      error: '',
      loadingToken: false,
      loadingSubmit: false,
      url_api: `${API_ENDPOINT.REGISTER_PARTICIPANT}`,
      isHaveError: false,
      formData: {
        name: '',
        company_name: '',
        position: '',
        company_sector: '',
        coached_sector: '',
        email: '',
        phone: '',
        problem_desc: '',
        captcha: ''
      }
    }
  },
  computed: {
    _token () {
      return this.$store.state.token
    },
    _captchaImage () {
      return this.$store.state.captcha
    },
    isValidForm () {
      if (__isNotEmptyString(this.formData.name) &&
      __isNotEmptyString(this.formData.company_name) &&
      __isNotEmptyString(this.formData.position) &&
      __isNotEmptyString(this.formData.company_sector) &&
      __isNotEmptyString(this.formData.coached_sector) &&
      __isNotEmptyString(this.formData.email) &&
      __isNotEmptyString(this.formData.phone) &&
      __isNotEmptyString(this.formData.problem_desc) &&
      __isNotEmptyString(this.formData.captcha)) {
        return true
      }
      return false
    }
  },
  mounted () {
    this.requestToken()
  },
  methods: {
    requestToken () {
      this.loadingToken = true
      this.$store.dispatch('fetchNewToken', {
        url: this.url_api,
        success: () => {
          setTimeout(() => {
            this.loadingToken = false
          }, 1000)
        }
      })
    },
    refreshCaptcha () {
      this.requestToken()
    },
    doSubmit () {
      if (this.isValidForm) {
        this.error = ''
        this.loadingSubmit = true
        this.isHaveError = false
        const dataForSubmit = Object.assign({}, this.formData)
        this.$store.dispatch('postRegisterParticipant', {
          token: this._token,
          data: dataForSubmit,
          success: (res) => {
            if (res.data.message === 'register_success') {
              this.$router.push('/')
            } else {
              this.isHaveError = true
            }
            setTimeout(() => {
              this.loadingSubmit = false
            }, 1000)
          },
          failed: (message) => {
            this.error = message
            this.isHaveError = true
            this.loadingSubmit = false
          }
        })
      } else this.isHaveError = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
