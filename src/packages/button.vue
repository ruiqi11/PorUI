<template>
		<button class='por-button' :class='btnClass'>
      <!-- 因为有可能插槽会有一些样式，这里用span多包一层,并且判断有插槽再创建span -->
      <!-- 绑定:btnClass,计算属性算出一个btnClass数组 -->
      <span v-if='this.$slots.default'>
        <!-- 用插槽接收内容 -->
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
         }
    },
    computed:{
    	btnClass(){
        // 可能有多个类型，先定义一个数组
        let classes = []
        // 将type类名放入到数组中
        if(this.type){
          classes.push(`por-button-${this.type}`)
        }
        // 如果用户再传入其他属性，像圆角啊，就可以在这里不停的加if做其他处理
        // ...
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

  // 因为五中类型的按钮样式一个个写太过复杂，这里采用scss的循环遍历@each来写
  // 格式：
  // @each 类型,颜色  in (key:值) { 
  //  #{}取值表达式
  // }
    // 类名：颜色对，待循环
    $color-list: ( 
      primary: $primary,
      success: $success,
      info: $info,
      warning: $warning,
      danger: $danger
    );
    // 循环颜色maps，两个参数第一个为键第二个为值
    // .$c123为类名，$c2为颜色
    @each $c123, $c2 in $color-list {
      #{"." + $c123} {
        background: #{$c2};
        border: 1px solid #{$c2};
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
  }
</style>
