<template>
  <header class="app-header">
    <div class="app-header-container">
      <div class="app-header__logo-container">
        <div class="app-header__logo-container--logo">
          <img
            :src="require(`/src/images/logo.svg`)"
            class="app-header__logo-container--logo-img"
          />
          <div class="app-header__logo-container--logo-name">Логотип</div>
        </div>
        <button class="app-header__logo-container--btn-katalog">Каталог</button>
      </div>
      <div class="app-header__search">
        <img
          :src="require(`/src/images/search.svg`)"
          class="app-header__search--img"
        />
        <input
          type="text"
          placeholder="Поиск по 100 000 товаров "
          class="app-header__search--search"
        />
      </div>
      <div class="app-header__info">
        <div>Информация о компании</div>
        <div>Контакты</div>
        <div>Полезные ссылки</div>
      </div>
    </div>
  </header>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Merriweather:wght@400;700&family=Roboto:wght@700&display=swap");

.app-header-container {
  max-width: 1720px;
  margin-inline: auto;
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 24px;
  font-family: "Inter", serif;
}

.app-header__logo-container {
  display: flex;
  align-items: center;
  gap: 8px;
}
.app-header__logo-container--logo {
  display: flex;
  gap: 8px;
}
.app-header__logo-container--logo-img {
  max-width: 18px;
  max-height: 18px;
}
.app-header__logo-container--logo-name {
  min-width: 65px;
  max-height: 19px;
  font-weight: 400;
  font-size: 16px;
  line-height: 19.36px;
}

.app-header__logo-container--btn-katalog {
  font-weight: 500;
  font-size: 14px;
  line-height: 16.94px;
  padding: 15.5px;
  padding-inline: 24px;
  border: 1px solid #73aff4;
  border-radius: 8px;
  transition: background-color 0.25s;
  cursor: pointer;
  background-color: #fff;
}
.app-header__logo-container--btn-katalog:hover {
  background-color: #7397f5;
  color: white;
}

.app-header__search {
  display: flex;
  align-items: center;
  border: 1px solid #73aff4;
  border-radius: 10px;
  gap: 8px;
  padding: 12px 16px;
}

.app-header__search--search {
  padding: 0;
  border: none;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  outline: none;
}

.app-header__info {
  display: flex;
  gap: 20px;
  font-weight: 400;
  font-size: 14px;
  line-height: 16.94px;
}

@media (max-width: 768px) {
  .app-header__info {
    gap: 14px;
    overflow: auto;
  }
}

@media (max-width: 375px) {
  .app-header__logo-container,
  .app-header__info {
    display: none;
  }

  .app-header-container {
    gap: 0;
  }
}
</style>
