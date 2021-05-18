<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <router-view></router-view>
    <Footer v-if="$route.path != '/'"></Footer>
  </div>
</template>

<script>
import Footer from "@/views/_common/Footer.vue";

export default {
  name: "App",
  components: {
    Footer
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
