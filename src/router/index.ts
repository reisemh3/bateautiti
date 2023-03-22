import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
// import { HomeView, ArticleView, PanierView, AboutView } from '@/views/public'
import * as Public from '@/views/public'
import * as Admin from '@/views/admin'
import Login from '@/views/auth/Login.vue'
import { authGuard } from '@/_helpers/auth-guard'

localStorage.setItem('token', 'admin')

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'public',
    component: Public.Layout,
    children: [
      { path: '/', name: 'home', component: Public.HomeView },
      { path: '/article', name: 'Article', component: Public.ArticleView },
      { path: '/cocktails', name: 'cocktails', component: Public.Cocktail },
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
      {
        path: 'dashboard',
        name: 'dashboard',
        component: Admin.Dashboard,
        // meta: { requiresAuth: true },
      },
      { path: 'users/index', name: 'uList', component: Admin.UserIndex },
      { path: 'users/add', component: Admin.UserAdd },
      {
        path: 'users/edit/:id(\\d+)',
        name: 'uEdit',
        component: Admin.UserEdit,
        props: true,
      },

      {
        path: 'cocktails/index',
        name: 'cList',
        component: Admin.CocktailIndex,
      },
      {
        path: 'cocktails/edit/:id(\\d+)?',
        name: 'cEdit',
        component: Admin.CocktailEdit,
        props: true,
      },

      { path: 'products/index', name: 'pList', component: Admin.ProductIndex },
      { path: 'products/add', component: Admin.ProductAdd },
      {
        path: 'products/edit/:id(\\d+)',
        name: 'pEdit',
        component: Admin.ProductEdit,
        props: true,
      },
      { path: '/:pathMatch(.*)*', redirect: '/admin/dashboard' },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
    // beforeEnter: authGuard,
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

// Verrouillage partie administrator
router.beforeEach((to, from, next) => {
  if (to.matched[0].name == 'admin') {
    authGuard()
  }
  next()
})

export default router
