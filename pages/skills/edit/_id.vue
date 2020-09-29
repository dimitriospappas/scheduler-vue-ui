<template>
  <div>
    <b-card
      class="mt-3"
      title="Update Skill Details"
      sub-title="Please change only the necessary fields."
      header=" "
      footer=" "
    >
      <b-card-text />
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            :value="form.name"
            required
            placeholder="Update skill name"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-2"
          label="Description"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            required
            :value="form.description"
            placeholder="Update skill description"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="success">Submit</b-button>
        <b-button type="reset" variant="danger">Reset</b-button>
      </b-form>
    </b-card>
  </div>
</template>
<script>
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
      form: {
        name: skill.data.name,
        description: skill.data.description,
      },
    }
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      await this.$axios
        .put(`http://localhost:8000/api/Skills/${this.skill.skillId}`, {
          SkillId: this.skill.skillId,
          Name: this.form.name,
          Description: this.form.description,
          CreationDate: this.skill.creationDate,
        })
        .then((response) => {
          const path = `/Skills/${this.skill.skillId}`
          this.$router.push(path)
        })
        .catch((e) => {
          // do something about it
        })
    },
    onReset(evt) {
      evt.preventDefault()
      this.resetForm()
    },
    resetForm() {
      this.form.name = this.skill.name
      this.form.description = this.skill.description
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
