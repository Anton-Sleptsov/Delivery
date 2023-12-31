<template>
  <header class="header">
    <div class="container">
      <div class="header-inner">
        <router-link to="/" class="header-logo logo">
          <img src="../assets/images/logo.svg" alt="logo" />
        </router-link>
        <div class="header-buttons">
          <button class="button-enter btn btn--blue">
            <img class="img-person" src="../assets/images/header/person.svg" alt="" />
            <span>Войти</span>
          </button>
          <button class="button-cart btn btn--white" @click="openModal()">
            <img src="../assets/images/header/shopping-cart.svg" alt="" />
            <span>Корзина</span>
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
  const emit = defineEmits(["toggleModal"]);
  const openModal = () => emit("toggleModal");
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  min-height: 106px;
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
}

.img-person {
  width: 16px;
  height: 16px;
}

.header-buttons {
  display: flex;
  gap: 8px;
  align-items: center;
  justify-content: flex-end;
}
</style>