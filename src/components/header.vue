<template>
    <mt-header fixed>
      <router-link to="/home" slot="left" class="iconfont icon-g_home_on">
        <mt-button></mt-button>
      </router-link>
      <router-link to="/setting" slot="right" class="iconfont icon-set_check">
        <mt-button></mt-button>
      </router-link>
    </mt-header>
</template>

<script>
  export default{
    name:"App",
    data(){
      return{
        selected:''
      }
    }
  }
</script>

<style type="text/ecmascript-6">
  header.mint-header{
    height: 30px;
    /*align-items: center;*/
  }
  #app .mint-header>.mint-header-button{
    height: 42px;
  }
  #app .mint-header>.mint-header-button a{
    text-decoration: none;
  }

</style>
