<template>
  <div>
    <Header></Header>

    <div class="min-vh-100">
      <router-view></router-view>
    </div>

    <Footer></Footer>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default defineComponent({
  name: 'home',
  components: { Footer, Header },
})
</script>

<style scoped></style>
