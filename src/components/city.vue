<template>
  <div class="city">
    <div class="main">
      <ul class="bigImg">
      <li title="0"><img src="../assets/img/2k.jpg" alt="2k"></li>
      <li title="1"><img src="../assets/img/cart.jpg" alt="cart"></li>
      <li title="2"><img src="../assets/img/city.jpg" alt="city"></li>
      <li title="3"><img src="../assets/img/lady.jpg" alt="lady"></li>
      <li title="4"><img src="../assets/img/manga.jpg" alt="manga"></li>
      <li title="5"><img src="../assets/img/scenic.jpg" alt="scenic"></li>
      </ul>

      <ul class="smallImg">
        <li class="active"><img src="../assets/img/2k.jpg" alt="2k"></li>
        <li><img src="../assets/img/cart.jpg" alt="cart"></li>
        <li><img src="../assets/img/city.jpg" alt="city"></li>
        <li><img src="../assets/img/lady.jpg" alt="lady"></li>
        <li><img src="../assets/img/manga.jpg" alt="manga"></li>
        <li><img src="../assets/img/scenic.jpg" alt="scenic"></li>
      </ul>
      <div class="leRi">
        <div class="left"> <</div>
        <div class="right"> ></div>
      </div>
    </div>
  </div>
</template>

<script>
    $(document).ready(function(){
      var liWidth=$(".bigImg li").first().innerWidth();
      var index;

      function changeClass (){
        var index=$(".bigImg li").attr("title");
        //获取第index个.smallImg li增加active，返回清除active
        $(".smallImg li").eq(index).addClass("active").siblings().removeClass("active");
      }

      $(".right").click(function(){
        $(".bigImg").stop(true).animate({"marginLeft":-liWidth},500,function(){
          $(".bigImg li").first().appendTo($(".bigImg"));
          $(".bigImg").css("marginLeft",0);
          changeClass();
        })
      });
      $(".left").click(function(){
        $(".bigImg").css("marginLeft",-liWidth);
        $(".bigImg li").last().prependTo($(".bigImg"));
        $(".bigImg").stop(true).animate({"marginLeft":0},500,function(){
          changeClass();
        })
      });

    })


</script>

<style type="text/ecmascript-6">
  * {
    margin: 0;
    padding: 0;
    list-style: none;
  }

  div.city {
    height: 900px;
    /*background: linear-gradient(135deg,#00b3ee 50%,#c8c8cd 50%);*/
    /*background-size: 42px 42px;*/
    background: #00aeef;
    background-image: linear-gradient(45deg, white 1px, transparent 30px),
    linear-gradient(45deg, white 1px, transparent 50px);
    background-size: 31px 31px;
  }

  div.main {
    width: 375px;
    height: 305px;
    position: relative;
    overflow: hidden;
  }

  div.main .bigImg {
    width: 2250px;
    height: 305px;
  }

  div.main .bigImg li {
    float: left;
    width: 375px;
    height: 305px;
  }

  div.main .bigImg img {
    width: 375px;
    height: 305px;
  }

  div.main > .leRi div {
    position: absolute;
    top: 100px;
    width: 35px;
    height: 35px;
    line-height: 35px;
    font-size: 30px;
    font-weight: bold;
    text-align: center;
    color: #c8c8cd;
    background-color: rgba(0, 0, 0, 0.3);
  }

  div.main > .leRi .right {
    right: 4px;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  div.main > .leRi .left {
    left: 4px;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  div.main .smallImg {
    position: absolute;
    bottom: -12px;
    width: 375px;
    height: 52px;
  }

  div.main .smallImg > li {
    float: left;
    width: 60.5px;
    height: 45px;
    padding: 1px;
    margin: 1px;
  }

  div.main .smallImg > li img {
    width: 100%;
    height: 100%;
  }

  div.main .smallImg > li.active {
    background: snow;
  }
</style>


