import Vue from 'vue'
import Router from 'vue-router'
import Connection from '@/components/Connection'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Connection',
      component: Connection
    }
  ]
})
