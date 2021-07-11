import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/About.vue'),
  },
  { path: '/:pathMatch(.*)', component: NotFound },
]
const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
