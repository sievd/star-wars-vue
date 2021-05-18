<template>
  <div>
    <div v-if="!loading">
      <div>{{ starship.name }}</div>
      <div v-for="key in Object.keys(starship)" :key="key">
        {{ starship[key] }}
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "StarshipDetails",
  data() {
    return {
      starship: null,
      loading: true,
    };
  },
  methods: {
    async getStarship() {
      const id = this.$route.params.id;
      this.starship = await api.getStarshipById(id);
      this.loading = false;
    }
  },
  async created() {
    await this.getStarship();
  },
}
</script>

<style scoped>
</style>
