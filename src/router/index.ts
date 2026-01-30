import { createRouter, createWebHistory } from 'vue-router'
import Creational from "@/views/Creational.vue";
import Main from '@/components/Main.vue'
import Structural from '@/views/Structural.vue'
import Behavioral from '@/views/Behavioral.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Main,
      name: 'Main',
    },
    {
      path: '/creational',
      component: Creational,
      name: 'Creational',
    },
    {
      path: '/structural',
      component: Structural,
      name: 'Structural',
    },
    {
      path: '/behavioral',
      component: Behavioral,
      name: 'Behavioral',
    },
  ],
})

export default router
