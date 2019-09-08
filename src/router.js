import Vue from 'vue'
import Router from 'vue-router'
import Home from './components/pages/Home/Home.vue'

Vue.use(Router)

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./components/pages/AboutMe/AboutMe.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('./components/pages/Projects/Projects.vue')
    }
  ]
})
