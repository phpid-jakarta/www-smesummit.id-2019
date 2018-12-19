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
              :class="{'is-danger': !isValidFormName}"
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
              :class="{'is-danger': !isValidFormEmail}"
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
              :class="{'is-danger': !isValidFormPhone}"
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
              :class="{'is-danger': !isValidFormWhyApply}"
              placeholder="Ex: I always like to helping community in organizing an event" />
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
              :class="{'is-danger': !isValidFormCaptcha}"
              type="text">
          </div>
          <p
            v-show="!isValidFormTopic"
            class="help is-danger">
            {{ getErrorMinMax(6, 10) }}
          </p>
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
import { isRequiredWithMinMax, isEmail } from '../utils/validation'
import PageMixin from './page-mixin'

export default {
  name: 'RegisterCoacher',
  mixins: [
    PageMixin
  ],
  data () {
    return {
      url_api: `${API_ENDPOINT.REGISTER_VOLUNTEER}`,
      formData: {
        name: '',
        email: '',
        phone: '',
        why_you_apply_desc: '',
        captcha: ''
      },
      isValidFormName: true,
      isValidFormEmail: true,
      isValidFormPhone: true,
      isValidFormWhyApply: true,
      isValidFormCaptcha: true,
      isValidForm: false
    }
  },
  methods: {
    checkFormValidation () {
      this.isValidFormName = isRequiredWithMinMax(3, 255, this.formData.name)
      this.isValidFormEmail = isRequiredWithMinMax(3, 255, this.formData.email) && isEmail(this.formData.email)
      this.isValidFormPhone = isRequiredWithMinMax(3, 255, this.formData.phone)
      this.isValidFormWhyApply = isRequiredWithMinMax(3, 255, this.formData.why_you_apply_desc)
      this.isValidFormCaptcha = isRequiredWithMinMax(5, 10, this.formData.captcha)

      if (this.isValidFormName &&
      this.isValidFormEmail &&
      this.isValidFormPhone &&
      this.isValidFormWhyApply &&
      this.isValidFormCaptcha) {
        return true
      }
      return false
    },
    doSubmit () {
      if (this.checkFormValidation()) {
        this.loadingSubmit = true
        this.isHaveError = false
        const dataForSubmit = Object.assign({}, this.formData)
        this.$store.dispatch('postRegisterVolunteer', {
          token: this._token,
          data: dataForSubmit,
          success: this.onSuccessSubmit,
          failed: this.onErrorSubmit
        })
      } else this.isHaveError = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
