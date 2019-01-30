<template>
  <div>
    <h2 class="title has-text-centered title-section caption-text">
      TICKETS FOR 1 ATTENDANT
    </h2>
    <div class="level">
      <div
        v-for="(pr, index) in prices.normal"
        :key="'price-normal' + index"
        class="level-item"
        style="margin-right: 1em; margin-bottom: 1em;text-align: center;">
        <article
          class="message is-info"
          style="width: 100%;">
          <div
            class="message-header"
            style="justify-content: center;">
            {{ pr.text }}
          </div>
          <div
            class="message-body"
            style="font-size: 2rem;">
            <div>{{ pr.price }}</div>
          </div>
        </article>
      </div>
    </div>

    <br><br><br>
    <h2 class="title has-text-centered title-section caption-text">
      TICKETS BUNDLING FOR 4 ATTENDANT
    </h2>
    <div class="level">
      <div
        v-for="(pr, index) in prices.bundle"
        :key="'price-normal' + index"
        class="level-item"
        style="margin-right: 1em; margin-bottom: 1em;text-align: center;">
        <article
          class="message is-info"
          style="width: 100%;">
          <div
            class="message-header"
            style="justify-content: center;">
            {{ pr.text }}
          </div>
          <div
            class="message-body"
            style="font-size: 2rem;">
            <div>{{ pr.price }}</div>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script>
import { PRICE } from '../constant/price'

export default {
  name: 'TicketSection',
  data () {
    return {
      prices: PRICE
    }
  }
}
</script>
