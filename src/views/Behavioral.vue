<template>
  <NavBar textNavBar="Padrões Comportamentais"></NavBar>
  <Cards :padroes="padroes"></Cards>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cards from '@/components/Cards.vue'
import type { ICard } from '@/interfaces/ICard.ts'
import NavBar from '@/components/NavBar.vue'

export default defineComponent({
  name: 'behavioural',
  components: { NavBar, Cards },
  data() {
    return {
      padroes: [] as ICard[],
    }
  },
  methods: {
    async buscarPadroes(): Promise<void> {
      try {
        const response = await fetch('http://localhost:3000/comportamentais')
        const data = await response.json()
        this.padroes = data
      } catch (error) {
        console.error('Erro ao buscar padrões:', error)
      }
    },
  },
  created() {
    this.buscarPadroes()
  },
})
</script>

<style scoped></style>
