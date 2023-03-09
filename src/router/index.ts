import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/public/HomeView.vue'
import ArticleView from '@/views/public/ArticleView.vue'
import PanierView from '@/views/public/PanierView.vue'
import AboutView from '@/views/public/AboutView.vue'

import NotFound from '@/views/public/NotFound.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    // component: () => import(/* */ '../views/HomeView.vue'),
  },
  {
    path: '/article',
    name: 'Article',
    component: ArticleView,
  },
  {
    path: '/panier',
    name: 'Panier',
    component: PanierView,
  },
  {
    path: '/contact',
    name: 'contact',
    component: AboutView,
    // component: () => import(/* */ '../views/ArticleView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
    // redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
