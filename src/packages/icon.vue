<template>
  <svg class="por-icon" aria-hidden="true">
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>
<script>
  import './../styles/icon'
  export default {
    name: 'por-icon', // 定义组件名
    props:{
      icon:{
        type:String,
        require:true // 设置必传
      }
    }
  }
</script>
<style>
  .por-icon {
    width: 30px;
    height: 30px;
    vertical-align: -0.15em;
    fill: currentColor;
    overflow: hidden;
  }
</style>
