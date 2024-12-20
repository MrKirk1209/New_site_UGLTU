import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/University',
      name: 'University',
      component: () => import('../views/UniversityUGLTU.vue'),
    },
    {
      path: '/Аpplicant',
      name: 'Аpplicant',
      component: () => import('../views/АpplicantUGLTU.vue'),
    },
  ],
})

export default router
