<template>
  <b-card-group deck>
    <b-card
      header=" "
      footer=" "
      :title="skill.name"
      :sub-title="skill.description"
    >
      <b-card-text />
      <b-card-text
        ><b>Created:</b>
        {{ new Date(skill.creationDate).toDateString() }}</b-card-text
      >
      <b-card-text
        ><b>Updated:</b>
        {{ new Date(skill.lastModified).toDateString() }}</b-card-text
      >
      <b-card-text />
      <b-button-group class="float-right">
        <b-button
          tag="nuxt-link"
          :to="`/skills/edit/${skill.skillId}`"
          variant="info"
          >Update</b-button
        >
        <b-button
          v-b-popover.hover.bottom="'Deleting this item cannot be undone!'"
          title="WARNING"
          variant="danger"
          @click="deleteSkill"
          >Delete</b-button
        >
      </b-button-group>
    </b-card>
    <b-card header=" " footer=" " title="Skilled Employees">
      <b-card-text />
      <b-list-group-item
        v-for="sa in skill.skillAssignments"
        :key="sa.skillAssignmentId"
        ><a :href="`/employees/${sa.employee.employeeId}`"
          >{{ sa.employee.surname.toUpperCase() }}, {{ sa.employee.name }}</a
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
    const skill = await $axios.get(
      `http://localhost:8000/api/Skills/${route.params.id}`,
      headers
    )
    return {
      skill: skill.data,
    }
  },
  data() {},
  methods: {
    async deleteSkill() {
      await this.$axios
        .delete(`http://localhost:8000/api/Skills/${this.skill.skillId}`)
        .then((response) => {
          const path = `/skills`
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
