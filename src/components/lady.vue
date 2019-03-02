<template>
  <div class="lady" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
    <div v-for="item in data" :key="item.index">
      <viewer class="animated zoomIn">
        <img src="../assets/img/lady.jpg" alt="">
      </viewer>
    </div>
  </div>
</template>
<style type="text/ecmascript-6">
  /*.lady{*/
    /*margin-top: 30px;*/
  /*}*/
  div.animated>img{
    float: left;
    width: 49.4%;
    border: 1px solid #c8c8cd;
  }
</style>
<script>
  export default{
    element:'.lady',
    data(){
      return{
        count:0,
        data:[],
        busy:false
      }
    },
    methods:{
      loadMore:function(){
        this.busy=true;

        setTimeout(() => {
          for (var i=0, j=1; i<j; i++) {
          this.data.push({ name: this.count++ })
        }
          console.log(this.data)
          this.busy = false;
        },200)
      }
    }
  }
</script>
