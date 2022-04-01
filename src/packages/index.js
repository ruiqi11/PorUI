// 所有组件的入口，我们可以在这里进行扩展一些组件，并进行整合
import Button from './button.vue'
import Icon from './icon.vue'
import ButtonGroup from './button-group.vue'
import Input from './input.vue'
import Canvas from './canvas.vue'

// 在install方法里注册 全局组件
// 引入的时候，use这个方法
const install = (Vue) => {
  // 使用name获取到定义好的名字，方便修改
  Vue.component(Button.name, Button)
  Vue.component(Icon.name, Icon)
  Vue.component(ButtonGroup.name, ButtonGroup)
  Vue.component(Input.name, Input)
  Vue.component(Canvas.name, Canvas)
}


// 如果是script标签的方式引入并不会调用install方法，这里需要处理一下
// 当前全局window下有Vue实例的话，直接调用install把Vue传进去
if (typeof window.Vue !== 'undefined') {
  install(Vue)
}
// Vue只有用script标签的方式导入才会挂载到window上
// import的方式导入是挂载不到window上的，而是在当前的模块内


export default {
  install
}