/*
 * @Author: Tmier
 * @Date: 2021-06-02 09:09:42
 * @LastEditTime: 2021-06-02 15:14:47
 * @Description: 
 * @LastModifiedBy: Tmier
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'img-large-mode',
    component: () => import('@/components/img-large-mode') 
  }
]

const router = new VueRouter({
  routes
})

export default router
