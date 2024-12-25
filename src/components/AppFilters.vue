<template>
  <div class="app-filters">
    <div class="app-filters-header">
      <div class="app-filters-header__name">
        {{ filter.name }}
      </div>
      <button class="app-filters-header__btn-clean">{{ filter.clean }}</button>
    </div>
    <div v-if="filter.isSearchable" class="app-filters__search">
      <img
        class="app-filters__search--img"
        :src="require(`/src/images/mini-search.svg`)"
      />
      <input
        class="app-filters__search--search"
        type="text"
        placeholder="Поиск"
      />
    </div>
    <ul class="app-filters__attributes">
      <li
        v-for="attribute in filter.attributes"
        :key="attribute.name"
        class="app-filters__attribute"
      >
        <AppCheckbox>
          <div class="app-filters__attribute-element">
            <div class="app-filters__attribute-element--name">
              {{ attribute.name }}
            </div>
            <div class="app-filters__attribute-element--count">
              {{ attribute.count }}
            </div>
          </div>
        </AppCheckbox>
      </li>
    </ul>
  </div>
</template>
<script>
import AppCheckbox from "./AppCheckbox.vue";

export default {
  components: { AppCheckbox },
  props: ["filter"],
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:wght@400;700&family=Roboto:wght@700&display=swap");

.app-filters {
  display: grid;
  font-family: "PT Sans", serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  gap: 16px;
  padding-top: 28px;
}

.app-filters-header {
  display: grid;
  grid-template-columns: 1fr auto;
}

.app-filters-header__name {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.app-filters-header__btn-clean {
  border: none;
  background-color: #fff;
  color: #aaaaaa;
  cursor: pointer;
  text-decoration: underline;
  font-weight: 400;
  font-size: 12px;
  line-height: 12px;
}

.app-filters__attributes {
  padding: 0;
  margin: 0;
  display: grid;
  gap: 12px;
}
.app-filters__attribute {
  display: grid;
}

.app-filters__attribute-element {
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
}

.app-filters__attribute-element--name {
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 12px;
}

.app-filters__search {
  display: flex;
  align-items: center;
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  gap: 8px;
  padding: 10px 12px;
}

.app-filters__search--search {
  padding: 0;
  border: none;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  outline: none;
}

.app-filters__attribute-element--count {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #aaaaaa;
}
</style>
