import Vue from 'vue'
import App from './App.vue'
// 引入自己的ui库
import porUI from './packages/index'
// 挂载到全局
Vue.use(porUI)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')