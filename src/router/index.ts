import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Home from '../components/Home.vue'
import EventDetails from '../components/EventDetails.vue'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/event/:id',
    name: 'EventDetails',
    component: EventDetails
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
