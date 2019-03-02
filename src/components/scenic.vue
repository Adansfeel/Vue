<template>
  <div class="scenic">
    <canvas id="canvasEl" width="100%" height="100%">
    </canvas>
  </div>
</template>

<script>
  window.onload=function(){
    const canvasSreen=document.getElementById('canvasEl');
    const ctx=canvasSreen.getContext('2d');
    //canvas自适应屏幕大小
    canvasSreen.width=document.documentElement.clientWidth;
    canvasSreen.height=document.documentElement.clientHeight;
    //获取随机位置
    var x=Math.floor(Math.random());
    var y=Math.floor(Math.random());
    //判断方向
    var lef=true;rig=true;
    //如果在左边就++，向右运动；在右边就--，向左运动
    function mobile(){
      if(lef){
        x++;
        if(x>=canvasSreen.width-10){
          lef=false;
        }
      }else{
        x--;
        if(x<=0){
          lef=true;
        }
      }
      if(rig){
        y++;
        if(y>=canvasSreen.height-10){
          rig=false;
        }
      }else{
        y--;
        if(y<=0){
          rig=true;
        }
      }

      ctx.beginPath(); //运行到这个函数时，context中止当前的路径，立刻把当前的坐标设置为起点(0,0)，开始绘画
//      ctx.rect(x,y,80,80); //创建矩形
      ctx.arc(x,y,8*Math.PI,100,75,50,0)
      ctx.fillStyle="blue" //矩形样式
      ctx.fill(); //填充当前的图像（路径）,默认颜色是黑色
      ctx.closePath(); //关闭路径，不是结束路径，它只是将路径的终点与起点相连，不是开始一个新路径

    }
    setInterval(function(){
      //绘画前清空页面，才能重复绘画
      ctx.clearRect(0,0,canvasSreen.width,canvasSreen.height);
      mobile();
    },1)
  };
</script>

<style type="text/ecmascript-6">
  div.scenic{
    margin: 0px;
    padding: 0px;
  }
  #canvasEl{
    position: absolute;
    left: 0%;
  }
</style>
