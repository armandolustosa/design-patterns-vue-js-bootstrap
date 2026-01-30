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
      <button
        @click="$emit('emitirPesquisa', valorPesquisa)"
        class="btn btn-outline-success rounded-circle ms-2 my-2 my-sm-0"
      >
        <i class="bi bi-search fw-bold"></i>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PesquisarPadrao',
  props: {
    valorPesquisa: String
  },
  emits: ['emitirPesquisa'],
  data() {
    return {
      valorPesquisa: '',
    }
  },
})
</script>

<style scoped></style>
