<template>
  <div>
    <div v-if="!loading">
      <div>{{ person.name }}</div>
      <div v-for="key in Object.keys(person)" :key="key">
        {{ person[key] }}
      </div>
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import api from "@/services/api";

export default {
  name: "PersonDetails",
  data() {
    return {
      person: null,
      loading: true,
    };
  },
  methods: {
    async getPerson() {
      const id = this.$route.params.id;
      this.person = await api.getPersonById(id);
      this.loading = false;
    }
  },
  async created() {
    await this.getPerson();
  },
}
</script>

<style scoped>
</style>
