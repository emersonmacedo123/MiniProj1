import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import QuemEuSou from '../views/QuemEuSou.vue'
import OQueFacoTexto from '@/components/OQueFacoTexto.vue'
import OQueFaco from '../views/OQueFaco.vue'
import Hobbies from '../views/Hobbies.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // },
  {
    path: '/quem_eu_sou',
    name: 'quem_eu_sou',
    component: QuemEuSou
  },
  {
    path: '/que_eu_faco',
    name: 'que_eu_faco',
    component: OQueFaco
  },
  {
    path: '/hobbies',
    name: 'hobbies',
    component: Hobbies
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
