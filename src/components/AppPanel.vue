<template>
  <aside>
    <AppCategories
      v-for="category in categories"
      :category="category"
      :key="category.name"
    />

    <PricePanel />

    <AppFilters v-for="filter in filters" :key="filter.name" :filter="filter" />
  </aside>
</template>
<script>
import { categories } from "@/data/categories";
import AppCategories from "./AppCategories.vue";
import PricePanel from "./PricePanel.vue";
import AppFilters from "./AppFilters.vue";
import { filters } from "@/data/filters";

export default {
  components: {
    PricePanel,
    AppCategories,
    AppFilters,
  },
  data() {
    return {
      categories,
      filters,
    };
  },
};
</script>
<style scoped>
@media (max-width: 375px) {
  aside {
    display: none;
  }
}
</style>
