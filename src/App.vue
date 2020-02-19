<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div class="d-flex mt-4 justify-content-center flex-wrap">
      <b-card title="Paneles" img-src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/1200px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg" class="m-2" style="width: 20rem">
        <b-card-text class="text-left">
          Calcula el area de un panel de energía.
        </b-card-text>
      </b-card>

      <b-card title="Demandas" img-src="https://alternativeenergy24.com/wp-content/uploads/2019/09/enery-1.jpg" class="m-2" style="width: 20rem">
        <b-card-text class="text-left">
          Calcula la demanda electrica de una casa.
        </b-card-text>
      </b-card>

      <b-card title="Cables" img-src="https://upload.wikimedia.org/wikipedia/commons/c/ca/500kV_3-Phase_Transmission_Lines.png" class="m-2" style="width: 20rem">
        <b-card-text class="text-left">
          Calcula el area de la sección transversal de un cable.
        </b-card-text>
      </b-card>
    </div>
  </div>
</template>

<script>
import NavigationBar from './components/NavigationBar.vue'

export default {
  name: 'App',
  components: {
    NavigationBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.card-img {
  height: 15rem;
  object-fit: cover;
}
</style>
