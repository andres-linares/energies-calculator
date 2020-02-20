<template>
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
</template>

<script>
import HomeTile from "./HomeTile.vue";

export default {
  name: "Home",
  components: {
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

<style>
.card-img {
  height: 15rem;
  object-fit: cover;
}
</style>
