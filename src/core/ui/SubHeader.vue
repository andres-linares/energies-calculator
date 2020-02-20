<template>
  <div class="subheader mt-3">
    <button size="sm" squared variant="outline-primary" @click="goBack" class="subheader__button">
      <b-icon-arrow-left/>Volver
    </button>
    <h2 class="subheader__title">{{ title }}</h2>
  </div>
</template>

<script>
export default {
  name: 'SubHeader',
  props: {
    title: String
  },
  methods: {
    goBack: function() {
      this.$router.push("/");
    }
  }
}
</script>

<style scoped lang="scss">
  .subheader {
    .subheader__button {
      border: 1px solid var(--primary);
      background-color: transparent;
      padding: .25rem .7rem;
      font-size: 1rem;
      border-radius: 8px;
      float: left;
    }

    .subheader__title {
      text-transform: uppercase;
    }
  }
</style>
