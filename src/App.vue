<template>
  <header>
    <div class="d-flex container align-items-center align-items-center w-100 px-4">
      <img
        class="d-none d-md-block mx-auto w-75"
        src="../../public/images/logo-design-patterns-desktop.svg"
      />
      <img
        class="w-50 d-xs-block d-md-none mx-auto"
        src="../../public/images/logo-design-patterns-mobile.svg"
      />
    </div>
  </header>

  <body class="mb-5">
    <Home></Home>
  </body>

  <footer
    class="text-center text-lg-start p-3 m-0"
    style="background-color: #e7f6dd; color: #203e0c"
  >
    <div class="text-center">
      Este projeto foi desenvolvido em
      <img
        src="../public/images/logo-vue.png"
        rel="Vue.js"
        href="https://vuejs.org/"
        height="20px"
        class="pe-1 cursor-pointer"
      />
      e
      <img
        src="../public/images/logo-bootstrap.png"
        rel="Bootstrap"
        href="https://getbootstrap.com/"
        height="20px"
        class="ps-1 cursor-pointer"
      />, com o intuito de explicar o Design Patterns.
    </div>
    <div class="text-center p-3">
      © 2026 - Copyright:
      <a class="fw-bold" style="color: #203e0c" href="https://github.com/armandolustosa">Armando</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
import Home from '@/components/home.vue'
</script>

<style scoped></style>
