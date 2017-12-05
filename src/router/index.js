import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'
import iOSView from '../views/iOSPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'homePage',
      component: HomePage
    },
    {
      path: '/ios',
      name: 'iOSPage',
      component: iOSPage
    }
  ]
})
