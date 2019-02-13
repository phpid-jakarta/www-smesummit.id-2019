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
              :class="{'is-danger': !isValidFormName}"
              type="text"
              placeholder="Your Name"
              required>
          </div>
          <p
            v-show="!isValidFormName"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

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
              placeholder="Your Company Name"
              required>
          </div>
          <p
            v-show="!isValidFormCompanyName"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Company Sector
          </label>
          <div class="control">
            <div class="select">
              <select
                v-model="formData.company_sector"
                required>
                <option
                  value=""
                  disabled>
                  Select available company sector
                </option>
                <option
                  v-for="item in companySectorList"
                  :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <p
            v-show="!isValidFormCompanySector"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Your Role/Position
          </label>
          <div class="control">
            <div class="select">
              <select
                v-model="formData.position"
                required>
                <option
                  value=""
                  disabled>
                  Select available position
                </option>
                <option
                  v-for="item in positionList"
                  :key="item">
                  {{ item }}
                </option>
              </select>
            </div>
          </div>
          <p
            v-show="!isValidFormPosition"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
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
            Which Sector Do You Want To Get Coached?
          </label>
          <div class="control">
            <div class="select">
              <select v-model="formData.coached_sector">
                <option
                  value=""
                  disabled>
                  Select available coacher clinic
                </option>
                <option
                  v-for="item in coacherSectorList"
                  :key="item">
                  {{ item }}
                </option>
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
              :class="{'is-danger': !isValidFormProblemDesc}"
              placeholder="Ex: we already implemented IT in our company but still confused about its data analysis"
              required />
          </div><p
            v-show="!isValidFormProblemDesc"
            class="help is-danger">
            {{ getErrorMinMax(20, 1024) }}
          </p>
        </div>

        <label class="label">
          Voucher / Promo Code
        </label>
        <div class="field is-grouped">
          <div class="control">
            <input
              v-model="voucherCode"
              class="input"
              :class="{'is-danger': (!isValidFormVoucher && voucherCodeError !== ''), 'is-success': isValidFormVoucher}"
              type="text"
              placeholder="Ex: QWERTY"
              required>
          </div>
          <div class="control">
            <a
              :disabled="voucherLoading"
              :class="{'is-loading': voucherLoading}"
              class="button is-link"
              @click="doRedeemVoucher">
              Apply Voucher
            </a>
          </div>
        </div>
        <p
          v-if="isValidFormVoucher"
          class="help is-success">
          <b>Congratulation!</b> your voucher <b>{{ formData.voucher }}</b> already redeemed.
          <br>
          Normal Price: <b>{{ voucherCodeResponse.before_discount }}</b>
          <br>
          After Promo Price: <b>{{ voucherCodeResponse.after_discount }}</b>
          <br><br>
        </p>
        <p
          v-show="!isValidFormVoucher && voucherCodeError !== ''"
          class="help is-danger">
          Voucher code is not valid
        </p>

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
      <br><br><br>
      <TicketSection />
      <br><br><br>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

import TicketSection from '../components/TicketSection'

import { API_ENDPOINT } from '../constant/index'
import { isRequiredWithMinMax, isEmail } from '../utils/validation'
import PageMixin from '../mixins/page-mixin'

const defaultVoucherRes = {
  before_discount: 0,
  after_discount: 0,
  description: ''
}

