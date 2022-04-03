<template>
  <div class="message" :class="{error}">
    <!-- 给input绑定原生事件，当这些事件触发时：
    去触发自定义事件，将value作为参数传入父组件中-->
    <input
      type="text"
      :value="value"
      :title="title"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <div v-if="error">
      <!-- <icon name="error" fill="danger" border></icon> -->
      <por-icon icon="icon-cuowu"></por-icon>
      <span class="error-message">{{error}}</span>
    </div>
  </div>
</template>
<script>
import Icon from './icon'
export default {
  name: "por-input",
  components: {
    'por-icon': Icon
  },
  props: {
    value: {
      type: String
    },
    // 鼠标放置显示的提示
    title: {
      type: String
    },
    // 禁用
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../styles/_var.scss'; 

.message {
  font-size: $font-size;
  display: inline-flex;
  align-items: center;
  > :not(:last-child) {
    margin-right: 0.5rem;
  }
  > input {
    padding: 0 8px;
    height: $input-height;
    border: 2px solid $color-primary;
    font-size: inherit;
    &:hover {
      border-color: $border-hover-color;
    }
    &:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $color-primary;
    }
    &[disabled],
    &[readOnly] {
      border-color: $color-info;
      color: $color-info;
      cursor: not-allowed;
    }
    &[readOnly]:focus {
      outline: none;
      box-shadow: inset 0 1px 3px $color-info;
    }
    &[disabled] {
      opacity: 0.5;
    }
  }
  &.error {
    > input {
      border: 2px solid $color-danger;
      color: $color-danger;
      &:hover {
        border-color: $red-hover-color;
      }
      &:focus {
        outline: none;
        box-shadow: inset 0 1px 3px $color-danger;
      }
    }
  }
  .error-message {
    color: $color-danger;
    line-height: 1rem;
  }
}
</style>
