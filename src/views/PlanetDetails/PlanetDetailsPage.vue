<template>
  <div>
    <div v-if="!loading">
      <div>{{ planet.name }}</div>
      <div v-for="key in Object.keys(planet)" :key="key">
        {{ planet[key] }}
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "PlanetDetails",
  data() {
    return {
      planet: null,
      loading: true,
    };
  },
  methods: {
    async getPlanet() {
      const id = this.$route.params.id;
      this.planet = await api.getPlanetById(id);
      this.loading = false;
    }
  },
  async created() {
    await this.getPlanet();
  },
}
</script>

<style scoped>
</style>
