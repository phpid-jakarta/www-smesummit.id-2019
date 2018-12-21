<template>
  <div class="container">
    <section
      id="organizer"
      class="section organizer">
      <h2 class="title has-text-centered title-section caption-text">
        ORGANIZERS
      </h2>
      <table class="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Position</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(organizer, index) in organizerList"
            :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ organizer.position }}</td>
            <td>{{ organizer.name }}</td>
            <td>{{ organizer.email }}</td>
          </tr>
        </tbody>
      </table>
      <div />
    </section>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'OrganizerPage',
  data () {
    return {
      organizerList: []
    }
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      axios({
        url: '/organizers.json',
        method: 'get'
      }).then(response => {
        this.organizerList = response.data.data
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
