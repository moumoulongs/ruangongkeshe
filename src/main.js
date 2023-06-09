import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import store from './store'
import axios from 'axios';
import router from './router'
 


Vue.use(ElementUI);

axios.defaults.withCredentials = true // 携带cookie
Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
