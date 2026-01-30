<template>
  <div>
    <Header></Header>

    <router-view></router-view>

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

<style scoped>
div.container > img {
  width: 100%;
}
</style>
