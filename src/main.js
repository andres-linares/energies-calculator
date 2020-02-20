import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import './assets/main.scss'
import VueRouter from 'vue-router'
import { routes } from '@/router'
Vue.config.productionTip = false

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)

Vue.use(VueRouter)
const router = new VueRouter({ routes, mode: 'history' })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
