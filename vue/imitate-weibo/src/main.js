import Vue from 'vue'
import axios from 'axios'

import App from './App.vue'

import './mint-ui/mint-ui.js'

// import router from './router.js'
import store from './store/index'

Vue.prototype.$http = axios

new Vue({
  el: '#app',
  // router,
  store,
  render: h => h(App)
})
