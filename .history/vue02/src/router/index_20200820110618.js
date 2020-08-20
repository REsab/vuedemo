import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld'
import login from '@/views/login'

Vue.use(Router)

export default new Router({
  mode: 'history',  //去掉网址的#号
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }, {
      path: '/login',
      name: 'login',
      component: login
    }
  ]
})
