<template>
  <div>
    <header>
      <div class="d-flex container align-items-center align-items-center w-100 px-4">
        <img
          class="d-none d-md-block mx-auto w-75"
          src="../../public/images/logo-design-patterns-desktop.svg"
        />
        <img
          class="w-50 d-xs-block d-md-none mx-auto my-3 my-md-0"
          src="../../public/images/logo-design-patterns-mobile.svg"
        />
      </div>
    </header>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'header',
})
</script>

<style scoped></style>
