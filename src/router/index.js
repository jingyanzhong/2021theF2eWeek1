import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue')
    },
    {
      path: '/activity',
      name: 'activity',
      component: () => import('../views/ActivityView.vue')
    },
    {
      path: '/spots',
      name: 'spots',
      component: () => import('../views/SpotsView.vue')
    },
    {
      path: '/foods',
      name: 'foods',
      component: () => import('../views/FoodsView.vue')
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('../views/HotelView.vue')
    }
  ]
})

export default router
