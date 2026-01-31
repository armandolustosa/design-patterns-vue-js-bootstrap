import { defineStore } from "pinia";
import type { ICard } from '@/interfaces/ICard.ts'

export const useGerenciaPesquisa = defineStore('GerenciaPesquisa', {
  state: () => ({
    padroes: [] as ICard[],
    termoPesquisado: '',
  }),

  actions: {
    async buscarPadroes(padrao: string): Promise<void> {
      try {
        const response = await fetch(`http://localhost:3000/${padrao}`)
        const data = await response.json()
        this.padroes = data
      } catch (error) {
        console.error('Erro ao buscar padrões:', error)
      }
    },

    alteraPesquisa(termoPesquisa: string) {
        this.termoPesquisado = termoPesquisa
    },

    limparPesquisa() {
      this.termoPesquisado = ''
    }
  },

  getters: {
    filtrarPadroes(state) {
      return state.padroes.filter((padrao: ICard) =>
        padrao.name.toLowerCase().includes(state.termoPesquisado.toLowerCase()),
      )
    },
  },

  persist: {
    key: 'GerenciaPesquisa',
    paths: [ 'termoPesquisado' ],
  }
})