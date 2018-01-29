// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

import Vuetify from 'vuetify'
Vue.use(Vuetify)
import '../node_modules/vuetify/dist/vuetify.min.css'

import router from './router'
import store from './store'

import { sync } from 'vuex-router-sync'

Vue.config.productionTip = false

sync(store, router)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
