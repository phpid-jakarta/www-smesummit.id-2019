<template>
  <div class="container">
    <section
      class="section has-text-centered">
      <img
        v-lazy="benefitCoacher.logo"
        src="/images/placeholder.png"
        :alt="benefitCoacher.title"
        style="width: 200px;">

      <h2 class="title has-text-centered title-section">
        {{ benefitCoacher.text }}
      </h2>

      <table class="table is-striped is-hoverable is-fullwidth is-hidden-mobile">
        <thead>
          <tr>
            <th>No</th>
            <th>Sector</th>
            <th>Company</th>
            <th>Coacher Name</th>
            <th>Coacher Role</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(coacher, index) in coachers"
            :key="'accpeted-coacher-desktop-' + index">
            <td>{{ index + 1 }}</td>
            <td>{{ coacher.sector }}</td>
            <td>{{ coacher.company }}</td>
            <td>{{ coacher.coacher }}</td>
            <td>{{ coacher.position }}</td>
          </tr>
        </tbody>
      </table>

      <div class="hide-in-desktop">
        <article
          v-for="(coacher, index) in coachers"
          :key="'accpeted-coacher-mobile' + index"
          class="message is-info">
          <div class="message-header">
            <p>Sector: {{ coacher.sector }}</p>
          </div>
          <div
            class="message-body">
            <div class="is-size-5 caption-text">
              {{ coacher.coacher }}
            </div>
            <div>{{ coacher.position }} from {{ coacher.company }}</div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script>
import { COACHERS } from '../constant/coacher'
import { BENEFITS } from '../constant/benefit'
export default {
  name: 'AcceptedCoacher',
  layout: 'no-hero',
  head () {
    return {
      title: 'Awesome Coachers in SME Summit 2019'
    }
  },
  data () {
    return {
      coachers: COACHERS,
      benefitCoacher: BENEFITS[1]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
