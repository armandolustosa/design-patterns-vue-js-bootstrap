<template>
  <nav class="navbar navbar-light bg-lig justify-content-between col-8 mb-5 mx-auto">
    <router-link to="/" class="text-decoration-none mx-auto mt-lg-0 mx-lg-1 mx-2">
      <h5 class="bg-success text-white py-2 px-3 rounded-4">
        <i class="bi bi-arrow-bar-left"></i>
        Home
      </h5>
    </router-link>
    <h1 class="fw-bold mt-3 mx-auto text-center mt-lg-0">{{ textNavBar }}</h1>
    <PesquisarPadrao @emitirPesquisa="pesquisarPadroes" class="mx-auto mx-xll-2"></PesquisarPadrao>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import PesquisarPadrao from '@/components/PesquisarPadrao.vue'
import type { ICard } from '@/interfaces/ICard.ts'

export default defineComponent({
  name: 'NavBar',
  components: { PesquisarPadrao },
  props: {
    textNavBar: String,
  },
  methods: {
    pesquisarPadroes(valorPesquisa): ICard {
      console.log(valorPesquisa)
    },
  },
})
</script>

<style scoped></style>
