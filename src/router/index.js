import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '../views/HomePage'
import iOSPage from '../views/iOSPage'
import iOSView from '../components/IOSView.vue'
import AndriodView from '../components/AndriodView.vue'
import MeiziView from '../components/MeiziView.vue'

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
    },
    {
      path: '/iosView',
      name: 'iOSView',
      component: iOSView
    },
    {
      path: '/androidView',
      name: 'AndriodView',
      component: AndriodView
    },
    {
      path: '/meiziView',
      name: 'MeiziView',
      component: MeiziView
    }
  ]
})
