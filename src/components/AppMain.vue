<template>
  <main class="main">
    <ProductCard v-for="card in cards" :card="card" :key="card.name" />
  </main>
</template>
<script>
import { cards } from "@/data/cards";
import ProductCard from "./ProductCard.vue";

export default {
  components: { ProductCard },
  data() {
    return {
      cards,
    };
  },
};
</script>
<style scoped>
.main {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

@media (max-width: 768px) {
  .main {
    grid-template-columns: repeat(3, 1fr);
    gap: 12px;
  }
}

@media (max-width: 375px) {
  .main {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }
}
</style>
