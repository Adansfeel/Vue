<template>
  <div class="home">
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/twoK">
          <img src="../assets/img/2k.jpg" alt="">
        </router-link>
        <p>2K高清壁纸</p>
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/cart">
          <img src="../assets/img/cart.jpg" alt="">
        </router-link>
        <p>名车豪车</p>
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/lady">
          <img src="../assets/img/lady.jpg" alt="">
        </router-link>
        <p>型男美女</p>
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/manga">
          <img src="../assets/img/manga.jpg" alt="">
        </router-link>
        <p>动漫</p>
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/scenic">
          <img src="../assets/img/scenic.jpg" alt="">
        </router-link>
        <p>自然风景</p>
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/city">
          <img src="../assets/img/city.jpg" alt="">
        </router-link>
        <p>城市风光</p>
      </mt-swipe-item>
    </mt-swipe>
    <mt-swipe :auto="0" :show-indicators="false">
      <mt-swipe-item>
        <router-link to="/other">
          <img src="../assets/img/other.jpg" alt="">
        </router-link>
        <p>其他精选</p>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style type="text/ecmascript-6">
  img {
    width: 100%;
    height: 100%;
  }

  .home .mint-swipe {
    width: 100%;
    height: 200px;
  }

  .home p {
    float: right;
    position: relative;
    bottom: 25px;
    width: 100%;
    height: 25px;
    text-align: center;
    background: #c8c8cd;
    background-color: rgba(0, 0, 0, 0.5);
    color: #FCFCFC;
    padding-top: 2px;
    font-variant: small-caps;
    font-family: 华文琥珀;
  }
</style>
<script>

</script>
