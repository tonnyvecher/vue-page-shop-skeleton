<template>
  <div class="app-categories">
    <div class="app-categories__category">
      <div>
        {{ category.name }}
      </div>
      <div>
        {{ category.count }}
      </div>
    </div>
    <div v-if="category.children" class="app-categories__child">
      <AppCategory
        v-for="child in category.children"
        :category="child"
        :key="child.name"
      />
    </div>
  </div>
</template>
<script>
export default {
  name: "AppCategory",
  props: ["category"],
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:wght@400;700&family=Roboto:wght@700&display=swap");

.app-categories {
  display: grid;
  font-family: "PT Sans", serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  transition: background-color 0.1s;
}
.app-categories__category:hover {
  cursor: pointer;
  background-color: #e2efff;
  border-radius: 5px;
}

.app-categories__category {
  display: grid;
  padding: 7px 8px;
  grid-template-columns: 1fr auto;
}

.app-categories__child {
  padding-left: 24px;
}
</style>
