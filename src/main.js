import Vue from 'vue'
import App from './App.vue'
// 按需导入


// 整个组件挂载到全局
import porUI from './packages/index'
let components = [
  porUI.Button,
  porUI.ButtonGroup,
  porUI.Input
]
components.forEach(component => {
  Vue.component(component.name, component);
});
// Vue.component(porUI.Button.name, porUI.Button)
// Vue.component(porUI.ButtonGroup.name, porUI.ButtonGroup)
// Vue.component(porUI.Input.name, porUI.Input)
// Vue.use(porUI.ButtonGroup)
// Vue.use(porUI.Input)


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')