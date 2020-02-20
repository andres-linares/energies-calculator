<template>
  <b-navbar toggleable="md" type="dark" variant="primary">
    <b-navbar-brand href="#" @click="goTo('/')">Calculador Energías</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item @click="goTo('/paneles/')">Paneles</b-nav-item>
        <b-nav-item @click="goTo('/demanda/')">Demandas</b-nav-item>
        <b-nav-item @click="goTo('/cables/')">Cables</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    goTo: function(route) {
      this.$router.push(route)
    }
  }
};
</script>

<style>
</style>
