<template>
  <div>
    <b-button
      class="float-right"
      variant="info"
      tag="nuxt-link"
      to="/skills/create"
      >Add a new Skill</b-button
    >
    <b-table
      id="skills"
      hover
      responsive
      caption-top
      :items="skills"
      :fields="fields"
      :per-page="perPage"
      :current-page="currentPage"
      ><template v-slot:table-caption>Listing all current skills:</template>
      <template v-slot:cell(name)="data">
        {{ data.value }}
      </template>
      <template v-slot:cell(description)="data">
        {{ data.value }}
      </template>
      <template v-slot:cell(creationDate)="data">
        {{ new Date(data.value).toDateString() }}
      </template>
      <template v-slot:cell(skillId)="data">
        <b-button-group>
          <b-button
            v-b-tooltip.hover
            title="Inspect Skill"
            variant="outline-primary"
            tag="nuxt-link"
            :to="`/skills/${data.value}`"
          >
            <b-icon icon="card-checklist"></b-icon>
          </b-button>
          <b-button
            v-b-tooltip.hover
            title="Edit Details"
            tag="nuxt-link"
            :to="`/skills/edit/${data.value}`"
            variant="outline-info"
          >
            <b-icon icon="pencil-square"></b-icon>
          </b-button>
          <b-button
            :id="data.value"
            v-b-popover.hover.top="'Deleting this item cannot be undone!'"
            title="WARNING"
            variant="outline-danger"
            @click="deleteSkill"
          >
            <b-icon icon="journal-x"></b-icon>
          </b-button>
        </b-button-group>
      </template>
    </b-table>
    <b-pagination
      v-model="currentPage"
      :total-rows="rows"
      :per-page="perPage"
      pills
      aria-controls="skills"
    ></b-pagination>
  </div>
</template>

<script>
import Vue from 'vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

export default {
  async asyncData({ $axios }) {
    const headers = {
      Accept: 'application/json',
    }
    return await $axios
      .get('http://localhost:8000/api/Skills', headers)
      .catch((e) => {
        // should do something about it
      })
      .then((response) => {
        return {
          perPage: 5,
          currentPage: 1,
          fields: [
            { key: 'name', sortable: true },
            { key: 'description', sortable: false },
            { key: 'creationDate', label: 'Created', sortable: true },
            { key: 'skillId', label: '', sortable: false },
          ],
          skills: response.data,
        }
      })
  },
  data() {},
  computed: {
    rows() {
      return this.skills.length
    },
  },
  methods: {
    async deleteSkill(evt) {
      const skillId = evt.currentTarget.id
      await this.$axios
        .delete(`http://localhost:8000/api/Skills/${skillId}`)
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
