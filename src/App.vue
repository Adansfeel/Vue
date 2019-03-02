<template>
  <div id="app">
    <!-- 引入公用的头部header组件 -->
    <headed></headed>

    <div class="contianer">
        <!-- 路由中的几个组件在这里被渲染，默认被渲染的为第一个组件，也就是home组件  -->
        <router-view class="animated bounceInLeft"></router-view>
    </div>

  </div>
</template>
<style type="text/ecmascript-6">
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
  }

  .contianer {
    /*margin-top: 30px;*/
  }

/*router动画*/
  .Router{
    position: absolute;
    width: 100%;
    transition: all 08s ease;
    top:40px;
  }
  .slide-left-enter,.slide-right-leave-active{
    opacity: 0;
    transform: translate(100%,0);
  }
  .slide-right-enter,.slide-left-leave-active{
    opacity: 0;
    transform: translate(-100%,0);
  }

</style>
<script>
  //引入各个组件
  import headed from './components/header.vue'

  import manga from './components/manga.vue'

  import home from './components/home.vue'

  import cart from './components/cart.vue'

  import lady from './components/lady.vue'

  import setting from './components/setting.vue'

  import other from './components/other.vue'

  import city from './components/city.vue'

  import scenic from './components/scenic.vue'

  import twoK from './components/twoK.vue'

  import register from './components/register.vue'
  //输出header组件
  export default{
    name: "App",
    components: {
      'headed': headed,
      'manga': manga,
      'home': home,
      'cart': cart,
      'lady': lady,
      'setting': setting,
      'other': other,
      'city': city,
      'scenic': scenic,
      'twoK': twoK,
      'register': register
    }
  }


</script>
