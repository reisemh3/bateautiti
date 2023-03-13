import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { HomeView, ArticleView, PanierView, AboutView } from '@/views/public'
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'public',
    component: Public.Layout,
    children: [
      { path: '/', name: 'home', component: Public.HomeView },
      { path: '/article', name: 'Article', component: Public.ArticleView },
      { path: '/panier', name: 'Panier', component: Public.PanierView },
      { path: '/contact', name: 'contact', component: Public.AboutView },
      // component: () => import(/* */ '../views/ArticleView.vue'),
    ],
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin.AdminLayout,
    children: [
      { path: 'dashboard', name: 'dashboard', component: Admin.Dashboard },
      { path: 'users/index', component: Admin.UserIndex },
      { path: 'users/add', component: Admin.UserAdd },
      { path: 'users/edit/:id', component: Admin.UserEdit },

      { path: 'products/index', component: Admin.ProductIndex },
      { path: 'products/add', component: Admin.ProductAdd },
      { path: 'products/edit/:id', component: Admin.ProductEdit },
    ],
  },
  {
    path: '/:pathMatch(.*)*',
    component: Public.NotFound,
    // redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
