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
          <label class="label">
            Company Name
          </label>
          <div class="control">
            <input
              v-model="formData.company_name"
              class="input"
              type="text"
              placeholder="Your Company Name">
          </div>
        </div>

        <div class="field">
          <label class="label">
            Company Public Logo URL
          </label>
          <div class="control">
            <input
              v-model="formData.company_logo"
              class="input"
              type="text"
              placeholder="Your Company Public Logo URL">
          </div>
        </div>

        <div class="field">
          <label class="label">
            Your Company Bussiness Sector
          </label>
          <div class="control">
            <input
              v-model="formData.company_sector"
              class="input"
              type="text"
              placeholder="Your Company Bussiness Sector">
          </div>
        </div>

        <div class="field">
          <label class="label">
            PIC Email
          </label>
          <div class="control">
            <input
              v-model="formData.email_pic"
              class="input"
              type="email"
              placeholder="Ex: example@mail.com">
          </div>
        </div>

        <div class="field">
          <label class="label">
            PIC Phone/WA/Telegram
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
            Sponsorship Grade
          </label>
          <div class="control">
            <div class="select">
              <select
                v-model="formData.sponsor_type">
                <option
                  value=""
                  disabled>
                  Select dropdown
                </option>
                <option>Platinum</option>
                <option>Gold</option>
                <option>Silver</option>
              </select>
            </div>
          </div>
        </div>

        <div class="field">
          <label
            class="label">
            Tell Us Why You Interest to Give Sponsorship
          </label>
          <div class="control">
            <textarea
              class="textarea"
              placeholder="Ex: we like helping others to run bussiness" />
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
  name: 'RegisterSponsor',
  data () {
    return {
      loadingToken: false,
      loadingSubmit: false,
      url_api: `${API_ENDPOINT.REGISTER_SPONSOR}`,
      isHaveError: false,
      formData: {
        company_name: '',
        company_logo: '',
        company_sector: '',
        email_pic: '',
        phone: '',
        sponsor_type: '',
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
      __isNotEmptyString(this.formData.company_sector) &&
      __isNotEmptyString(this.formData.company_logo) &&
      __isNotEmptyString(this.formData.email_pic) &&
      __isNotEmptyString(this.formData.phone) &&
      __isNotEmptyString(this.formData.sponsor_type) &&
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
        this.$store.dispatch('postRegisterSponsor', {
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
