<template>
  <div>
    <b-card
      class="mt-3"
      title="Add a new Employee"
      sub-title="Fill in the form to register the new employee."
      header=" "
      footer=" "
    >
      <b-card-text />
      <b-form v-if="show" @submit="onSubmit" @reset="onReset">
        <b-form-group id="input-group-1" label="Name" label-for="input-1">
          <b-form-input
            id="input-1"
            v-model="form.name"
            required
            placeholder="Please provide the name of the employee"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-2" label="Surname" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.surname"
            required
            placeholder="Please provide the surname of the employee"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-3" label="Email:" label-for="input-3">
          <b-form-input
            id="input-3"
            v-model="form.email"
            type="email"
            required
            placeholder="Optionally provide email address"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-4" label="Phone" label-for="input-4">
          <b-form-input
            id="input-4"
            v-model="form.phone"
            required
            type="tel"
            placeholder="Optionally provide phone number"
          ></b-form-input>
        </b-form-group>

        <b-form-group id="input-group-5" label="Address" label-for="input-5">
          <b-form-input
            id="input-5"
            v-model="form.address"
            placeholder="Optionally provide contact address"
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
        surname: '',
        email: '',
        phone: '',
        address: '',
      },
      show: true,
    }
  },
  methods: {
    async onSubmit(evt) {
      evt.preventDefault()
      await this.$axios
        .post('http://localhost:8000/api/Employees', {
          Name: this.form.name,
          Surname: this.form.surname,
          Email: this.form.email,
          Phone: this.form.phone,
          Address: this.form.address,
        })
        .then((response) => {
          const path = `/Employees/${response.data.employeeId}`
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
      this.form.surname = ''
      this.form.email = ''
      this.form.phone = ''
      this.form.address = ''
      this.show = false
      this.$nextTick(() => {
        this.show = true
      })
    },
  },
}
</script>
