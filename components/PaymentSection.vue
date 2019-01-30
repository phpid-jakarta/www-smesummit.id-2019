<template>
  <div>
    <h2 class="title has-text-centered title-section caption-text">
      PAYMENT INFORMATION
    </h2>
    <article
      class="message is-info">
      <div
        class="message-header"
        style="justify-content: center;">
        BANK TRANSFER
      </div>
      <div
        class="message-body">
        <div>Bank: <b>{{ bank.bank_name }}</b></div>
        <div>Account No: <b>{{ bank.bank_account_no }}</b></div>
        <div>Account Name: <b>{{ bank.bank_account_name }}</b></div>
      </div>
    </article>
  </div>
</template>

<script>
import { BANK } from '../constant/bank'

export default {
  name: 'PaymentSection',
  data () {
    return {
      bank: BANK
    }
  }
}
</script>
