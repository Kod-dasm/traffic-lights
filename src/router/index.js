import Vue from 'vue'
import VueRouter from 'vue-router'
import { RedPage, YellowPage, GreenPage } from '@/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/red',
  },
  {
    path: '/red',
    name: 'Red',
    component: RedPage
  },
  {
    path: '/yellow',
    name: 'Yellow',
    props: true,
    component: YellowPage
  },
  {
    path: '/green',
    name: 'Green',
    component: GreenPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
