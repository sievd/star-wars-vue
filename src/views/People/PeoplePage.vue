<template>
  <div>
    <div>People page</div>
    <div v-if="!loading">
      <input type="search" v-model="search" />
      <div>
        <div 
          v-for="person in filteredPeople" 
          :key="JSON.stringify(person)"
          @click="onPersonClicked(person)"
        > 
          {{ person.name }}
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
  name: "People",
  components: {
    Pagination,
  },
  data() {
    return {
      count: 0,
      people: null,
      maxItems: [],
      currentPage: 0,
      loading: true,
      search: "",
    }
  },
  computed: {
    filteredPeople: function() {
      return this.people.filter(
        person => person.name.toLowerCase().includes(this.search.toLowerCase())
      );
    }
  },
  methods: {
    async setup() {
      const response = await api.getPeople(1);
      this.people = response.results;
      this.currentPage = 1;
      this.maxItems = response.results.length
      this.count = response.count;
      this.loading = false;
    },
    async getPeople(page) {
      this.loading = true;
      const response = await api.getPeople(page);
      this.people = response.results;
      this.loading = false;
    },
    async onPageNumberClicked(n) {
      await this.getPeople(n);
      this.currentPage = n;
    },
    onPersonClicked(person) {
      const personId = person.url.match(/\/(\d+)\//)[1];
      this.$router.push(`people/${personId}`);
    }
  },
  async created() {
    await this.setup();
  },
}
</script>

<style scoped>
</style>