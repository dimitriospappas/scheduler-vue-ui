<template>
  <div>
    <b-table
      id="employees"
      hover
      responsive
      caption-top
      :items="employees"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      :primary-key="employees.employeeId"
      ><template v-slot:table-caption>Found these employees:</template>
      <template v-slot:cell(surname)="data">
        {{ data.value }}
      </template>
      <template v-slot:cell(name)="data">
        {{ data.value }}
      </template>
      <template v-slot:cell(hireDate)="data">
        {{ new Date(data.value).toDateString() }}
      </template>
      <template v-slot:cell(employeeId)="data">
        <b-button-group>
          <b-button
            v-b-tooltip.hover
            title="Inspect Employee"
            variant="outline-primary"
            tag="nuxt-link"
            :to="`/employees/${data.value}`"
          >
            <b-icon icon="file-earmark-person-fill"></b-icon>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Edit Details"
            tag="nuxt-link"
            :to="`/employees/edit/${data.value}`"
            variant="outline-info"
          >
            <b-icon icon="pencil-square"></b-icon>
          </b-button>
          <b-button
            :id="data.value"
            v-b-popover.hover.top="'Deleting this item cannot be undone!'"
            title="WARNING"
            variant="outline-danger"
            @click="deleteEmployee"
          >
            <b-icon icon="person-x-fill"></b-icon>
          </b-button>
        </b-button-group>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      pills
      aria-controls="employees"
    ></b-pagination>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  async asyncData({ $axios, route }) {
    const headers = {
      Accept: 'application/json',
    }
    return await $axios
      .get(
        'http://localhost:8000/api/Employees/search',
        { params: { by: route.query.by, q: route.query.q } },
        headers
      )
      .catch((e) => {
        // should do something about it
      })
      .then((response) => {
        return {
          perPage: 5,
          currentPage: 1,
          fields: [
            { key: 'surname', sortable: true },
            { key: 'name', sortable: true },
            { key: 'hireDate', label: 'Hire Date', sortable: true },
            { key: 'employeeId', label: '', sortable: false },
          ],
          employees: response.data,
        }
      })
  },
  data() {
    return {
      query: {
        option: '',
        value: '',
      },
    }
  },
  computed: {
    rows() {
      return this.employees.length
    },
  },
  methods: {
    async deleteEmployee(evt) {
      const employeeId = evt.currentTarget.id
      await this.$axios
        .delete(`http://localhost:8000/api/Employees/${employeeId}`)
        .then((response) => {
          this.$router.go()
        })
        .catch((e) => {
          // do something about it
        })
    },
  },
}
</script>
