import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/layout.vue'
import WebDevelopment from '@/views/webDevelopment.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  redirect: { name: 'webDevelopment' },
  children: [{
    path: 'webDevelopment',
    name: 'webDevelopment',
    component: WebDevelopment
  }]
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
