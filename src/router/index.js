import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/layout/layout.vue'
import WebDevelopment from '@/views/webDevelopment.vue'
import AboutMe from '@/views/aboutMe.vue'
import File from '@/views/file.vue'
import Pdfvue from '@/views/pdf.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  redirect: { name: 'webDevelopment' },
  children: [{
    path: 'webDevelopment',
    name: 'webDevelopment',
    component: WebDevelopment
  }, {
    path: 'uiuxDesign',
    name: 'uiuxDesign',
    component: WebDevelopment
  }, {
    path: 'aboutMe',
    name: 'aboutMe',
    component: AboutMe
  }, {
    path: 'file/:name',
    name: 'file',
    component: File
  }]
}, {
  path: '/cv',
  name: 'cv',
  component: Pdfvue
}, {
  path: '*',
  redirect: { name: 'webDevelopment' }
}]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  },
  routes
})

export default router
