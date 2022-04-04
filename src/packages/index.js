// 所有组件的入口，我们可以在这里进行扩展一些组件，并进行整合
import Button from './button/button.vue'
import ButtonGroup from './button/button-group.vue'
import Input from './input.vue'
import Tabs from './tabs/tabs.vue'
import TabsBody from './tabs/tabs-body.vue'
import TabsHead from './tabs/tabs-head.vue'
import TabsItem from './tabs/tabs-item.vue'
import TabsPane from './tabs/tabs-pane.vue'
import Toast from './toast.vue'
import Plugin from './plugin.js'
import Popover from './popover.vue'
import Layout from './layout/layout.vue'
import LayoutHeader from './layout/header.vue'
import LayoutContent from './layout/content.vue'
import LayoutFonter from './layout/footer.vue'
import LayoutSider from './layout/sider.vue'



const components = {
  Button,
  ButtonGroup,
  Input,
  Tabs,
  TabsBody,
  TabsHead,
  TabsItem,
  TabsPane,
  Toast,
  Popover,
  Layout,
  LayoutHeader,
  LayoutContent,
  LayoutFonter,
  LayoutSider
}

// 在install方法里注册 全局组件
// 引入的时候，use这个方法
const install = function(Vue) {
  Object.keys(components).forEach(component => {
    Vue.component(component.name, component);
  });
};



// 如果是script标签的方式引入并不会调用install方法，这里需要处理一下
// 当前全局window下有Vue实例的话，直接调用install把Vue传进去
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
// Vue只有用script标签的方式导入才会挂载到window上
// import的方式导入是挂载不到window上的，而是在当前的模块内


export default {
  install,
  Plugin,
  ...components
}