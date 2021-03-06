import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Dynamic',
    component: () => import('../views/Dynamic')
  },
  {
    path: '/Brodcast',
    name: 'Brodcast',
    component: () => import('../views/Brodcast.vue')
  },
  {
    path: '/Form',
    name: 'Form',
    component: () => import('../views/Form.vue')
  },
  {
    path: '/Bus',
    name: 'Bus',
    component: () => import('../views/Bus.vue')
  },
  {
    path: '/Slot',
    name: 'Slot',
    component: () => import('../views/Slot.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
