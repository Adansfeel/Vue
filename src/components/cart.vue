<template>
  <div class="cart">
    <mt-swipe :auto="3000">
      <mt-swipe-item>
        <img src="../assets/img/cart.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/manga.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/scenic.jpg" alt="">
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/img/lady.jpg" alt="">
      </mt-swipe-item>
    </mt-swipe>

    <div class="page-search" id="box">
        <mt-search v-model="value" cancel-text="取消" placeholder="搜索" :result="filterResult">
        </mt-search>
    </div>
  </div>


</template>
<style type="text/ecmascript-6">
  img{
    width: 100%;
    height: 100%;
  }
  .cart .mint-swipe{
    height: 200px;
    color: #fff;
    font-size: 30px;
    text-align: center;
  }
  .cart .mint-swipe-item{
    line-height: 200px;
  }
  .page-swipe-desc{
    text-align: center;
    color: #666;
    margin-bottom: 5px;
  }
  /*.contianer{*/
    /*margin-top: 30px;*/
  /*}*/
  #box .mint-search .mint-search-list .mint-search-list-warp{
    margin-top: 220px;
  }
</style>
<script>
  export default{
    element:'#box',
    data(){
      return{
        value:'',
        defaultResult:[
          'Apple',
          'Banana',
          'Orange',
          'Durian',
          'Lemon',
          'Peach',
          'Cherry',
          'Berry',
          'Core',
          'Fig',
          'Haw',
          'Melon',
          'Plum',
          'Pear',
          'Peanut',
          'Other'
        ]
      }
    },
    computed:{
      filterResult(){
        return this.defaultResult.filter(value => new RegExp(this.value, 'i').test(value));
      }
    }
  }
</script>
