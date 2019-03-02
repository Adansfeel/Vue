<!--<template>-->
  <!--<div class="manga">-->
    <!--&lt;!&ndash;<ul>&ndash;&gt;-->
    <!--&lt;!&ndash;<li>&ndash;&gt;-->
    <!--&lt;!&ndash;<img v-for="imgItem in imgList" :src="imgItem.img" alt="" width="100%" height="100%">&ndash;&gt;-->
    <!--&lt;!&ndash;</li>&ndash;&gt;-->
    <!--&lt;!&ndash;</ul>&ndash;&gt;-->
    <!--<canvas id="canvas" width="100%" height="100%"></canvas>-->
  <!--</div>-->

<!--</template>-->

<!--<script>-->
  <!--//  export default{-->
  <!--//    element: '.twoK',-->
  <!--//    data: function () {-->
  <!--//      return {-->
  <!--//        imgList: [],-->
  <!--//        getImgUrl: 'http://image.baidu.com/channel/listjson?pn=0&rn=30&tag1=壁纸&tag2=全部&ie=utf8',-->
  <!--//        header:{'Content-Type': 'application/x-www-form-urlencoded'}-->
  <!--//      }-->
  <!--//    },-->
  <!--//    created: function () {-->
  <!--//      this.getImg()-->
  <!--//    },-->
  <!--//    methods: {-->
  <!--//      getImg: function () {-->
  <!--//        var that = this;-->
  <!--//        that.$http({      //调用接口-->
  <!--//          type: 'GET',-->
  <!--//          dataType:'JSONP',-->
  <!--//          url: this.getImgUrl //this指data-->
  <!--//        }).then(function (response) { //接口返回数据-->
  <!--//          this.imgList = response.data;-->
  <!--//        }, function (error) {-->
  <!--//        })-->
  <!--//      }-->
  <!--//    }-->
  <!--//  }-->
  <!--window.onload=function(){-->
    <!--//封装一个球-->
    <!--class Ball{-->
      <!--constructor(x,y,radius){-->
        <!--this.x=x;-->
        <!--this.y=y;-->
        <!--this.radius=radius; //小球的距离-->
        <!--this.speed = 8;   //设置小球的速度-->
        <!--this.angle = Math.random() * 180;   //设置小球的角度-->
        <!--this.flag=false;-->
      <!--}-->
      <!--draw(ctx){-->
        <!--ctx.arc(this.x,this.y,this.radius,0,8*Math.PI);-->
        <!--ctx.fillStyle='blue';-->
        <!--ctx.fill();-->
      <!--}-->
    <!--}-->

    <!--const canvas = document.getElementById('canvas');-->
    <!--const ctx = canvas.getContext('2d');-->

    <!--//canvas自适应屏幕大小-->
    <!--canvas.width = document.documentElement.clientWidth;-->
    <!--canvas.height = document.documentElement.clientHeight;-->

    <!--ctx.strokeRect(0,0,canvas.width,canvas.height); //绘制矩形-->
    <!--const ball=new Ball(canvas.width/2,canvas.height/2,20);-->
    <!--ball.draw(ctx);-->

    <!--function drawFrame(){-->
      <!--//requestAnimationFrame的使用方法:-->
      <!--// 只需定义一个绘制函数，每一次调用都会刷新小球坐标，然后作为回调函数传递给requestAnimationFrame-->
      <!--window.requestAnimationFrame(drawFrame,canvas);  //专为动画而生-->
      <!--canvas.height=canvas.height;   //画布清空-->

      <!--ctx.strokeRect(0,0,canvas.width,canvas.height); //绘制矩形墙壁-->

      <!--//墙壁碰撞反弹-->
      <!--if(ball.x+ball.radius>canvas.width){-->
        <!--ball.angle=180-ball.angle-->
      <!--}-->
      <!--if(ball.x-ball.radius<0){-->
        <!--ball.angle=-(180+ball.angle)-->
      <!--}-->
      <!--if(ball.y-ball.radius<0||ball.y+ball.radius>canvas.height){-->
        <!--ball.angle=-ball.angle-->
      <!--}-->

      <!--//计算小球下一帧的坐标-->
<!--//      if(ball.x>canvas.width||ball.x<0){-->
<!--//        ball.speed=-ball.speed;-->
<!--//      }-->

<!--//      ball.x+=ball.speed;-->
      <!--ball.x+=ball.speed*Math.cos(ball.angle*Math.PI/180);-->
      <!--ball.x+=ball.speed*Math.sin(ball.angle*Math.PI/180);-->

      <!--ball.draw(ctx); //绘制-->
    <!--}-->
    <!--drawFrame()-->
  <!--};-->

<!--</script>-->

<!--<style type="text/ecmascript-6">-->
  <!--*{-->
    <!--touch-action: none;-->
  <!--}-->
<!--</style>-->
