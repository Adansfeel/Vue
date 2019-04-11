<template>
  <div class="twoK">
    <!--顶部导航栏-->
    <nav class="navbar navbar-default navbar-fixed-top">
      <div class="container">
        <div class="navbar-header">
          <a href="#" class="navbar-brand logo"></a>
          <button type="button" class="btn navbar-toggle" data-toggle="collapse" data-target="#menu" >
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div id="menu" class="navbar-collapse collapse">
          <ul class="nav navbar-nav">
            <li class="dropdown">
              <a href="#" data-toggle="dropdown">产品 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">系统和设备</a></li>
                <li class="divider"></li>
                <li><a href="#">处理器</a></li>
                <li class="divider"></li>
                <li><a href="#">主板和套件</a></li>
                <li class="divider"></li>
                <li><a href="#">芯片组</a></li>
                <li class="divider"></li>
                <li><a href="#">FPGAs和可编程的设备</a></li>
                <li class="divider"></li>
                <li><a href="#">电源解决方案</a></li>
                <li class="divider"></li>
                <li><a href="#">内存和存储</a></li>
                <li class="divider"></li>
                <li><a href="#">服务器产品</a></li>
                <li class="divider"></li>
                <li><a href="#">网络和I/O</a></li>
                <li class="divider"></li>
                <li><a href="#">无线</a></li>
                <li class="divider"></li>
                <li><a href="#">软件和服务</a></li>
                <li class="divider"></li>
                <li><a href="#">英特尔网关</a></li>
                <li class="divider"></li>
                <li><a href="#">技术</a></li>
                <li class="divider"></li>
                <li><a href="#">购买</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown">解决方案 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">企业和IT</a></li>
                <li class="divider"></li>
                <li><a href="#">主题和应用</a></li>
                <li class="divider"></li>
                <li><a href="#">行业</a></li>
                <li class="divider"></li>
                <li><a href="#">合作伙伴</a></li>
                <li class="divider"></li>
                <li><a href="#">技术提示与技巧</a></li>
                <li class="divider"></li>
                <li><a href="#">游戏</a></li>
                <li class="divider"></li>
                <li><a href="#">运动</a></li>
                <li class="divider"></li>
                <li><a href="#">教育工作者</a></li>
                <li class="divider"></li>
                <li><a href="#">新闻与活动</a></li>
                <li class="divider"></li>
                <li><a href="#">开发人员解决方案</a></li>
                <li class="divider"></li>
                <li><a href="#">硬件开发人员</a></li>
                <li class="divider"></li>
                <li><a href="#">软件开发人员</a></li>
                <li class="divider"></li>
                <li><a href="#">FPGA开发人员</a></li>
              </ul>
            </li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown">支持 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="#">产品支持</a></li>
                <li class="divider"></li>
                <li><a href="#">英特尔&reg;FPGA支持</a></li>
                <li class="divider"></li>
                <li><a href="#">下载和驱动程序</a></li>
                <li class="divider"></li>
                <li><a href="#">保修</a></li>
                <li class="divider"></li>
                <li><a href="#">开发者支持</a></li>
                <li class="divider"></li>
                <li><a href="#">英特尔投资</a></li>
                <li class="divider"></li>
                <li><a href="#">企业责任</a></li>
                <li class="divider"></li>
                <li><a href="#">联系支持人员</a></li>
              </ul>
            </li>
          </ul>

          <ul class="nav navbar-nav navbar-right">
            <li><a href="#">China(简体中文)</a></li>
            <li class="dropdown">
              <a href="#" data-toggle="dropdown">登录</a>
              <div class="dropdown-menu">
                <div class="panel panel-default">
                  <div class="panel-body">
                    <h3>用户登录</h3>
                    <form action="">
                      <div class="form-group">
                        <label for="uname" class="sr-only">用户名:</label>
                        <input id="uname" type="text" class="form-control" placeholder="用户名">
                      </div>
                      <div class="form-group">
                        <label for="upwd" class="sr-only">密码:</label>
                        <input id="upwd" type="text" class="form-control" placeholder="密码">
                      </div>
                      <div class="form-group"><p>确定登录表明您同意我们的使用条款！</p></div>
                      <div class="form-group">
                        <input type="button" value="登录" class="btn btn-info btn-sm">
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </li>
          </ul>

          <form action="" class="navbar-form navbar-right">
            <div class="form-group has-feedback">
              <label for="search" class="sr-only">搜索</label>
              <input id="search" type="text" class="form-control" placeholder="搜索">
              <span class="glyphicon glyphicon-search form-control-feedback"></span>
            </div>
          </form>
        </div>
      </div>
    </nav>

    <!--中间主体-->
    <div id="main">
      <div class="container">
        <h2>欢迎来到英特尔 &reg;</h2>
        <div class="row">
          <div class="col-md-8 col-xs-12">
            <div class="masking-parent">
              <img src="../assets/img/intel.web.864.486.1.jpg" class="img-responsive" alt="">
              <div class="masking-text">
                <h3>全新第八代智能英特尔&reg;酷睿™处理器</h3>
                <p>借助第八代智能英特尔&reg;酷睿™处理器家族的新增功能，纵享您最喜欢的节目，将游戏提升至更高水平，或是尽情释放创造力。</p>
                <a href="#" class="btn btn-info btn-xs">立即探索全新第八代智能英特尔&reg;酷睿™处理器</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="row">
              <div class="col-md-12 col-sm-6 col-xs-12">
                <div class="masking-parent">
                  <img src="../assets/img/intel.web.368.207.1.jpg" class="img-responsive" alt="">
                  <div class="half-mask" data-toggle="mask">
                    <h4>完成任务更多，等待时间更少</h4>
                    <p>
                      采用英特尔&reg;傲腾™内存的第八代智能英特尔&reg;酷睿™i5+/i7+/i9+处理器平台作为一个超
                      快速响应平台，经过专门优化，能够按您的方式工作，从而跟上您的数字需求步伐。
                    </p>
                    <br>
                    <a href="#">了解更多&gt;&gt;</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-6 col-xs-12">
                <div>
                  <div class="media">
                    <div class="media-left">
                      <img src="../assets/img/intel.web.81.108.jpg" alt="">
                    </div>
                    <div class="media-body">
                      <ul class="list-unstyled">
                        <li><a href="#">英特尔&reg; 酷睿 i9 处理器</a></li>
                        <li><a href="#">才貌双全的家用一体机</a></li>
                        <li><a href="#">英特尔&reg; 傲腾™ 内存</a></li>
                        <li><a href="#">Thunderbolt™ 3 技术</a></li>
                        <li><a href="#">英特尔 Unite® 解决方案</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-xs-12 col-md-push-4">
            <div class="masking-parent">
              <img src="../assets/img/intel.web.864.486.2.jpg" class="img-responsive" alt="">
              <div class="masking-text">
                <h3>升级制胜组合 <br>8代智能英特尔&reg;酷睿™处理器 + Windows 10 致力企业变革</h3>
                <p>借助第八代智能英特尔&reg;酷睿™处理器家族的新增功能，纵享您最喜欢的节目，将游戏提升至更高水平，或是尽情释放创造力。</p>
                <a href="#" class="btn btn-info btn-xs">了解更多</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12 col-md-pull-8">
            <div class="row">
              <div class="col-md-12 col-sm-6 col-xs-12">
                <div>
                  <div class="media">
                    <ul class="list-unstyled">
                      <li><a href="#">英特尔® 博锐™ 平台</a></li>
                      <li><a href="#">面向现代企业的解决方案</a></li>
                      <li><a href="#">数字化转型的基础</a></li>
                      <li><a href="#">借助新一代企业 PC 提升客户体验</a></li>
                      <li><a href="#">英特尔® 博锐™ 平台经济案例</a></li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="col-md-12 col-sm-6 col-xs-12">
                <div>
                  <img src="../assets/img/intel.web.368.207.2.jpg" class="img-responsive" alt="">
                  <div class="half-mask" data-toggle="mask">
                    <h4>商机不等待，换电脑趁现在</h4>
                    <p>
                      升级至搭载英特尔&reg;八代酷睿™处理器的全新电脑，节约您的公司开销，并减少低效工作的时间。
                    </p>
                    <br>
                    <a href="#">了解更多&gt;&gt;</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8 col-xs-12">
            <div class="masking-parent">
              <img src="../assets/img/intel.web.864.486.3.jpg" class="img-responsive" alt="">
              <div class="masking-text">
                <h3>新至强 <br> 决胜数据未来</h3>
                <p>
                  BE READY FORIT TRANSFORMATION <br>
                  英特尔&reg;至强®可扩展处理器是未来就绪的基础，用于支持敏捷、高性能和超高的基础架构，旨在满足当今数据驱动的数字化。
                </p>
                <a href="#" class="btn btn-info btn-xs">了解更多</a>
              </div>
            </div>
          </div>
          <div class="col-md-4 col-xs-12">
            <div class="row">
              <div class="col-md-12 col-sm-6 col-xs-12">
                <div>
                  <img src="../assets/img/intel.web.368.207.3.jpg" class="img-responsive" alt="">
                  <div class="half-mask" data-toggle="mask">
                    <h4>人工智能，从至强®开始</h4>
                    <p>
                      人工智能(AI)可以帮助您的企业将数据价值发挥到极致。快来一探究竟，看运行在CPU架构上的AI如何为您做得更多。
                    </p>
                    <br>
                    <a href="#">了解更多&gt;&gt;</a>
                  </div>
                </div>
              </div>
              <div class="col-md-12 col-sm-6 col-xs-12">
                <div>
                  <div class="media">
                    <ul class="list-unstyled">
                      <li><a href="#">升级办公利器 &gt;</a></li>
                      <li><a href="#">数据中心芯可能 &gt;</a></li>
                      <li><a href="#">大数据 &gt;</a></li>
                      <li><a href="#">云计算和云服务 &gt;</a></li>
                      <li><a href="#">案例中心 &gt;</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--底部版权栏-->
    <div class="footer">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-12">
            <div class="row">
              <div class="col-sm-6">
                <h3>关于英特尔</h3>
                <ul class="list-unstyled">
                  <li><a href="#">公司信息</a></li>
                  <li><a href="#">投资者信息</a></li>
                  <li><a href="#">联系我们</a></li>
                  <li><a href="#">新闻发布室</a></li>
                  <li><a href="#">网站地图</a></li>
                  <li><a href="#">工作</a></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h3>支持</h3>
                <ul class="list-unstyled">
                  <li><a href="#">支持主页</a></li>
                  <li><a href="#">下载中心</a></li>
                  <li><a href="#">产品规范(ARK)</a></li>
                  <li><a href="#">保修支持</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-md-6 col-sm-12">
            <div class="row">
              <div class="col-sm-6">
                <h3>法律声明</h3>
                <ul class="list-unstyled">
                  <li><a href="#">使用条款</a></li>
                  <li><a href="#">商标</a></li>
                  <li><a href="#">隐私条款</a></li>
                  <li><a href="#">Cookie</a></li>
                </ul>
              </div>
              <div class="col-sm-6">
                <h3>社交</h3>
                <ul class="list-unstyled">
                  <li><a href="#">英特尔社区&gt;</a></li>
                  <li><a href="#">英特尔中国微博&gt;</a></li>
                  <li><a href="#">英特尔芯片汇微博&gt;</a></li>
                  <li><a href="#">英特尔商用频道微博&gt;</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
  div.twoK{
    font-family: "SimHei", "Simsun", arial, sans-serif;
    background: #0062a8;
    margin-bottom: 25px;
    touch-action: none;
  }

  div.twoK h2{
    color: #ffffff;
  }
  div.twoK .glyphicon,body div.twoK .panel{
    color: #000000;
  }
  div.twoK .logo{
    background: url("../assets/img/hdr-spr.jpg") no-repeat;
    display: inline-block;
    width: 63px;
    height: 42px;
    margin: 10px 0 0 5px;
  }
  div.twoK .panel{
    width: 300px;
    height: 250px;
  }
  #main .container{
    padding-top: 50px;
  }
  #main .row {
    margin-bottom: 25px;
  }
  #main .row .media li {
    line-height: 1.8rem;
  }
  #main .mask-text {
    position: absolute;
    bottom: 10px;
    left: 40px;
    width: 85%;
    color: #f7f7f7;
  }
  #main div.half-mask {
    background-color: rgba(0, 0, 0, 0.7);
    width: 92%;
    height: 100%;
    position: absolute;
    top: 80%;
    left: 16px;
    transition: top 200ms;
  }
  #main div.half-mask:hover {
    top: 0px;
  }
  #main div.col-md-12.col-sm-6.col-xs-12 {
    overflow: hidden;
    margin-bottom: 20px;
  }
  #main div.col-md-12.col-sm-6.col-xs-12 h4,
  #main div.col-md-12.col-sm-6.col-xs-12 p,
  #main div.col-md-12.col-sm-6.col-xs-12 a {
    color: #ffffff;
    margin-left: 8px;
  }
  #main div.media {
    background: #0071c5;
    padding: 30px 0 30px 30px;
  }
  .footer {
    min-height: 100px;
    background: #f3f3f3;
  }
  .footer h4 {
    color: #000000;
  }
  .footer a {
    color: #5a8fd4;
  }
  .footer a:hover {
    color: #9ADDF7;
  }
  .footer li {
    line-height: 2rem;
  }
</style>

<script>
  //Unable to preventDefault inside passive event listener due to target being treated as passive.报错
  window.addEventListener('touchmove', function(){ passive: false })
</script>

