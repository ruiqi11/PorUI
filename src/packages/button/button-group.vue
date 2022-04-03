<template>
  <div class="button-group">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'por-button-group',
  // 在钩子里面，校验内部的元素是否是我们的button组件，如果不是就报错
  mounted () {
    // 其实就是把当前原生的dom元素拿到 
    let children = this.$el.children
    // 遍历元素
    for (let i = 0; i < children.length; i++ ) {
      console.assert(children[i].tagName === 'BUTTON', '子元素必须为button') // 使用断言工具函数 
    }
  }
}
</script>

<style lang='scss' scoped>
@import "../../styles/_var.scss"; // 导入公共样式
// 通过样式让整个按钮组只有四个角是圆角，并且两个按钮之间只有1px边框
.button-group {
  display: inline-flex; // 设置不要独占一行
  vertical-align: middle; // 上下居中
  //先覆盖掉原来按钮的圆角
  .por-button {
    position: relative; // 设置个定位，让各种hover状态可以控制层级
    border-radius: 0;
    // 让第一个按钮左边和最后一个按钮右边有圆角
    &:first-child {
      border-radius: $border-radius 0 0 $border-radius;
    }
    &:last-child {
      border-radius: 0 $border-radius $border-radius 0;
    }
    // 让按钮与按钮中间的边框只有一像素，可以让后面的盒子左移1px
    &:not(:first-child) {
      margin-left: -1px;
    }
    &:hover{
        z-index: 1;
    }
    &:focus{
        z-index: 1;
    }
  }
}
</style>
