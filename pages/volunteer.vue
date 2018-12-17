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
          <label class="label">
            Name
          </label>
          <div class="control">
            <input
              v-model="formData.name"
              class="input"
              type="text"
              placeholder="Your Name">
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
              placeholder="Ex: example@mail.com">
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
              placeholder="Ex: 0812-123-456-789-00, @your.telegram">
          </div>
        </div>

        <div class="field">
          <label class="label">
            Tell Us why you interest to help
          </label>
          <div class="control">
            <textarea
              v-model="formData.why_you_apply_desc"
              class="textarea"
              placeholder="Ex: I always like to helping community in organizing an event" />
          </div>
        </div>

        <div class="field is-grouped">
          <div class="control">
            <button class="button is-link">
              Submit
            </button>
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
    </section>
  </div>
</template>

<script>
import { API_ENDPOINT } from '../constant/index'
import { __isNotEmptyString } from '../utils/index'

export default {
  name: 'RegisterCoacher',
  data () {
    return {
      loadingToken: false,
      loadingSubmit: false,
      url_api: `${API_ENDPOINT.REGISTER_VOLUNTEER}`,
      isHaveError: false,
      formData: {
        name: '',
        email: '',
        phone: '',
        why_you_apply_desc: '',
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
      __isNotEmptyString(this.formData.email) &&
      __isNotEmptyString(this.formData.phone) &&
      __isNotEmptyString(this.formData.why_you_apply_desc) &&
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
        this.$store.dispatch('postRegisterVolunteer', {
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
