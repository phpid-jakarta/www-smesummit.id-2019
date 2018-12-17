<template>
  <div class="container">
    <section
      id="reg-speakers"
      class="section reg-speakers">
      <h2 class="title has-text-centered title-section caption-text">
        REGISTER FOR SPEAKERS
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
              placeholder="Your Name"
              required >
          </div>
        </div>

        <div class="field">
          <label class="label">Company Name</label>
          <div class="control">
            <input
              v-model="formData.company_name"
              class="input"
              type="text"
              placeholder="Your Company Name"
              required >
          </div>
        </div>

        <div class="field">
          <label class="label">Company Sector</label>
          <div class="control">
            <input
              v-model="formData.company_sector"
              class="input"
              type="text"
              placeholder="Your Company Sector"
              required >
          </div>
        </div>

        <div class="field">
          <label class="label">Your Role/Position</label>
          <div class="control">
            <input
              v-model="formData.position"
              class="input"
              type="text"
              placeholder="Ex: IT, Owner, etc"
              required >
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
              required
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
              required
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Public Photo Url</label>
          <div class="control">
            <input
              v-model="formData.photo"
              class="input"
              type="text"
              placeholder="Ex: https://avatars2.githubusercontent.com/u/7221389?s=460&v=4"
              required
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Latest Education</label>
          <div class="control">
            <input
              v-model="formData.latest_education"
              class="input"
              type="text"
              placeholder="Ex: MBA - Some Institute of Technology"
              required
            >
          </div>
        </div>

        <div class="field">
          <label class="label">Experience</label>
          <div class="control">
            <textarea
              v-model="formData.experience"
              class="textarea"
              placeholder="Tell us your awesome experience."
              required
            />
          </div>
        </div>

        <div class="field">
          <label class="label">Your Topic</label>
          <div class="control">
            <input
              v-model="formData.topic"
              class="input"
              type="text"
              placeholder="Your topics"
              required
            />
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
              href="/">Cancel</a>
          </div>
        </div>
      </form>

      <div
        v-show="isHaveError"
        class="notification is-danger"
        style="margin-top: 1em;">
        Please fill all required fields before submitting data.
      </div>

    </section>
  </div>
</template>

<script>
import { API_ENDPOINT } from '../constant/index'
import { __isNotEmptyString } from '../utils/index'

export default {
  name: 'RegisterSpeakers',
  data () {
    return {
      loadingToken: false,
      loadingSubmit: false,
      url_api: `${API_ENDPOINT.REGISTER_SPEAKER}`,
      isHaveError: false,
      formData: {
        name: '',
        company_name: '',
        position: '',
        company_sector: '',
        photo: '',
        latest_education: '',
        experience: '',
        email: '',
        phone: '',
        topic: '',
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
    },
    isValidForm () {
      if (__isNotEmptyString(this.formData.name) &&
      __isNotEmptyString(this.formData.company_name) &&
      __isNotEmptyString(this.formData.position) &&
      __isNotEmptyString(this.formData.company_sector) &&
      __isNotEmptyString(this.formData.email) &&
      __isNotEmptyString(this.formData.photo) &&
      __isNotEmptyString(this.formData.latest_education) &&
      __isNotEmptyString(this.formData.experience) &&
      __isNotEmptyString(this.formData.phone) &&
      __isNotEmptyString(this.formData.topic) &&
      __isNotEmptyString(this.formData.captcha_input)) {
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
        this.loadingSubmit = true
        this.isHaveError = false
        const dataForSubmit = Object.assign({}, this.formData, { _token: this._token })
        this.$store.dispatch('postRegisterSpeaker', {
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
          }
        })
      } else this.isHaveError = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
