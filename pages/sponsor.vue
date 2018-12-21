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
              :class="{'is-danger': !isValidFormCompanyName}"
              type="text"
              placeholder="Your Company Name">
          </div>
          <p
            v-show="!isValidFormCompanyName"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Company Public Logo URL
          </label>
          <div class="control">
            <input
              v-model="formData.company_logo"
              class="input"
              :class="{'is-danger': !isValidFormCompanyLogo}"
              type="text"
              placeholder="Your Company Public Logo URL">
          </div>
          <p
            v-show="!isValidFormCompanyLogo"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Your Company Bussiness Sector
          </label>
          <div class="control">
            <input
              v-model="formData.company_sector"
              class="input"
              :class="{'is-danger': !isValidFormCompanySector}"
              type="text"
              placeholder="Your Company Bussiness Sector">
          </div>
          <p
            v-show="!isValidFormCompanySector"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            PIC Email
          </label>
          <div class="control">
            <input
              v-model="formData.email_pic"
              class="input"
              :class="{'is-danger': !isValidFormEmailPic}"
              type="email"
              placeholder="Ex: example@mail.com">
          </div>
          <p
            v-show="!isValidFormEmailPic"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            PIC Phone/WA/Telegram
          </label>
          <div class="control">
            <input
              v-model="formData.phone"
              class="input"
              :class="{'is-danger': !isValidFormPhone}"
              type="text"
              placeholder="Ex: 0812-123-456-789-00, @your.telegram">
          </div>
          <p
            v-show="!isValidFormPhone"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
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
                <option value="platinum">
                  Platinum
                </option>
                <option value="gold">
                  Gold
                </option>
                <option value="silver">
                  Silver
                </option>
              </select>
            </div>
          </div>
          <p
            v-show="formData.sponsor_type === 'gold'"
            class="help">

          </p>
          <p
            v-show="formData.sponsor_type === 'silver'"
            class="help">

          </p>
          <p
            v-show="!isValidFormSponsorType"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
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
          </div><p
            v-show="!isValidFormCaptcha"
            class="help is-danger">
            {{ getErrorMinMax(6, 10) }}
          </p>
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
import { isRequiredWithMinMax, isEmail } from '../utils/validation'
import PageMixin from './page-mixin'

export default {
  name: 'RegisterSponsor',
  mixins: [
    PageMixin
  ],
  data () {
    return {
      url_api: `${API_ENDPOINT.REGISTER_SPONSOR}`,
      formData: {
        company_name: '',
        company_logo: '',
        company_sector: '',
        email_pic: '',
        phone: '',
        sponsor_type: '',
        captcha: ''
      },
      isValidFormCompanyName: true,
      isValidFormCompanyLogo: true,
      isValidFormCompanySector: true,
      isValidFormEmailPic: true,
      isValidFormPhone: true,
      isValidFormSponsorType: true,
      isValidFormCaptcha: true,
      isValidForm: false
    }
  },
  methods: {
    checkFormValidation () {
      this.isValidFormCompanyName = isRequiredWithMinMax(3, 255, this.formData.company_name)
      this.isValidFormCompanyLogo = isRequiredWithMinMax(3, 255, this.formData.company_logo)
      this.isValidFormCompanySector = isRequiredWithMinMax(3, 255, this.formData.company_sector)
      this.isValidFormEmailPic = isRequiredWithMinMax(3, 255, this.formData.email_pic) && isEmail(this.formData.email_pic)
      this.isValidFormPhone = isRequiredWithMinMax(3, 255, this.formData.phone)
      this.isValidFormSponsorType = isRequiredWithMinMax(3, 255, this.formData.sponsor_type)
      this.isValidFormCaptcha = isRequiredWithMinMax(5, 10, this.formData.captcha)

      if (this.isValidFormCompanyName &&
      this.isValidFormCompanyLogo &&
      this.isValidFormCompanySector &&
      this.isValidFormEmailPic &&
      this.isValidFormPhone &&
      this.isValidFormSponsorType &&
      this.isValidFormCaptcha) {
        return true
      }
      return false
    },
    doSubmit () {
      if (this.checkFormValidation()) {
        this.error = ''
        this.loadingSubmit = true
        this.isHaveError = false
        const dataForSubmit = Object.assign({}, this.formData)
        this.$store.dispatch('postRegisterSponsor', {
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
