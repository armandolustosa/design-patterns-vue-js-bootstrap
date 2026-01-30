<template>
  <div class="mt-4">
    <footer class="text-center text-lg-start p-3 m-0">
      <div class="text-center">
        Este projeto foi desenvolvido em
        <a href="https://vuejs.org/" class="ps-1">
          <img src="/images/logo-vue.png" rel="Vue.js" height="20px" />
        </a>
        e
        <a href="https://getbootstrap.com/" class="ps-1">
          <img src="/images/logo-bootstrap.png" rel="Bootstrap" height="20px" /> </a
        >, com o intuito de explicar o Design Patterns.
      </div>
      <div class="text-center p-3">
        © 2026 - Copyright:
        <a class="fw-bold text-secondary" href="https://github.com/armandolustosa">Armando</a>
      </div>
    </footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'footer',
})
</script>

<style scoped></style>
