<template>
  <div class="product-card">
    <div class="product-card__header">
      <img
        :src="require(`/src/images/skeleton-img.svg`)"
        style="opacity: 40%"
      />
      <div class="product-card__header--sale">{{ card.sale }}</div>
      <div class="product-card__header-type">
        <div class="product-card__header-type--type">{{ card.type }}</div>
        <img
          class="product-card__header-type--img"
          :src="require(`/src/images/fire.svg`)"
        />
      </div>
    </div>
    <div class="product-card__description">
      <div class="product-card__main">
        <div class="product-card__main--brand-name">{{ card.brandName }}</div>
        <div class="product-card__main--name">
          {{ card.name }}
        </div>
      </div>
      <div
        class="product-card__price"
        :class="{ 'product-card__price--no-visible': !card.isAvaliable }"
      >
        <div class="product-card__price-new">{{ card.price.new }}</div>
        <div class="product-card__price-old">{{ card.price.old }}</div>
      </div>
      <button v-if="card.isAvaliable" class="product-card__buy">Купить</button>
      <button v-else class="product-card__notify">
        Сообщить о поступлении
      </button>
    </div>
  </div>
</template>
<script>
export default {
  props: ["card"],
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:wght@400;700&family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&family=Roboto:wght@700&display=swap");
.product-card {
  display: grid;
  gap: 16px;
  grid-template-rows: 200px auto;
  font-family: "PT Sans", serif;
}

.product-card__header {
  position: relative;
  display: grid;
  background-color: #f8f8fa;
  place-content: center;
}

.product-card__description {
  display: grid;
  gap: 16px;
}

.product-card__header--img {
  max-width: 100%;
}

.product-card__header--sale {
  position: absolute;
  inset: auto auto 12px 12px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  padding: 6px 10px;
  background-color: #7397f5;
  color: #fff;
  border-radius: 4px;
}

.product-card__header-type {
  display: flex;
  align-items: center;
  gap: 4px;
  position: absolute;
  inset: 12px auto auto 12px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  padding: 8px;
  padding-right: auto;
  background-color: #ffffff;
  border: 1px solid #f2f2f2;
  border-radius: 4px;
}

.product-card__main {
  display: grid;
  gap: 8px;
}
.product-card__main--brand-name,
.product-card__main--name {
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
}
.product-card__main--brand-name {
  color: #aaaaaa;
}
.product-card__main--name {
  color: #333333;
}

.product-card__price {
  display: flex;
  gap: 8px;
}
.product-card__price-new {
  font-weight: 700;
  font-size: 16px;
  line-height: 14px;
}
.product-card__price-old {
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  text-decoration: line-through;
  color: #aaaaaa;
}

.product-card__buy {
  justify-self: start;
}

.product-card__notify {
  color: #aaaaaa;
  border: 1px solid #aaaaaa;
}
.product-card__notify:hover {
  color: #fff;
  background-color: #aaaaaa;
}

button {
  background-color: #fff;
  border: 1px solid #7397f5;
  border-radius: 4px;
  font-weight: 700;
  font-size: 14px;
  line-height: 14px;
  color: #7397f5;
  padding: 12px 16px;
  transition: background-color 0.25s;
  cursor: pointer;
}
button:hover {
  background-color: #7397f5;
  color: white;
}

.product-card__price--no-visible {
  visibility: hidden;
}
</style>
