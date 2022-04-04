import Vue from 'vue'
import App from './App.vue'


// 全局挂载整个组件
import porUI from './packages/index'
Vue.use(porUI)


// 按需导入
// import {
// Button,
// ButtonGroup,
// Input,
// Tabs,
// TabsBody,
// TabsHead,
// TabsItem,
// TabsPane,
// Toast,
// Popover,
// Layout,
// LayoutContent,
// LayoutHeader,
// LayoutSider,
// LayoutFonter
// } from './packages/index'


// Vue.component(Button.name, Button);
// Vue.component(ButtonGroup.name, ButtonGroup);
// Vue.component(Input.name, Input);
// Vue.component(Tabs.name, Tabs);
// Vue.component(TabsBody.name, TabsBody);
// Vue.component(TabsHead.name, TabsHead);
// Vue.component(TabsItem.name, TabsItem);
// Vue.component(TabsPane.name, TabsPane);
// Vue.component(Toast.name, Toast);
// Vue.component(Popover.name, Popover);
// Vue.component(Layout.name, Layout);
// Vue.component(LayoutContent.name, LayoutContent);
// Vue.component(LayoutHeader.name, LayoutHeader);
// Vue.component(LayoutFonter.name, LayoutFonter);
// Vue.component(LayoutSider.name, LayoutSider);



// 两种方式引入插件
// 1.引入插件 use只能接收install
// 2.使用原型的方式引入插件
import { Plugin } from './packages/index'
Vue.prototype.$toast = Plugin


Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')