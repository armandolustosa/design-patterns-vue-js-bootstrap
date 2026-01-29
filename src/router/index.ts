import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/home.vue'
import Creational from "@/views/creational.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home,
      name: 'Home',
      children: [
        {
          path: 'creational',
          component: Creational,
          name: 'Creational',
        }
      ]
    },

  ],
})

export default router
