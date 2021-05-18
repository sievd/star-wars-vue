<template>
  <div>
    <div>Starships page</div>
    <div v-if="!loading">
      <input type="search" v-model="search" />
      <div>
        <div 
          v-for="starship in filteredStarships" 
          :key="JSON.stringify(starship)"
          @click="onStarshipClicked(starship)"
        > 
          {{ starship.name }}
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
  name: "StarshipsPage",
  components: {
    Pagination,
  },
  data() {
    return {
      count: 0,
      starships: null,
      maxItems: [],
      currentPage: 0,
      loading: true,
      search: "",
    }
  },
  computed: {
    filteredStarships: function() {
      return this.starships.filter(
        starship => starship.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    async setup() {
      const response = await api.getStarships(1);
      this.starships = response.results;
      this.currentPage = 1;
      this.maxItems = response.results.length
      this.count = response.count;
      this.loading = false;
    },
    async getStarships(page) {
      this.loading = true;
      const response = await api.getStarships(page);
      this.starships = response.results;
      this.loading = false;
    },
    async onPageNumberClicked(n) {
      await this.getStarships(n);
      this.currentPage = n;
    },
    onStarshipClicked(starship) {
      const starshipId = starship.url.match(/\/(\d+)\//)[1];
      this.$router.push(`starships/${starshipId}`);
    }
  },
  async created() {
    await this.setup();
  },
}
</script>

<style scoped>
</style>