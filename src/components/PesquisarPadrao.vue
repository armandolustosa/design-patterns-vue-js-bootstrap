<template>
  <div>
    <div class="form-inline d-flex align-items-center mt-3 mt-xll-0">
      <input
        class="form-control mr-sm-2 rounded-4 h-75"
        type="search"
        placeholder="Pesquisar Padrão..."
        aria-label="Search"
        v-model="valorPesquisa"
      />
      <button class="btn btn-outline-success rounded-circle ms-2 my-2 my-sm-0">
        <i class="bi bi-search fw-bold"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useGerenciaPesquisa } from '@/store/GerenciaPesquisa.ts'

export default defineComponent({
  name: 'PesquisarPadrao',
  props: {
    valorPesquisa: String,
  },
  watch: {
    valorPesquisa() {
      this.$emit('emitirPesquisa', this.valorPesquisa)
    },
  },
  emits: ['emitirPesquisa'],
  data() {
    const store = useGerenciaPesquisa()
    return {
      valorPesquisa: store.termoPesquisado ?? '',
    }
  },
})
</script>

<style scoped></style>
