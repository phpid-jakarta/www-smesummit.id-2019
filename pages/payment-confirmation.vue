<template>
  <div class="container">
    <section
      id="payment-confirmation"
      class="section payment-confirmation">
      <h2 class="title has-text-centered title-section caption-text">
        PAYMENT CONFIRMATION
      </h2>
      <form class="form">
        <!-- TOKEN -start -->
        <input
          :value="_token"
          class="hidden">

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
              placeholder="Ex: example@mail.com"
              required>
          </div>
          <p
            v-show="!isValidFormEmail"
            class="help is-danger">
            Your email is not valid. <br> {{ getErrorMinMax(4, 255) }}
          </p>
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
              placeholder="Ex: 0812-123-456-789-00 or @your.telegram"
              required>
          </div>
          <p
            v-show="!isValidFormPhone"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Payment For
          </label>
          <div class="control">
            <div class="select">
              <select
                v-model="formData.payment_type"
                required>
                <option
                  value=""
                  disabled>
                  Payment Type
                </option>
                <option
                  v-for="item in paymentTypes"
                  :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <p
            v-show="!isValidPaymentType"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Total Payment
          </label>
          <div class="control">
            <input
              v-model="formData.total_payment"
              class="input"
              :class="{'is-danger': !isValidTotalPayment}"
              type="text"
              placeholder="Ex: 500000"
              required>
          </div>
          <p
            v-show="!isValidTotalPayment"
            class="help is-danger">
            {{ getErrorMinMax(1, 20) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Bank Name
          </label>
          <div class="control">
            <input
              v-model="formData.bank_name"
              class="input"
              :class="{'is-danger': !isValidBankName}"
              type="text"
              placeholder="Ex: BCA, BRI, MANDIRI, etc"
              required>
          </div>
          <p
            v-show="!isValidBankName"
            class="help is-danger">
            {{ getErrorMinMax(1, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Bank Account Name
          </label>
          <div class="control">
            <input
              v-model="formData.bank_username"
              class="input"
              :class="{'is-danger': !isValidBankUsername}"
              type="text"
              placeholder="Ex: Irfan Maulana"
              required>
          </div>
          <p
            v-show="!isValidBankUsername"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Date Transfer
          </label>
          <div class="control">
            <input
              v-model="formData.date_transfer"
              class="input"
              :class="{'is-danger': !isValidDateTransfer}"
              type="date"
              placeholder="Ex: 2019-02-19"
              required>
          </div>
          <p
            v-show="!isValidDateTransfer"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Reference No
          </label>
          <div class="control">
            <input
              v-model="formData.no_ref"
              class="input"
              :class="{'is-danger': !isValidNoReference}"
              type="text"
              placeholder="Ex: QWERTY-QWERTY-QWERTY-QWERTY-QWERTY"
              required>
          </div>
          <p
            v-show="!isValidNoReference"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Screenshoot Receipt
          </label>
          <div class="control">
            <input
              id="screenshoot"
              ref="screenshoot"
              class="input"
              :class="{'is-danger': !isValidScreenshoot}"
              type="file"
              placeholder="Select your screenshoot file"
              required
              @change="handleFileUpload()">
          </div>
          <div
            v-if="isValidScreenshoot && formData.screenshoot !== ''"
            class="preview">
            <label class="label">
              Preview Screenshoot
            </label>
            <img
              :src="formData.screenshoot"
              style="width: 300px;">
          </div>
          <p
            v-show="!isValidScreenshoot"
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
import PageMixin from '../mixins/page-mixin'

export default {
  name: 'PaymentConfirmation',
  layout: 'no-hero',
  head () {
    return {
      title: 'Payment Confirmation | SME Summit 2019'
    }
  },
  mixins: [
    PageMixin
  ],
  data () {
    return {
      url_api: `${API_ENDPOINT.REGISTER_PARTICIPANT}`,
      paymentTypes: ['participant', 'sponsor', 'coacher'],
      formData: {
        email: '',
        phone: '',
        total_payment: '',
        payment_type: 'participant',
        date_transfer: '',
        no_ref: '',
        bank_name: '',
        bank_username: '',
        screenshoot: '',
        status: 'pending',
        captcha: ''
      },
      isValidFormEmail: true,
      isValidFormPhone: true,
      isValidTotalPayment: true,
      isValidPaymentType: true,
      isValidDateTransfer: true,
      isValidNoReference: true,
      isValidBankName: true,
      isValidBankUsername: true,
      isValidScreenshoot: true,
      isValidFormCaptcha: true,
      isValidForm: false
    }
  },
  methods: {
    checkFormValidation () {
      this.isValidFormEmail = isRequiredWithMinMax(3, 255, this.formData.email) && isEmail(this.formData.email)
      this.isValidFormPhone = isRequiredWithMinMax(3, 255, this.formData.phone)
      this.isValidFormCaptcha = isRequiredWithMinMax(5, 10, this.formData.captcha)

      if (this.isValidFormEmail &&
      this.isValidFormPhone &&
      this.isValidFormCaptcha) {
        return true
      }
      return false
    },
    handleFileUpload () {
      const screenshoot = this.$refs.screenshoot.files[0]
      var reader = new FileReader()
      reader.readAsDataURL(screenshoot)
      reader.onload = () => {
        this.formData.screenshoot = reader.result
      }
      reader.onerror = () => {
        this.formData.screenshoot = ''
      }
    },
    doSubmit () {
      if (this.checkFormValidation()) {
        this.error = ''
        this.loadingSubmit = true
        this.isHaveError = false
        const dataForSubmit = Object.assign({}, this.formData) // eslint-disable-line no-unused-vars
        // this.$store.dispatch('postRegisterParticipant', {
        //   token: this._token,
        //   data: dataForSubmit,
        //   success: this.onSuccessSubmit,
        //   failed: this.onErrorSubmit
        // })
      } else this.isHaveError = true
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
