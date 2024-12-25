<template>
  <div class="app">
    <AppHeader class="app__header" />
    <div class="app__main">
      <AppPanel />
      <AppMain />
    </div>
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppPanel from "./components/AppPanel.vue";
export default {
  components: {
    AppHeader,
    AppPanel,
    AppMain,
  },
};
</script>
<style scoped>
.app {
  display: grid;
  gap: 24px;
  padding-inline: 16px;
}

.app__main {
  grid-template-columns: 280px 1fr;
  gap: 24px;
  display: grid;
  max-width: 1720px;
  margin-inline: auto;
}
</style>
