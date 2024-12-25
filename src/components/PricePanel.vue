<template>
  <div class="price-panel">
    <div class="price-panel__title">Цена</div>
    <div class="price-panel-container">
      <label class="price-panel__input-container">
        <div class="price-panel__input-label">от</div>
        <input class="price-panel__input" type="text" />
      </label>
      <div>—</div>
      <label class="price-panel__input-container">
        <div class="price-panel__input-label">до</div>
        <input class="price-panel__input" type="text" />
      </label>
    </div>
  </div>
</template>

<script></script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:wght@400;700&family=Roboto:wght@700&display=swap");

.price-panel {
  display: grid;
  justify-items: center;
  gap: 16px;
  font-family: "PT Sans", serif;
  padding-top: 28px;
}

.price-panel__title {
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
}

.price-panel-container {
  display: flex;
  align-items: center;
  gap: 16px;
}

.price-panel__input-container {
  border: 1px solid #d5d5d5;
  border-radius: 4px;
  padding: 10px 8px;
  display: flex;
  align-items: center;
  gap: 6px;
}

.price-panel__input-label {
  color: #999;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
}

.price-panel__input {
  border: none;
  padding: 0;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
</style>
