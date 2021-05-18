<template>
  <div class="container">
    <router-link to="/people">People</router-link>
    <router-link to="/starships">Starships</router-link>
    <router-link to="/planets">Planets</router-link>
  </div>
</template>

<script>
export default {
  name: "Home",
}
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
