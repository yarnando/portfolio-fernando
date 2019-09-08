import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'principal',
      component: Home
    },
    {
      path: '/sobre',
      name: 'about',
      component: () => import('./components/pages/AboutMe/AboutMe.vue')
    },
    {
      path: '/projetos',
      name: 'projects',
      component: () => import('./components/pages/Projects/Projects.vue')
    }
  ]
})
