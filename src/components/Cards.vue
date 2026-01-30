<template>
  <div v-for="padrao in padroes" :key="padrao.id">
    <div class="card m-4 rounded-4 bg-transparent border-success overflow-hidden shadow col-11 col-md-8 mx-auto">
      <h2 class="card-header text-white bg-success">{{ padrao.name }}</h2>
      <div class="card-body">
        <p class="card-text border-start border-2 ps-2 border-success">
          {{ padrao.description }}
        </p>
        <a :href="padrao.example" target="_blank" class="btn btn-outline-success">Exemplo</a>

        <button
          type="button"
          class="btn btn-success ms-2"
          data-bs-toggle="modal"
          :data-bs-target="`#exampleModal-${padrao.id}`"
        >
          Estrutura UML
        </button>

        <div
          class="modal fade"
          :id="`exampleModal-${padrao.id}`"
          tabindex="-1"
          :aria-labelledby="`exampleModalLabel-${padrao.id}`"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content bg-success-subtle rounded-5">
              <div class="modal-body">
                <div class="border-bottom border-success pb-3 border-2 overflow-auto max-w-80">
                  <img
                    :src="padrao.uml"
                    class="img-fluid d-block mx-auto rounded-4"
                    alt="UML"
                  />
                </div>
              </div>

              <div class="modal-footer pt-0 pb-3 mx-auto">
                <a
                  class="btn btn-outline-success"
                  :href="padrao.uml"
                  target="_blank"
                  rel="noopener"
                >
                  Visualizar em tamanho real
                </a>

                <button type="button" class="btn btn-success" data-bs-dismiss="modal">
                  Fechar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import type { ICard } from '@/interfaces/ICard.ts'

export default defineComponent({
  name: 'Cards',
  props: {
    padroes: [] as ICard[],
  },
})
</script>

<style scoped></style>
