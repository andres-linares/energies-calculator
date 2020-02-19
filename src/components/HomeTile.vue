<template>
  <b-card
    :title="title"
    :img-src="imgUrl"
    class="m-4 home-card neumorphic"
    style="width: 20rem"
  >
    <b-card-text class="text-left">{{ body }}</b-card-text>
  </b-card>
</template>

<script>
export default {
    props: [
        'title',
        'imgUrl',
        'route',
        'body'
    ]
};
</script>

<style scoped lang="scss">
.home-card {
    border-radius: .6rem !important;
    border: none !important;

    .card-img {
        border-radius: .6rem .6rem 0 0;
    }
}
</style>