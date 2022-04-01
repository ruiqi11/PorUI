<template>
	<div id='app'>
    <!-- 默认按钮 --> 	
    <por-button>默认按钮</por-button>
      <!-- 带类型的按钮 -->
    <por-button type='primary'>主要按钮</por-button>
    <por-button type='warning'>警告按钮</por-button>
    <por-button type='danger'>危险按钮</por-button>
    <por-button type='success'>成功按钮</por-button>
    <por-button type='info'>信息按钮</por-button>
    <br />
    <br />
    <!-- 带图标的按钮 -->
    <por-button type="primary" icon='icon-shezhi'>设置</por-button>
    <!-- 带右侧图标按钮 -->
    <br />
    <br />
    <por-button type="primary" icon='icon-shezhi' iconPosition='right'>设置</por-button>
    <br />
    <br />
    <por-button type="primary" loading>加载中</por-button>
    <br />
    <br />
    <por-button press>涟漪效果</por-button>
    <button data-color="#66B1FF">
      <span>点击</span>
      <por-canvas globalListen></por-canvas>  
    </button>
    <br />
    <br />
    <por-button-group>
      <por-button icon='icon-back' type="primary" >上一页</por-button>
      <por-button icon='icon-more' type="primary" icon-position='right'>下一页</por-button>
    </por-button-group>
    <br />
    <br />
    <!-- 输入框 -->
    <por-input value="默认样式"></por-input>
    <por-input value="内容提示" title="内容提示"></por-input>
    <por-input value="禁止输入" disabled></por-input>
    <por-input value="只读" readonly></por-input>
    <por-input value="值" error="错误"></por-input>
    <br/>
    <!-- 双向绑定（Vue自有的） -->
    <por-input v-model="value"></por-input>
    <div>
      value: {{value}}
    </div>
  </div>
</template>
<script>
export default {
  data: function(){
    return{
      value: '1'
    }
  }
}
</script>
<style lang='scss' scoped>
button{
  box-sizing: border-box;
  white-space: nowrap;
  outline: none;
  color: #000;
  background-color: #fff;
  font-size: 20px;
  line-height: 1;
  padding: 0.5rem 1.2rem;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  position: relative;
  overflow: hidden;
  cursor: pointer;
  border: solid 1px #ccc;
}
</style>
