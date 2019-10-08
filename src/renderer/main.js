import Vue from 'vue'
import axios from 'axios'
import moment from 'moment'

import App from './App'
import router from './router'
import store from './store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.moment = Vue.prototype.$moment = moment
Vue.config.productionTip = false
Vue.base_url = Vue.prototype.$base_url = 'http://finmindapi.servebeer.com/api/data'

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')
