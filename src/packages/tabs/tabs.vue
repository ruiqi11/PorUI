<template>
  <!-- 父盒子，包裹组件，包括切换标题和项目 -->
  <div class="tabs" :class="direction">
    <slot></slot>
  </div>
</template>
<script>
  import Vue from 'vue'
  export default {
    name: 'PorTabs',
    props: {
      selected: { // 选择
        type: String,
        required: true
      },
      direction: { // 排列方式,未定义样式
        type: String,
        default: 'horizontal',
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    // 提供一个evenBus
    provide () {
      return {
        eventBus: this.eventBus,
        direction: this.direction
      }
    },
    methods: {
      // 确认有没有子组件
      checkChildren () {
        if (this.$children.length === 0) {
          console && console.warn &&
          console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
        }
      },
      // 根据选中的子组件，触发eventBus中的update:selected事件
      selectTab () {
        this.$children.forEach((vm) => {
          if (vm.$options.name === 'PorTabsHead') {
            // 遍历子组件，触发update事件
            vm.$children.forEach((childVm) => {
              if (childVm.$options.name === 'PorTabsItem'
                && childVm.name === this.selected) {
                this.eventBus.$emit('update:selected', this.selected, childVm)
              }
            })
          }
        })
      }
    },
    mounted () {
      this.checkChildren();
      this.selectTab();
    }
  }
</script>
<style scoped>
  /* .tabs {
  } */
  .vertical{
    display: flex;
  }
</style>
