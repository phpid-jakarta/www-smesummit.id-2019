<template>
  <div class="container">
    <section
      id="tickets"
      class="section tickets">
      <h2 class="title has-text-centered title-section caption-text">
        TICKETS
      </h2>

      <TicketSection />

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-large is-danger caption-text"
            href="/register">
            Register Here
          </a>
        </div>
      </div>

      <br><br><br>
      <PaymentSection />

      <div class="level btn-call">
        <div class="level-item">
          <a
            class="button is-large is-danger caption-text"
            href="/payment-confirmation">
            Confirm Your Payment Here
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import TicketSection from '../components/TicketSection'
import PaymentSection from '../components/PaymentSection'

export default {
  name: 'TicketPrice',
  layout: 'no-hero',
  head () {
    return {
      title: 'Ticket Price | SME Summit 2019'
    }
  },
  components: {
    TicketSection,
    PaymentSection
  },
  data () {
    return {
    }
  }
}
</script>
