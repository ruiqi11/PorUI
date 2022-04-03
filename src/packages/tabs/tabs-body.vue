<template>
  <div class="tabs-body">
    <slot></slot>
  </div>
</template>
<script>
  export default {
    name: 'PorTabsBody',
    inject: ['eventBus'],
    created() {}
  }
</script>
<style  scoped>
  .tabs-body {
    height: 100%;
  }
</style>
