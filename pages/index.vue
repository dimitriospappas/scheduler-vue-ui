<template>
  <div>
    <b-row><Logo /></b-row>
    <b-row
      ><b-col><h1 class="title">Welcome, Scheduler</h1></b-col></b-row
    >
    <b-row
      ><b-col
        ><h1 class="subtitle">What would you like to do today?</h1></b-col
      ></b-row
    >
    <b-row
      ><b-col /><b-col sm="auto">
        <b-button
          tag="nuxt-link"
          to="/employees"
          variant="outline-success"
          size="lg"
          class="m-2"
          >Manage Employees</b-button
        >
        <b-button
          tag="nuxt-link"
          to="/skills"
          variant="outline-success"
          size="lg"
          class="m-2"
          >Manage Skills</b-button
        ></b-col
      ><b-col />
    </b-row>
  </div>
</template>

<script>
export default {}
</script>

<style>
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 80px;
  text-align: center;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 50px;
  color: #526488;
  text-align: center;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.button {
  font-size: 20px;
  text-align: center;
}
</style>
