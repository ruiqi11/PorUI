<template>
    <!-- class属性绑定计算属性的btnClass数组 -->
    <!-- 使用$emit触发click事件，同时要把事件源$event传出去，效果是在外面一点击就把当前事件触发给click事件，同时在外面绑定的方法里，可以拿到事件源。-->
		<button class='por-button' :class='btnClass' :disabled='loading' @click="$emit('click',$event)">
      <!-- 字体图标 -->
      <por-icon :icon="icon" v-if="icon" class="icon"></por-icon>
      <!-- 因为有可能插槽会有一些样式，这里用span多包一层,并且判断有插槽再创建span -->
      <!-- 加载状态 -->
      <por-icon icon="icon-jiazai" v-if="loading" class="icon"></por-icon>
      <span v-if='this.$slots.default'>
        <!-- 按钮文本等内容 -->
    	  <slot></slot>
      </span>
    </button>
</template>
<script>
export default {
	name: 'por-button', // 定义组件名
  props:{
    // type，按钮颜色类型
    type: {
      String, // type为字符串
      // 默认为空字符串
      default:'',
      validator(type){ // 内容校验
          // 判断类型值不为空且在不在五个类型里面
          if(type&&!['primary','warning','danger','success','info'].includes(type) ){
            // 如果不在，则打印error一下
            console.error('type的类型必须为primary,warning,danger,success,info')
          }
          return true // 这里一定要返回true，false会报错
        }
      },
      icon: { // 接收icon参数
        type: String
      },
      iconPosition: {// icon位置参数，默认靠左，样式未设置
        type: String,
        default: 'left',
        validator (data) {
          let Arr = ['left', 'right']
          if (data && Arr.indexOf(data) == -1) {
            console.error('iconPosition类型必须为left,right')
            return true
          }
          return true
        }
      },
      loading: {
        type: Boolean, // 布尔类型在传值的时候可以直接写不用赋值
        default: false
      }
    },
  computed:{
    btnClass(){
      // 可能有多个类型，先定义一个数组
      let classes = []
      // 按钮颜色类型
      if(this.type){
        classes.push(`por-button-${this.type}`)
      }
      // 图标位置类型（左，右）
      if (this.iconPosition) {
        classes.push(`icon-${this.iconPosition}`)
      }
      return classes
    }
  }
}
</script>


<style lang='scss'>
  // 导入公共样式
  @import '../styles/_var.scss'; 

  // 设置一些公共变量
  $height: 42px; 
  $font-size: 16px;
  $color: #606266;
  $border-color: #dcdfe6;
  $background: #ecf5ff;
  $active-color: #3a8ee6;

  // 按钮基本样式
  .por-button {
    border-radius: $border-radius;
    border: 1px solid $border-color;
    color: $color;
    background: #fff;
    height: $height;
    cursor: pointer;
    font-size: $font-size;
    line-height: 1;
    padding: 12px 20px;
    display: inline-flex;
    justify-content: center;
    vertical-align: middle;
    &:hover {
      border-color: $border-color;
      background-color: $background;
    }
    &:focus,&:active {
      color: $active-color;
      border-color: $active-color;
      background-color: $background;
      outline: none;
    }
    // 类名：颜色对，待循环
    $color-list: ( 
      primary: $primary,
      success: $success,
      info: $info,
      warning: $warning,
      danger: $danger
    );
    // 循环颜色maps，两个参数第一个为键第二个为值
    // .$type为类名，$color为颜色
    @each $type,$color in $color-list {
      &-#{$type} {
        background: #{$color};
        border: 1px solid #{$color};
        color: #fff;
      }
    }
    // 鼠标经过
    @each $type,$color in (primary:$primary-hover, success:$success-hover, info:$info-hover, warning:$warning-hover, danger:$danger-hover) {
        &-#{$type}:hover {
            background: #{$color};
            border: 1px solid #{$color};
            color: #fff;
        }
    }
    // 点击
    @each $type,$color in (primary:$primary-active, success:$success-active, info:$info-active, warning:$warning-active, danger:$danger-active) {
        &-#{$type}:active, &-#{$type}:focus {
          background: #{$color};
          border: 1px solid #{$color};
          color: #fff;
        }
    }
    // 设置按钮icon大小
    .icon {
      width: 16px;
      height: 16px;
    }
    // loading 状态
    &[disabled]{ // 属性选择器
    cursor: not-allowed; // 禁止点击
  }

  }
    // 设置子元素顺序的方式控制图标的位置
    .icon-left {
      .icon {
        order: 1; // 顺序排第一
        margin-right: 5px;
      }
      span {
        order: 2; // 顺序排第二
      }
    }
    .icon-right {
      .icon {
        margin-left: 5px;
        order: 2;
      }
      span {
        order: 1;
      }
    }

  // 因为五中类型的按钮样式一个个写太过复杂，这里采用scss的循环遍历@each来写
  // 格式：
  // @each 类型,颜色  in (key:值) { 
  //  #{}取值表达式
  // }

  $color-list: (
    primary: $primary,
    success: $success,
    info: $info,
    warning: $warning,
    danger: $danger
  );
  @each $c123, $c2 in $color-list {
    #{"." + $c123} {
      background: #{$c2};
      border: 1px solid #{$c2};
      color: #fff;
      fill: #fff; //把颜色填充到当前元素内
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    #{"." + $type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
  @each $type,
    $color
      in (
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    #{"." + $type}:active,
    #{"." + $type}:focus {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
    }
  }
</style>
