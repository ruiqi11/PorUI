import Vue from 'vue'
import App from './App.vue'
import porUI from './packages/index'

// 整个组件挂载到全局
// Vue.use(porUI)


// 或按需导入
let components = [
  porUI.Button,
  porUI.ButtonGroup,
  porUI.Input,
  porUI.Tabs,
  porUI.TabsBody,
  porUI.TabsHead,
  porUI.TabsItem,
  porUI.TabsPane
]
components.forEach(component => {
  Vue.component(component.name, component);
});
// Vue.component(porUI.Button.name, porUI.Button)
// Vue.component(porUI.ButtonGroup.name, porUI.ButtonGroup)
// Vue.component(porUI.Input.name, porUI.Input)
// Vue.use(porUI.ButtonGroup)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')