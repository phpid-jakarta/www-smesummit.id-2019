
export default {
  data () {
    return {
      error: '',
      loadingToken: false,
      loadingSubmit: false,
      isHaveError: false
    }
  },
  computed: {
    _token () {
      return this.$store.state.token
    },
    _captchaImage () {
      return this.$store.state.captcha
    }
  },
  mounted () {
    this.requestToken()
  },
  methods: {
    getErrorMinMax (min, max) {
      return `This field should be at least ${min} character and maximum ${max} character`
    },
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
    onSuccessSubmit (res) {
      if (res.data.data.message === 'register_success') {
        this.$store.dispatch('showNotification', {
          title: 'Thank You',
          message: 'The data was successfully saved in our server.'
        })
        setTimeout(() => {
          this.$router.push('/')
        }, 1000)
      } else {
        this.requestToken()
        this.isHaveError = true
      }
      setTimeout(() => {
        this.loadingSubmit = false
      }, 1000)
    },
    onErrorSubmit (message) {
      this.requestToken()
      this.error = message
      this.isHaveError = true
      this.loadingSubmit = false
    }
  }
}
