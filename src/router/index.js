import { createRouter, createWebHashHistory } from 'vue-router'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      name: 'Index',
      path: '/',
      component: () => import('../views/Index.vue')
    },
    {
      name: 'Docs',
      path: '/docs',
      component: () => import('../views/Docs.vue'),
      children: []
    },
    {
      name: 'Blog',
      path: '/blog',
      component: () => import('../views/Blog.vue'),
    }
  ]
})