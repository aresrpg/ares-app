import { createRouter, createWebHistory } from 'vue-router'

import e404 from './views/404.vue'
import home from './views/home.vue'
import oauth from './views/oauth.vue'

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:catchAll(.*)',
      component: e404,
    },
    {
      path: '/',
      alias: '/home',
      component: home,
    },
    {
      path: '/oauth',
      component: oauth,
    },
  ],
})
