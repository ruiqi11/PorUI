import Vue from 'vue'
import App from './App.vue'
import porUI from './packages/index'

// 整个组件挂载到全局
// Vue.use(porUI)


// 或按需导入
const componentArry = [
  porUI.Button,
  porUI.ButtonGroup,
  porUI.Input,
  porUI.Tabs,
  porUI.TabsBody,
  porUI.TabsHead,
  porUI.TabsItem,
  porUI.TabsPane,
  porUI.Toast
]
componentArry.forEach(component => {
  Vue.component(component.name, component);
});

// 引入插件 use只能接收install
// Vue.use(porUI.install)

// 使用原型的方式引入插件
const pluginArry = [
  porUI.Plugin.toastPlugin
]
pluginArry.forEach(plugin => {
  Vue.prototype.$toast = plugin
})

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')