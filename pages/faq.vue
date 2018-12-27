<template>
  <div class="container">
    <section
      id="faq"
      class="section faq">
      <h2 class="title has-text-centered title-section caption-text">
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </h2>

      <h3
        id="faq-general"
        class="subtitle title-section caption-text">
        GENERAL
      </h3>

      <article
        v-for="(faq, index) in faqList.general"
        :key="'faq-general' + index"
        class="message is-info">
        <div class="message-header">
          <p>{{ faq.question }}</p>
        </div>
        <div
          class="message-body">
          <div v-html="faq.answer" />
        </div>
      </article>

      <h3
        id="faq-attendant"
        class="subtitle title-section caption-text">
        ATTENDANT
      </h3>

      <article
        v-for="(faq, index) in faqList.attendants"
        :key="'faq-attendant' + index"
        class="message is-info">
        <div class="message-header">
          <p>{{ faq.question }}</p>
        </div>
        <div
          class="message-body">
          <div v-html="faq.answer" />
        </div>
      </article>

      <h3
        id="faq-coaching-clinic"
        class="subtitle title-section caption-text">
        COACHING CLINIC
      </h3>

      <article
        v-for="(faq, index) in faqList.coaching"
        :key="'faq-coaching' + index"
        class="message is-info">
        <div class="message-header">
          <p>{{ faq.question }}</p>
        </div>
        <div
          class="message-body">
          <div v-html="faq.answer" />
        </div>
      </article>

      <h3
        id="faq-sponsor"
        class="subtitle title-section caption-text">
        SPONSOR
      </h3>

      <article
        v-for="(faq, index) in faqList.sponsor"
        :key="'faq-sponsor' + index"
        class="message is-info">
        <div class="message-header">
          <p>{{ faq.question }}</p>
        </div>
        <div
          class="message-body">
          <div v-html="faq.answer" />
        </div>
      </article>

      <h3
        id="faq-speaker"
        class="subtitle title-section caption-text">
        SPEAKER
      </h3>

      <article
        v-for="(faq, index) in faqList.speaker"
        :key="'faq-speaker' + index"
        class="message is-info">
        <div class="message-header">
          <p>{{ faq.question }}</p>
        </div>
        <div
          class="message-body">
          <div v-html="faq.answer" />
        </div>
      </article>

      <h3
        id="faq-volunteer"
        class="subtitle title-section caption-text">
        VOLUNTEER
      </h3>

      <article
        v-for="(faq, index) in faqList.volunteer"
        :key="'faq-volunteer' + index"
        class="message is-info">
        <div class="message-header">
          <p>{{ faq.question }}</p>
        </div>
        <div
          class="message-body">
          <div v-html="faq.answer" />
        </div>
      </article>
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FaqPage',
  data () {
    return {
      faqList: {
        general: [],
        attendants: [],
        coaching: [],
        sponsor: [],
        speaker: [],
        volunteer: []
      }
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios({
        url: '/faq.json',
        method: 'get'
      }).then(response => {
        this.faqList = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>
h3.subtitle{
  padding-top: 2em;
}
</style>

<style lang="scss">
.message-body{
  a {
    color: #209cee !important;
  }
}
.faq{
  /deep/ ul li {
    list-style-type: disc;
    margin-left: 1em;
  }
}
</style>
