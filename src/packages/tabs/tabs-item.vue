<template>
  <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PorTabsItem',
    inject: ['eventBus',  'direction'],
    data () {
      return {
        active: false
      }
    },
    props: {
      // 不可点击
      disabled: {
        type: Boolean,
        default: false
      },
      // 项目与标题匹配序号
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      // 多个属性组成对象,因为是布尔值，所以使用对象
      classes () {
        return {
          active: this.active,
          disabled: this.disabled,
          vertical2: this.direction === 'vertical'
        }
      }
    },
    created () {
      // 绑定 update:selecte 事件，触发时修改active属性
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      // 绑定点击事件，触发update:selected事件
      onClick () {
        if (this.disabled) { return }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    }
  }
</script>
<style lang="scss" scoped>
  $blue: blue;
  $disabled-text-color: grey;
  .tabs-item {
    flex-shrink: 0;
    padding: 0 1em;
    cursor: pointer;
    height: 100%;
    display: flex;
    align-items: center;
    &.active {
      color: $blue;
      font-weight: bold;
    }
    &.disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
    &.vertical2 {
      width: 100%;
      height: auto;
      padding: 1em 0;
      justify-content: center;
    }
  }
</style>
