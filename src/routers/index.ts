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
    component: () => import('~/modules/cart/pages/Home.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/store',
    name: 'Tienda',
    component: () => import('~/modules/cart/pages/Store.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: () => import('~/modules/cart/pages/Ranking.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/create-token',
    name: 'Crear Token NFT',
    component: () => import('~/modules/cart/pages/CreateToken.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/list-token',
    name: 'ListToken',
    component: () => import('~/modules/cart/pages/ListToken.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/blockchain',
    name: 'Datos BlockChain',
    component: () => import('~/modules/cart/pages/BlockchainData.vue'),
    meta: {
      layout: 'LayoutPage',
    },
  },
  {
    path: '/legal',
    name: 'Términos y Condiciones',
    component: () => import('~/modules/cart/pages/TermsConditions.vue'),
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
