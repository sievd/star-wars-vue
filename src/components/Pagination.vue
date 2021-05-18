<template>
  <div>
    <span v-for="n in numPages" 
      :key="n" 
      :class="[n === currentPage? 'active': '', 'page']"
      @click="onPageNumberClicked(n)"
    >
      {{ n }}
    </span>
  </div>
</template>

<script>
export default {
  name: "Pagination",
  props: {
    numPages: {type: Number, required: true},
    currentPage: {type: Number, required: true},
  },
  methods: {
    onPageNumberClicked(n) {
      this.$emit("page-clicked", n);
    }
  }
}
</script>

<style>
.active {
  color: red;
}

.page {
  cursor: pointer;
}
</style>