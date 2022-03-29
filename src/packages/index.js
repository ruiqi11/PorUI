// 所有组件的入口，我们可以在这里进行扩展一些组件，并进行整合
import Button from './button.vue'
import Icon from './icon.vue'

// 在install方法里注册 全局组件
// 引入的时候，use这个方法
const install = (Vue)=>{
    // 使用name获取到定义好的名字，方便修改
    Vue.component(Button.name,Button) 
    Vue.component(Icon.name,Icon)
}


//这样我们有很多组件就可以在install方法里先注册一下，到时候别人要用的时候再导出一个对象，整个文件作为一个入口，后续再复杂的封装，
//并且有可能组件会通过script标签的方式引入<script src='polyUI'>,这样它就不会去调用install方法，这种情况下，如果它是通过标签引入的话，我们就要让它自动的去调用install方法，这里需要判断window下是否有Vue实例
if(typeof window.Vue !== 'undefined'){ // 这个判断条件这样写是因为Vue只有用script标签的方式导入才会挂载到window上，import的方式导入是挂载不到window上的，而是在当前的模块内
	// 当前全局window下有Vue实例的话，直接调用install把Vue传进去
    install(Vue) // 全局直接通过script引用的方式会默认调用install方法
}
export default {
	install 
}
