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
    <por-button-group>
      <por-button icon='icon-back' type="primary" >上一页</por-button>
      <por-button icon='icon-more' type="primary" icon-position='right'>下一页</por-button>
    </por-button-group>
  </div>
</template>
