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
    <br>
    <br>
    <!-- tabs -->
    <por-tabs :selected="selected">
      <por-tabs-head>
        <por-tabs-item name="1">1</por-tabs-item>
        <por-tabs-item name="2">2</por-tabs-item>
        <por-tabs-item name="3" disabled>3</por-tabs-item>
      </por-tabs-head>
      <por-tabs-body>
        <por-tabs-pane name="1">content 1</por-tabs-pane>
        <por-tabs-pane name="2">content 2</por-tabs-pane>
        <por-tabs-pane name="3">content 3</por-tabs-pane>
      </por-tabs-body>
    </por-tabs>
    <por-tabs :selected="selected" direction="vertical">
      <por-tabs-head>
        <por-tabs-item name="1">1</por-tabs-item>
        <por-tabs-item name="2">2</por-tabs-item>
      </por-tabs-head> 
      <por-tabs-body>
        <por-tabs-pane name="1">content 1</por-tabs-pane>
        <por-tabs-pane name="2">content 2</por-tabs-pane>
      </por-tabs-body>
    </por-tabs>
    <br/>
    <br/>
    <!-- 定时模式模式 -->
    <por-button @click="$toast('点击弹出提示')" border>上方弹出</por-button>
    <por-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</por-button>
    <por-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</por-button>
    <br/>
    <br/>
    <!-- 设置关闭按钮 -->
    <por-button @click="onClickButton" autoClose="false">上方弹出</por-button>
    <br>
    <br>
    <!-- 支持 HTML -->
    <por-button @click="onClickButton" autoClose="false">上方弹出</por-button>
    <br/>
    <br/>
    <!-- tabs -->
    <por-popover>
      <por-button>上方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="bottom">
      <por-button>下方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="left">
      <por-button>左边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="right">
      <por-button>右边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <br>
    <br>
     <!-- hover模式 -->
     <por-popover trigger="hover">
      <por-button>上方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="bottom" trigger="hover">
      <por-button>下方弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="left" trigger="hover">
      <por-button>左边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <por-popover position="right" trigger="hover">
      <por-button>右边弹出</por-button>
      <template slot="content">
        弹出内容
      </template>
    </por-popover>
    <br>
    <br>
    <por-layout style="color: white; margin-bottom:50px;">
      <por-header style="height: 50px; background:lightskyblue;">
        header
      </por-header>
      <por-content style="height: 100px; background:deepskyblue;">
        content
      </por-content>
      <por-footer style="height: 50px; background:lightskyblue;">
        footer
      </por-footer>
    </por-layout>
    <br>
    <br>
    <!-- 布局layout -->
    <por-layout style="color: white; overflow:hidden; margin-bottom:50px;">
      <por-sider style=" background:#ddd; width:200px; color: black;">
        sider
      </por-sider>
      <por-layout>
        <por-header style="height: 50px; background:lightskyblue;">
          header
        </por-header>
        <por-content style="height: 100px; background:deepskyblue;">
          content
        </por-content>
        <por-footer style="height: 50px; background:lightskyblue;">
          footer
        </por-footer>
      </por-layout>
    </por-layout>
  </div>
</template>
<script>
export default {
  data(){
    return{
      value: '1',
      selected: '1'
    }
  },
  methods: {
    onClickButton () {
      this.$toast('你知道我在等你吗？', {
        closeButton: {
          text: '知道了',
          callback: () => {
            console.log('他说知道了')
          }
        }
      })
    }
  }
}
</script>
<style lang='scss' scoped>
  .por-toast {
    z-index: 30;
  }
// button{
//   box-sizing: border-box;
//   white-space: nowrap;
//   outline: none;
//   color: #000;
//   background-color: #fff;
//   font-size: 20px;
//   line-height: 1;
//   padding: 0.5rem 1.2rem;
//   margin: 0;
//   display: inline-flex;
//   justify-content: center;
//   align-items: center;
//   vertical-align: middle;
//   position: relative;
//   overflow: hidden;
//   cursor: pointer;
//   border: solid 1px #ccc;
// }
</style>
