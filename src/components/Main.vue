<template>
  <div class="container">
    <div class="row d-flex align-items-center align-content-center mx-auto">
      <div class="col-md-7 px-4 py-2 border border-secondary rounded-4 mx-md-4 mb-4 mb-md-0 shadow">
        <div class="pb-3 p-2">
          <h2 class="border-bottom border-2 border-secondary pb-2 mb-4">
            O que são Padrões de Projeto?
          </h2>
          <p>
            Padrões de projeto são soluções reutilizáveis para problemas recorrentes no
            desenvolvimento de software. Eles organizam boas práticas de arquitetura, facilitam
            manutenção, escalabilidade e reutilização de código.
          </p>
        </div>
        <div class="row mx-2">
          <div class="bg-success col-md-12 px-4 py-2 border border-secondary rounded-4 mb-4">
            <div class="pe-3 p-2">
              <h2 class="border-bottom border-2 border-gray:50 pb-2 mb-4 text-white">História</h2>
              <p class="text-white">
                Os padrões de projeto surgiram a partir das experiências em diversos projetos de
                software, especialmente com a popularização da programação orientada a objetos.
                Assim como outros aspectos da engenharia de software, eles resultam da
                experimentação contínua. Tornaram-se amplamente conhecidos quando Erich Gamma,
                Richard Helm, Ralph Johnson e John Vlissides catalogaram os problemas mais comuns e
                suas soluções no livro “Design Patterns: Elements of Reusable Object-Oriented
                Software”, lançado em 1994. Esse grupo ficou conhecido como Gang of Four (GoF).
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4 px-4 py-2 border border-secondary rounded-4 shadow">
        <div class="pe-3 p-2">
          <h2 class="border-bottom border-secondary border-2 pb-2 mb-4">Classificações</h2>
          <section>
            <h4 class="border-start border-2 ps-2 border-success">Criacionais</h4>
            <p>
              Focam em mecanismos de criação de objetos, abstraindo o processo de instanciação para
              aumentar a flexibilidade.
            </p>
            <router-link to="/creational">
              <button type="button" class="btn btn-outline-success mb-4">Ver mais</button>
            </router-link>
          </section>

          <section>
            <h4 class="border-start border-2 ps-2 border-success">Estruturais</h4>
            <p>
              Explicam como montar objetos e classes em estruturas maiores, mantendo-as flexíveis e
              eficientes.
            </p>
            <router-link to="/structural">
              <button type="button" class="btn btn-outline-success mb-4">Ver mais</button>
            </router-link>
          </section>

          <section>
            <h4 class="border-start border-2 ps-2 border-success">Comportamentais</h4>
            <p>Focam nos algoritmos e na atribuição de responsabilidades entre objetos.</p>
            <router-link to="/behavioral">
              <button type="button" class="btn btn-outline-success mb-4">Ver mais</button>
            </router-link>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'main',
})
</script>

<style scoped></style>
