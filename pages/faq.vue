<template>
  <div class="container">
    <section
      id="faq"
      class="section faq">
      <h2 class="title has-text-centered title-section caption-text">
        FREQUENTLY ASKED QUESTIONS (FAQ)
      </h2>
      <article
        v-for="(faq, index) in faqList"
        :key="index"
        class="message is-info">
        <div class="message-header">
          <p>Question: {{ faq.question }}</p>
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
      faqList: []
    }
  },
  mounted () {
    this.fetchFAQ()
  },
  methods: {
    fetchFAQ () {
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

</style>
