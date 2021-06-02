/*
 * @Author: Tmier
 * @Date: 2021-06-02 09:09:42
 * @LastEditTime: 2021-06-02 16:00:15
 * @Description: 
 * @LastModifiedBy: Tmier
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'img-large-mode',
    component: () => import('@/components/img-large-mode') 
  },
  {
    path: '/use',
    name: 'use',
    component: () => import('@/views/use.vue') 
  }
]

const router = new VueRouter({
  routes
})

export default router
