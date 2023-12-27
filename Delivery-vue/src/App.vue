<script setup>
  import Header from './components/Header.vue';
  import Footer from './components/Footer.vue';
  import Modal from './components/Modal.vue';
  import { ref } from 'vue';

  const isOpen = ref(false)
</script>

<template>
  <div class="page-wraper">
    <Header @togglModal="isOpen = !isOpen"/>
    <main class="main">
      <router-view></router-view>
    </main>
    <Modal :isOpen = 'isOpen' @togglModal="isOpen = !isOpen"/>
    <Footer />
  </div>
</template>

<style scoped></style>
