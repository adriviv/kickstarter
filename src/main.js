import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
import store from '../store.js'
import StarRating from 'vue-star-rating'

import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'


import VueMq from 'vue-mq'
 
Vue.use(VueMq, {
  breakpoints: { // default breakpoints - customize this
    vsm: 576,
    sm: 768,
    md: 1250,
    lg: Infinity,
  },
  defaultBreakpoint: 'sm' // customize this for SSR
})


import Vuex from 'vuex'
Vue.use(Vuex)

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.getters.loggedIn) {
      next({
        name: 'login',
      })
    } else {
      next()
    }
  } else if (to.matched.some(record => record.meta.requiresVisitor)) {
    if (store.getters.loggedIn) {
      next({
        name: 'home',
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router: router,
  store: store,
  render: h => h(App)
}).$mount('#app')
