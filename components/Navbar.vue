<template>
  <b-navbar type="dark" variant="success" class="mb-3">
    <b-navbar-brand>SCHEDULER</b-navbar-brand>
    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item tag="nuxt-link" to="/" exact>Home</b-nav-item>
        <b-nav-item-dropdown text="Employees">
          <b-dropdown-item tag="nuxt-link" to="/employees"
            >Overview</b-dropdown-item
          >
          <b-dropdown-item tag="nuxt-link" to="/employees/create"
            >New Employee</b-dropdown-item
          >
        </b-nav-item-dropdown>
        <b-nav-item-dropdown text="Skills">
          <b-dropdown-item tag="nuxt-link" to="/skills"
            >Overview</b-dropdown-item
          >
          <b-dropdown-item tag="nuxt-link" to="/skills/create"
            >New Skill</b-dropdown-item
          ></b-nav-item-dropdown
        >
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<style scoped>
.logosm {
  width: 10;
}
</style>
