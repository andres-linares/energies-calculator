<template>
  <b-card :title="title" :img-src="imgUrl" class="m-4 home-card neumorphic" @click="move">
    <b-card-text class="text-left">{{ body }}</b-card-text>
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    imgUrl: String,
    route: String,
    body: String
  },
  methods: {
    move: function() {
      this.$router.push(this.route);
    }
  }
};
</script>

<style scoped lang="scss">
.home-card {
  border-radius: 0.6rem !important;
  border: none !important;
  width: 20rem;

  .card-img {
    border-radius: 0.6rem 0.6rem 0 0;
  }
}
</style>