export default {
  name: 'RegisterParticipants',
  layout: 'no-hero',
  head () {
    return {
      title: 'Register for Participants | SME Summit 2019'
    }
  },
  components: {
    TicketSection
  },
  mixins: [
    PageMixin
  ],
  data () {
    return {
      url_api: `${API_ENDPOINT.REGISTER_PARTICIPANT}`,
      voucherCode: '',
      voucherCodeError: '',
      voucherCodeResponse: defaultVoucherRes,
      voucherLoading: false,
      voucherAlreadyRedeem: false,
      formData: {
        name: '',
        company_name: '',
        position: '',
        company_sector: '',
        coached_sector: '',
        email: '',
        phone: '',
        problem_desc: '',
        voucher: '',
        captcha: ''
      },
      isValidFormName: true,
      isValidFormCompanyName: true,
      isValidFormPosition: true,
      isValidFormCompanySector: true,
      isValidFormEmail: true,
      isValidFormPhone: true,
      isValidFormProblemDesc: true,
      isValidFormVoucher: false,
      isValidFormCaptcha: true,
      isValidForm: false,
      positionList: [],
      companySectorList: [],
      coacherSectorList: []
    }
  },
  created () {
    this.fetchStaticData()
  },
  methods: {
    fetchStaticData () {
      axios({
        url: '/coacher_sector.json',
        method: 'get'
      }).then(response => {
        this.coacherSectorList = response.data.data
      })

      axios({
        url: '/company_sector.json',
        method: 'get'
      }).then(response => {
        this.companySectorList = response.data.data
      })

      axios({
        url: '/position.json',
        method: 'get'
      }).then(response => {
        this.positionList = response.data.data
      })
    },
    checkFormValidation () {
      this.isValidFormName = isRequiredWithMinMax(3, 255, this.formData.name)
      this.isValidFormCompanyName = isRequiredWithMinMax(3, 255, this.formData.company_name)
      this.isValidFormPosition = isRequiredWithMinMax(3, 255, this.formData.position)
      this.isValidFormCompanySector = isRequiredWithMinMax(3, 255, this.formData.company_sector)
      this.isValidFormEmail = isRequiredWithMinMax(3, 255, this.formData.email) && isEmail(this.formData.email)
      this.isValidFormPhone = isRequiredWithMinMax(3, 255, this.formData.phone)
      this.isValidFormProblemDesc = isRequiredWithMinMax(20, 1024, this.formData.problem_desc)
      this.isValidFormCaptcha = isRequiredWithMinMax(5, 10, this.formData.captcha)

      if (this.isValidFormName &&
      this.isValidFormCompanyName &&
      this.isValidFormPosition &&
      this.isValidFormCompanySector &&
      this.isValidFormEmail &&
      this.isValidFormPhone &&
      this.isValidFormProblemDesc &&
      this.isValidFormCaptcha) {
        return true
      }
      return false
    },
    doSubmit () {
      this.error = ''
      this.isHaveError = false
      if (this.checkFormValidation()) {
        this.loadingSubmit = true
        const dataForSubmit = Object.assign({}, this.formData)
        this.$store.dispatch('postRegisterParticipant', {
          token: this._token,
          data: dataForSubmit,
          success: this.onSuccessSubmit,
          failed: this.onErrorSubmit
        })
      } else this.isHaveError = true
    },
    doRedeemVoucher () {
      this.formData.voucher = ''
      this.voucherCodeResponse = defaultVoucherRes
      this.isValidFormVoucher = false
      this.voucherAlreadyRedeem = false
      if (!this.voucherLoading) {
        this.voucherLoading = true
        this.$store.dispatch('postRedeemVoucher', {
          token: this._token,
          data: {
            voucher: this.voucherCode
          },
          success: (res) => {
            if (res.data.status === 'success') {
              console.info(`Congratulation! your voucher ${this.voucherCode} already redemmed.`, res.data.data)
              this.voucherCodeError = ''
              this.voucherCodeResponse = res.data.data
              this.formData.voucher = this.voucherCode
              this.isValidFormVoucher = true
              this.voucherAlreadyRedeem = true
            }
            setTimeout(() => {
              this.voucherLoading = false
            }, 1000)
          },
          failed: (message) => {
            this.voucherCodeResponse = defaultVoucherRes
            this.voucherCodeError = message
            this.formData.voucher = ''
            this.isValidFormVoucher = false
            this.voucherAlreadyRedeem = true
            setTimeout(() => {
              this.voucherLoading = false
            }, 1000)
          }
        })

      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
