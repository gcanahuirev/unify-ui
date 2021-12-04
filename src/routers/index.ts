import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   redirect: '/login',
  // },
  // {
  //   path: '/login',
  //   name: 'Login',
  //   component: () => import('~/modules/login/pages/Login.vue'),
  // },
  {
    path: '/',
    name: 'Store',
    component: () => import('~/modules/cart/pages/Store.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('~/modules/cart/pages/ranking.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/terms_and_conditions',
    name: 'Terms and Conditions',
    component: () => import('~/modules/cart/pages/termsConditions.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'NotFound',
  //   component: () => import('~/modules/404.vue'),
  // },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export { router }
