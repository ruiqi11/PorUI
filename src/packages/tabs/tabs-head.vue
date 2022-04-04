<template>
  <!-- 切换选项/标题 -->
  <div class="tabs-head" ref="head" :id="direction">
    <!-- 子项 -->
    <slot></slot>
    <!-- 线条 -->
    <div class="line" ref="line" :class="direction"></div>
    <!-- <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div> -->
  </div>
</template>
<script>
  export default {
    name: 'PorTabsHead',
    inject: ['eventBus', 'direction'],
    mounted () {
      // 绑定update:selected事件，更新线条位置
      this.eventBus.$on('update:selected', (item, vm) => {
        this.updateLinePosition(vm)
      })
    },
    methods: {
      // 更新线条位置
      // head盒子大小不变，子项切换，线条跟着移动
      // 通过相对视图窗口位置，获取head盒子和子项的left，确定线条的left属性
      updateLinePosition (selectedVm) {
        // getBoundingClientRect用于获取某个元素相对于视窗的位置集合。集合中有top, right, bottom, left等属性。
        if(this.direction === 'vertical'){
          let {height, top} = selectedVm.$el.getBoundingClientRect()
          let {top: top2} = this.$refs.head.getBoundingClientRect()
          this.$refs.line.style.height = `${height}px`
          this.$refs.line.style.top = `${top - top2}px`
        }else{
          let {width, left} = selectedVm.$el.getBoundingClientRect()
          let {left: left2} = this.$refs.head.getBoundingClientRect()
          this.$refs.line.style.width = `${width}px`
          this.$refs.line.style.left = `${left - left2}px`
        }
      }
    }
  }
</script>
<style scoped lang="scss">
  $tab-height: 40px;
  $blue: blue;
  $border-color: #ddd;
  .tabs-head {
    display: flex;
    height: $tab-height;
    justify-content: flex-start;
    position: relative;
    border-bottom: 1px solid $border-color;
    > .line {
      position: absolute;
      bottom: 0;
      border-bottom: 2px solid $blue;
      // 过渡动画
      transition: all 350ms;
    }
    // > .actions-wrapper {
    //   margin-left: auto;
    //   display: flex;
    //   align-items: center;
    //   justify-content: center;
    //   padding: 0 1em;
    // }
    // 线条
    > .vertical{
      right: -0.5px;
      border-bottom: none;
      border-right: 2px solid blue;
    }
  }
  #vertical{
    height: 80px;
    width: 40px;
    flex-direction: column;
    border-bottom: none;
    border-right: 1px solid #ddd;
  }
</style>
