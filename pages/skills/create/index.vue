<template>
  <div>
    <b-card
      class="mt-3"
      title="Add a new Skill"
      sub-title="Fill in the form to create the new skill."
      header=" "
      footer=" "
    >
      <b-card-text />
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Skill Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Please provide a name for the skill"
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-2"
          label="Skill Description"
          label-for="input-2"
        >
          <b-form-input
            id="input-2"
            v-model="form.description"
            placeholder="Optionally briefly describe this skill"
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
        .post('http://localhost:8000/api/Skills', {
          Name: this.form.name,
          Description: this.form.description,
        })
        .then((response) => {
          const path = `/Skills/${response.data.skillId}`
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
      this.form.name = ''
      this.form.description = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
