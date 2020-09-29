<template>
  <div>
    <b-card-group deck>
      <b-card
        header=" "
        footer=" "
        :title="employee.surname"
        :sub-title="employee.name"
      >
        <b-card-text></b-card-text
        ><b-card-text
          ><b>Phone:</b>
          <a :href="`tel:${employee.phone}`">{{
            employee.phone
          }}</a></b-card-text
        >
        <b-card-text
          ><b>Email:</b>
          <a :href="`mailto:${employee.email}`">{{
            employee.email
          }}</a></b-card-text
        >
        <b-card-text><b>Address:</b> {{ employee.address }} </b-card-text>
        <b-card-text
          ><b>Hired:</b>
          {{ new Date(employee.hireDate).toDateString() }}</b-card-text
        ><b-card-text />
        <b-card-text
          ><b>Updated:</b>
          {{ new Date(employee.lastModified).toDateString() }}</b-card-text
        ><b-card-text />
        <b-button-group class="float-right">
          <b-button
            tag="nuxt-link"
            :to="`/employees/edit/${employee.employeeId}`"
            variant="info"
            >Update</b-button
          >
          <b-button
            v-b-popover.hover.bottom="'Deleting this item cannot be undone!'"
            title="WARNING"
            variant="danger"
            @click="deleteEmployee"
            >Delete</b-button
          >
        </b-button-group>
      </b-card>
      <b-card header=" " footer=" " title="Skills">
        <b-card-text />
        <b-list-group-item
          v-for="sa in employee.skillAssignments"
          :key="sa.skillAssignmentId"
          ><a :href="`/skills/${sa.skill.skillId}`">{{ sa.skill.name }}</a
          >, <em>assigned</em> {{ new Date(sa.assignmentDate).toDateString()
          }}<b-button
            :id="sa.skillAssignmentId"
            v-b-popover.hover.right="'Deleting this item cannot be undone!'"
            class="float-right"
            title="WARNING"
            variant="outline-danger"
            size="sm"
            pill
            @click="deleteSkillAssignment"
            ><b-icon icon="x"></b-icon></b-button
        ></b-list-group-item>
      </b-card>
    </b-card-group>
    <b-card header=" " footer=" " class="mt-3" title="Audit Log">
      <b-card-text />
      <b-list-group-item
        v-for="ae in employee.auditEvents"
        :key="ae.auditEventId"
        ><b>{{ ae.eventDescription }}</b
        >, on {{ new Date(ae.eventDate).toDateString() }}</b-list-group-item
      >
    </b-card>
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
    const employee = await $axios.get(
      `http://localhost:8000/api/Employees/${route.params.id}`,
      headers
    )
    return {
      employee: employee.data,
    }
  },
  data() {},
  methods: {
    async deleteEmployee() {
      await this.$axios
        .delete(
          `http://localhost:8000/api/Employees/${this.employee.employeeId}`
        )
        .then((response) => {
          const path = `/employees`
          this.$router.push(path)
        })
        .catch((e) => {
          // do something about it
        })
    },
    async deleteSkillAssignment(evt) {
      const skillAssignmentId = evt.currentTarget.id
      await this.$axios
        .delete(
          `http://localhost:8000/api/SkillAssignments/${skillAssignmentId}`
        )
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
