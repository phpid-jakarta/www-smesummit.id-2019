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
          <span
            v-show="!isValidFormEmail"
            class="help is-danger">
            Your email is not valid. <br> {{ getErrorMinMax(4, 255) }}
          </span>
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
          <span
            v-show="!isValidFormPhone"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </span>
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
          <span
            v-show="!isValidPaymentType"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </span>
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
          <span
            v-show="!isValidTotalPayment"
            class="help is-danger">
            {{ getErrorMinMax(1, 20) }}
          </span>
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
          <span
            v-show="!isValidBankName"
            class="help is-danger">
            {{ getErrorMinMax(1, 255) }}
          </span>
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
          <span
            v-show="!isValidBankUsername"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </span>
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
          <span
            v-show="!isValidDateTransfer"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </span>
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
          <span
            v-show="!isValidNoReference"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </span>
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
          <span class="help">
            Before you uploading screenshoot, please compress your image via <a
              href="https://tinyjpg.com/"
              target="_blank"
              rel="noopener">
              https://tinyjpg.com/
            </a>
          </span>
          <div
            v-if="isValidScreenshoot && formData.screenshoot !== ''"
            class="preview"
            style="margin-top: 1em;">
            <label class="label">
              Preview Screenshoot
            </label>
            <img
              :src="formData.screenshoot"
              style="width: 300px;">
          </div>
          <span
            v-show="!isValidScreenshoot"
            class="help is-danger">
            Please attach your transfer receipt
          </span>
        </div>

        <div class="field">
          <label class="label">
            Additional Notes
          </label>
          <div class="control">
            <textarea
              v-model="formData.notes"
              class="textarea"
              placeholder="Ex: I pay for bundled price with email: abc@gmai.com, cde@gmail.com, fgh@gmail.com" />
          </div>
        </div>
        <span class="help">
          If you pay for bundling ticket, please let Us know all the emails.
        </span>

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
          <span
            v-show="!isValidFormCaptcha"
            class="help is-danger">
            {{ getErrorMinMax(6, 10) }}
          </span>
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
        class="notification is-info"
        style="margin-top: 1em;">
        <span>After you submit payment confirmation, our admin will check the data as soon as possible.</span>
        <br>
        Please be patient, we will inform you via email after your submission already checked and approved by our admin.
      </div>

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
import { isRequired, isRequiredWithMinMax, isEmail } from '../utils/validation'
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
      url_api: `${API_ENDPOINT.PAYMENT_CONFIRMATION}`,
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
      this.isValidTotalPayment = isRequiredWithMinMax(3, 255, this.formData.total_payment)
      this.isValidPaymentType = isRequiredWithMinMax(3, 255, this.formData.payment_type)
      this.isValidDateTransfer = isRequiredWithMinMax(3, 255, this.formData.date_transfer)
      this.isValidNoReference = isRequiredWithMinMax(3, 255, this.formData.no_ref)
      this.isValidBankName = isRequiredWithMinMax(1, 255, this.formData.bank_name)
      this.isValidBankUsername = isRequiredWithMinMax(3, 255, this.formData.bank_username)
      this.isValidScreenshoot = isRequired(this.formData.screenshoot)
      this.isValidFormCaptcha = isRequiredWithMinMax(5, 10, this.formData.captcha)

      if (this.isValidFormEmail &&
      this.isValidFormPhone &&
      this.isValidTotalPayment &&
      this.isValidPaymentType &&
      this.isValidDateTransfer &&
      this.isValidNoReference &&
      this.isValidBankName &&
      this.isValidBankUsername &&
      this.isValidScreenshoot &&
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
      this.error = ''
      this.isHaveError = false
      if (this.checkFormValidation()) {
        this.loadingSubmit = true
        const dataForSubmit = Object.assign({}, this.formData) // eslint-disable-line no-unused-vars
        this.$store.dispatch('postPaymentConfirmation', {
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
