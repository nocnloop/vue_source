import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugin'
import Bus from '@/utils/bus'

Vue.config.productionTip = false
Vue.prototype.$bus = new Bus()

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
