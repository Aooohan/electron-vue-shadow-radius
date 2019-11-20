import Vue from 'vue'
import Router from 'vue-router'
import BasicLayout from '@/layouts/BasicLayout'
Vue.use(Router);


export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: BasicLayout
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
