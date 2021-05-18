<template>
  <div class="back" @click="onGoBackLinkClicked">Go back</div>
</template>

<script>
export default {
  name: "Footer",
  methods: {
    onGoBackLinkClicked() {
      this.$router.go(-1);
    }
  }
}
</script>

<style style="scoped">
.back {
  cursor: pointer;
}
</style>