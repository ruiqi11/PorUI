import Toast from './toast'
import Vue from 'vue'

let currentToast

const toastPlugin = function(message, toastOptions) {
  if (currentToast) {
    currentToast.close()
  }
  currentToast = createToast({
    Vue,
    message,
    propsData: toastOptions,
    onClose: () => {
      currentToast = null
    }
  })
}
export default toastPlugin


/* helpers */
function createToast({ Vue, message, propsData, onClose }) {
  let Constructor = Vue.extend(Toast)
  let toast = new Constructor({ propsData })
  toast.$slots.default = [message]
  toast.$mount()
  toast.$on('close', onClose)
  document.body.appendChild(toast.$el)
  return toast
}

// 使用install,引入时使用vue.use
// 缺点是函数名只能是install，且不能包含在对象内
// export default {
//   install(Vue, options) {
//     Vue.prototype.$toast = function(message, toastOptions) {
//       if (currentToast) {
//         currentToast.close()
//       }
//       currentToast = createToast({
//         Vue,
//         message,
//         propsData: toastOptions,
//         onClose: () => {
//           currentToast = null
//         }
//       })
//     }
//   }
// }

// 原型的方式引入插件
// Vue.prototype.$toast = function(message, toastOptions) {
//   if (currentToast) {
//     currentToast.close()
//   }
//   currentToast = createToast({
//     Vue,
//     message,
//     propsData: toastOptions,
//     onClose: () => {
//       currentToast = null
//     }
//   })
// }