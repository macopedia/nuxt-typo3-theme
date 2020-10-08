import Vue from 'vue'
import App from './App.vue'
import CePlugin from '../index'

Vue.config.productionTip = false
Vue.use(CePlugin)
new Vue({
  render: h => h(App)
}).$mount('#app')
