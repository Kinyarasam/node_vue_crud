import { createRouter, createWebHistory } from 'vue-router'

import Create from '../components/AddProduct.vue'
import Edit from '../components/EditProduct.vue'
import Index from '../components/ProductList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/create',
      name: 'Create',
      component: Create
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    },
    {
      name: '/Edit',
      path: '/edit/:id',
      component: Edit
    }
  ]
})

export default router
