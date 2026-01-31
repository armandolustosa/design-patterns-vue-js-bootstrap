<template>
  <NavBar textNavBar="Padrões Estruturais"></NavBar>
  <Cards :padroes="padroesExibidos"></Cards>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cards from '@/components/Cards.vue'
import type { ICard } from '@/interfaces/ICard.ts'
import NavBar from '@/components/NavBar.vue'
import { useGerenciaPesquisa } from '@/store/GerenciaPesquisa.ts'

export default defineComponent({
  name: 'structural',
  components: { NavBar, Cards },
  computed: {
    store() {
      return useGerenciaPesquisa()
    },

    padroesExibidos() {
      return this.store.filtrarPadroes
    },
  },
  data() {
    return {
      padroes: [] as ICard[],
    }
  },
  async created() {
    await this.store.buscarPadroes('estruturais')
  },
})
</script>

<style scoped></style>
