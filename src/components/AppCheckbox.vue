<template>
  <label class="app-checkbox">
    <input class="app-checkbox__input" type="checkbox" />
    <slot />
  </label>
</template>
<style scoped>
.app-checkbox {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
}

.app-checkbox__input {
  appearance: none;
  position: relative;
  width: 20px;
  height: 20px;
  background: transparent;
  border-radius: 3px;
  border: none;
  box-shadow: inset 0 0 0 1px #d5d5d5;
  transition: 500ms;
}

.app-checkbox__input:checked {
  box-shadow: none;
  background: #7397f5;
}

.app-checkbox__input::before {
  content: "";
  position: absolute;
  transform: scale(0);
  width: 20px;
  height: 20px;
  font-size: 20px;
  background-image: url("/src/images/checked.svg");
  background-position: center;
  background-repeat: no-repeat;
  transition: 500ms;
}

.app-checkbox__input:checked::before {
  transform: scale(1);
  transition: 500ms;
}
</style>
