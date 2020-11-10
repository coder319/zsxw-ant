import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css'
import http from './assets/js/http'
import global from "./assets/js/global";

Vue.use(Antd)

Vue.config.productionTip = false

Vue.prototype.$http = http
Vue.prototype.$global = global

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
