<template>
  <div class="set">
    <p>用户登录</p>
    <mt-field label="用户名" placeholder="请输入用户名"></mt-field>
    <mt-field label="密码" placeholder="请输入密码" type="password"></mt-field>

    <mt-button type="primary" size="large">登录</mt-button>
    <router-link to="/register">
      <mt-button type="danger" size="large">注册</mt-button>
    </router-link>

    <div class="vBox">
      <mt-button v-on:click.native="openClose">关于我们</mt-button>
      <mt-popup v-model="popupVisible" position="bottom" modal="false">
        <child></child>
      </mt-popup>
    </div>

  </div>

</template>
<style type="text/ecmascript-6">

  .mint-button{
    touch-action:none
  }

  .set p {
    position: relative;
    top: 25px;
    margin: 50px 0 50px 0;
    font-size: 35px;
    font-variant: small-caps;
    font-family: 华文琥珀;
  }

  .set>button.mint-button--primary {
    margin: 30px 0 30px 0;
  }

  .mint-popup-bottom {
    bottom: 250px;
    border-radius: 5px;
    width: 50%;
    height: auto;
    padding: 5px 0 5px 0;
  }

  .mint-popup-bottom .copyright-text span {
    padding: 5px;
  }

  .vBox .mint-button{
    margin-top: 350px;
  }
</style>
<script>
  export default{
    element: '.vBox',
    data: function () {
      return {
        popupVisible: false
      }
    },
    methods: {
      openClose: function openClose() {
        this.popupVisible = true;
      }
    },
    components: {
      child: {
        template: "<span class='copyright-text'>" +
        "<span>©2018&nbsp;Adansfeel&nbsp;</span>" +
        "</br>" +
        "<a href='#'>意见反馈&nbsp;</a>" + "|" +
        "<a href='#'>&nbsp;帮助</a>" +
        "</br>" +
        "<span>京ICP证030173号&nbsp;</span>" +
        "</span>"
      }
    }
  }
</script>
