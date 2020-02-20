<template>
  <div id="app">
    <navigation-bar></navigation-bar>
    <div class="d-flex mt-4 justify-content-center flex-wrap">
      <home-tile
        v-for="tile in tiles"
        v-bind:key="tile.title"
        :title="tile.title"
        :imgUrl="tile.imgUrl"
        :route="tile.route"
        :body="tile.body"
      />
    </div>
  </div>
</template>

<script>
import NavigationBar from "./components/NavigationBar.vue";
import HomeTile from "./components/HomeTile.vue";

export default {
  name: "App",
  components: {
    NavigationBar,
    HomeTile
  },
  data: function() {
    return {
      tiles: [
        {
          title: "Paneles",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg/1200px-Photovoltaik_Dachanlage_Hannover_-_Schwarze_Heide_-_1_MW.jpg",
          route: "",
          body: "Calcula el área de un panel de energía."
        },
        {
          title: "Demandas",
          imgUrl:
            "https://alternativeenergy24.com/wp-content/uploads/2019/09/enery-1.jpg",
          route: "",
          body: "Calcula la demanda eléctrica de una casa."
        },
        {
          title: "Cables",
          imgUrl:
            "https://upload.wikimedia.org/wikipedia/commons/c/ca/500kV_3-Phase_Transmission_Lines.png",
          route: "",
          body: "Calcula el área de la sección transversal de un cable."
        }
      ]
    };
  }
};
</script>

<style lang="scss">
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
