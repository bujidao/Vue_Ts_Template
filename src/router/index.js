import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/views/index'
import Layout from '@/layout/index'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    // 智慧导诊
    {
      path: '/',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: 'Home',
          component: () => import('@/views/index'),
          meta: {
            title: '首页'
          }
        }
      ]
    },
    {
      path: '/404',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: 'index',
          name: '404',
          component: () => import('@/views/blank'),
          meta: {
            title: '404'
          }
        }
      ]
    }
  ]
})
