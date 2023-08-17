import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/activity/:activityId',
      component: () => import('../views/ActivityList.vue')
    },
    {
      path: '/spots',
      name: 'spots',
      component: () => import('../views/SpotsView.vue')
    },
    {
      path: '/spots/:spotsId',
      component: () => import('../views/SpotsList.vue')
    },
    {
      path: '/foods',
      name: 'foods',
      component: () => import('../views/FoodsView.vue')
    },
    {
      path: '/foods/:foodsId',
      component: () => import('../views/FoodsList.vue')
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: () => import('../views/HotelView.vue')
    },
    {
      path: '/hotel/:hotelId',
      component: () => import('../views/HotelList.vue')
    }
  ]
})

export default router
