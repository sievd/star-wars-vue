<template>
  <div>
    <div>Planets page</div>
    <div v-if="!loading">
      <input type="search" v-model="search" />
      <div>
        <div 
          v-for="planet in filteredPlanets" 
          :key="JSON.stringify(planet)"
          @click="onPlanetClicked(planet)"
        > 
          {{ planet.name }}
        </div>
      </div>
      <Pagination 
        :numPages="Math.ceil(count/maxItems)"
        :currentPage="currentPage"
        @page-clicked="onPageNumberClicked"
      ></Pagination>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import api from "@/services/api";
import Pagination from "@/components/Pagination.vue";

export default {
  name: "PlanetsPage",
  components: {
    Pagination,
  },
  data() {
    return {
      count: 0,
      planets: null,
      maxItems: [],
      currentPage: 0,
      loading: true,
      search: "",
    }
  },
  computed: {
    filteredPlanets: function() {
      return this.planets.filter(
        planet => planet.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    async setup() {
      const response = await api.getPlanets(1);
      this.planets = response.results;
      this.currentPage = 1;
      this.maxItems = response.results.length
      this.count = response.count;
      this.loading = false;
    },
    async getPlanets(page) {
      this.loading = true;
      const response = await api.getPlanets(page);
      this.planets = response.results;
      this.loading = false;
    },
    async onPageNumberClicked(n) {
      await this.getPlanets(n);
      this.currentPage = n;
    },
    onPlanetClicked(person) {
      const planetId = person.url.match(/\/(\d+)\//)[1];
      this.$router.push(`planets/${planetId}`);
    }
  },
  async created() {
    await this.setup();
  },
}
</script>

<style scoped>
</style>