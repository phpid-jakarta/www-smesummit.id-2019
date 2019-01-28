<template>
  <div class="container">
    <section
      id="reg-speakers"
      class="section reg-speakers">
      <SpeakerList
        :items="speakers"
        :show-button="false" />

      <h2 class="title has-text-centered title-section caption-text">
        REGISTER FOR SPEAKERS
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
            <input
              v-model="formData.sector"
              class="input"
              :class="{'is-danger': !isValidFormCompanySector}"
              type="text"
              placeholder="Your Company Sector"
              required>
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
            <input
              v-model="formData.position"
              class="input"
              :class="{'is-danger': !isValidFormPosition}"
              type="text"
              placeholder="Ex: IT, Owner, etc"
              required>
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
            Public Photo Url
          </label>
          <div class="control">
            <input
              v-model="formData.photo"
              class="input"
              :class="{'is-danger': !isValidFormPhoto}"
              type="text"
              placeholder="Ex: https://avatars2.githubusercontent.com/u/7221389?s=460&v=4"
              required>
          </div>
          <p
            v-show="!isValidFormPhoto"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Latest Education
          </label>
          <div class="control">
            <input
              v-model="formData.last_education"
              class="input"
              :class="{'is-danger': !isValidFormLatestEducation}"
              type="text"
              placeholder="Ex: MBA - Some Institute of Technology"
              required>
          </div>
          <p
            v-show="!isValidFormLatestEducation"
            class="help is-danger">
            {{ getErrorMinMax(4, 255) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Experience
          </label>
          <div class="control">
            <textarea
              v-model="formData.experience"
              class="textarea"
              :class="{'is-danger': !isValidFormExperience}"
              placeholder="Tell us your awesome experience."
              required />
          </div>
          <p
            v-show="!isValidFormExperience"
            class="help is-danger">
            {{ getErrorMinMax(20, 1024) }}
          </p>
        </div>

        <div class="field">
          <label class="label">
            Your Topic
          </label>
          <div class="control">
            <textarea
              v-model="formData.topic"
              class="textarea"
              :class="{'is-danger': !isValidFormTopic}"
              placeholder="Describe your topic"
              required />
          </div>
          <p
            v-show="!isValidFormTopic"
            class="help is-danger">
            {{ getErrorMinMax(10, 1024) }}
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
        <span>More information about speaker, you can contact our PIC</span>
        <br>
        <span>Name: {{ ARGA.name }}</span>
        <br>
        <span>Phone: {{ ARGA.phone }}</span>
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
import SpeakerList from '../components/SpeakerList'
import { SPEAKERS } from '../constant/speaker'
import { API_ENDPOINT } from '../constant/index'
import { ARGA } from '../constant/contact'
import { isRequiredWithMinMax, isEmail } from '../utils/validation'
import PageMixin from '../mixins/page-mixin'

export default {
  name: 'RegisterSpeakers',
  layout: 'no-hero',
  head () {
    return {
      title: 'Register for Speaker | SME Summit 2019'
    }
  },
  components: {
    SpeakerList
  },
  mixins: [
    PageMixin
  ],
  data () {
    return {
      url_api: `${API_ENDPOINT.REGISTER_SPEAKER}`,
      formData: {
        name: '',
        company_name: '',
        position: '',
        sector: '',
        photo: '',
        last_education: '',
        experience: '',
        email: '',
        phone: '',
        topic: '',
        captcha: ''
      },
      isValidFormName: true,
      isValidFormCompanyName: true,
      isValidFormPosition: true,
      isValidFormCompanySector: true,
      isValidFormPhoto: true,
      isValidFormLatestEducation: true,
      isValidFormExperience: true,
      isValidFormEmail: true,
      isValidFormPhone: true,
      isValidFormTopic: true,
      isValidFormCaptcha: true,
      isValidForm: false,
      ARGA,
      speakers: SPEAKERS
    }
  },
  methods: {
    checkFormValidation () {
      this.isValidFormName = isRequiredWithMinMax(3, 255, this.formData.name)
      this.isValidFormCompanyName = isRequiredWithMinMax(3, 255, this.formData.company_name)
      this.isValidFormPosition = isRequiredWithMinMax(3, 255, this.formData.position)
      this.isValidFormCompanySector = isRequiredWithMinMax(3, 255, this.formData.sector)
      this.isValidFormPhoto = isRequiredWithMinMax(3, 255, this.formData.photo)
      this.isValidFormLatestEducation = isRequiredWithMinMax(3, 255, this.formData.last_education)
      this.isValidFormExperience = isRequiredWithMinMax(20, 1024, this.formData.experience)
      this.isValidFormEmail = isRequiredWithMinMax(3, 255, this.formData.email) && isEmail(this.formData.email)
      this.isValidFormPhone = isRequiredWithMinMax(3, 255, this.formData.phone)
      this.isValidFormTopic = isRequiredWithMinMax(3, 255, this.formData.topic)
      this.isValidFormCaptcha = isRequiredWithMinMax(5, 10, this.formData.captcha)

      if (this.isValidFormName &&
      this.isValidFormCompanyName &&
      this.isValidFormPosition &&
      this.isValidFormCompanySector &&
      this.isValidFormPhoto &&
      this.isValidFormLatestEducation &&
      this.isValidFormExperience &&
      this.isValidFormEmail &&
      this.isValidFormPhone &&
      this.isValidFormTopic &&
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
        this.$store.dispatch('postRegisterSpeaker', {
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
