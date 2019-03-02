<template>
    <div class="other">
      <div class="loader">
        <div class="main">
          <div class="square"><span></span><span></span><span></span></div>
          <div class="square"><span></span><span></span><span></span></div>
          <div class="square"><span></span><span></span><span></span></div>
          <div class="square"><span></span><span></span><span></span></div>
        </div>
      </div>

      <div class="holderCircle">
        <div class="dotCircle">
          <span class="itemDot itemDot1 active" data-tab="1">
            <i>one</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot2" data-tab="2">
            <i>two</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot3" data-tab="3">
            <i>three</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot4" data-tab="4">
            <i>four</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot5" data-tab="5">
            <i>five</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot6" data-tab="6">
            <i>six</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot7" data-tab="7">
            <i>seven</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot8" data-tab="8">
            <i>eight</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot9" data-tab="9">
            <i>nine</i>
            <span class="forActive"></span>
          </span>
          <span class="itemDot itemDot10" data-tab="10">
            <i>ten</i>
            <span class="forActive"></span>
          </span>
        </div>

        <div class="contentCircle">
          <div class="CirItem CirItem1 active">Hello World !</div>
          <div class="CirItem CirItem2">Nice to meet you !</div>
          <div class="CirItem CirItem3">Welcome to our App !</div>
          <div class="CirItem CirItem4">What a nice day today !</div>
          <div class="CirItem CirItem5">Can I help you ?</div>
          <div class="CirItem CirItem6">Protect the environment !</div>
          <div class="CirItem CirItem7">Save resources !</div>
          <div class="CirItem CirItem8">Cherish our earth !</div>
          <div class="CirItem CirItem9">No deal, no deal !</div>
          <div class="CirItem CirItem10">Have a good day !</div>
        </div>
      </div>
    </div>
</template>

<script>

</script>

<style type="text/ecmascript-6">
  div.other{
    width: 100%;
    height: 736px;
    background: #494A5F;
  }
  div.loader{
    height: 150px;
    width: 100%;
  }
  .loader .main{
    background: #fa3663;
    position: absolute;
    top: 10.5%;
    left:50%;
    width: 100%;
    height: 21%;
    margin: 0;
    transform: translate(-50%,-50%);
  }
  .main .square{position: relative}
  .main .square:nth-child(1){margin-left: 0px}
  .main .square:nth-child(2){margin-left: 44px}
  .main .square:nth-child(3){margin-left: 88px}
  .main .square:nth-child(4){margin-left: 132px}
  .square span{
    position: absolute;
    left: 80px;
    height: 36px;
    width: 36px;
    border-radius: 2px;
    background: #ffffff;
  }
  .square span:nth-child(1){top: 15px}
  .square span:nth-child(2){top: 59px}
  .square span:nth-child(3){top: 103px}
  .square span:nth-child(4){top: 147px}
  .square:nth-child(1) span{animation:animsquare1 2s infinite ease-in}
  .square:nth-child(2) span{animation:animsquare1 2s infinite ease-in}
  .square:nth-child(3) span{animation:animsquare1 2s infinite ease-in}
  .square:nth-child(4) span{animation:animsquare1 2s infinite ease-in}
  .square span:nth-child(1){animation-delay:0.00s}
  .square span:nth-child(2){animation-delay:0.15s}
  .square span:nth-child(3){animation-delay:0.30s}
  .square span:nth-child(4){animation-delay:0.45s}

  @keyframes animsquare1{0%,5%,95%,100%{transform:translate(0px,0px) rotate(0deg)}30%,70%{transform:translate(-40px,0px) rotate(-90deg)}}
  @keyframes animsquare1{100%,95%,5%,0%{transform:translate(0px,0px) rotate(-90deg)}70%,30%{transform:translate(40px,0px) rotate(0deg)}}

  @keyframes animsquare2{0%,10%,90%,100%{transform:translate(0px,0px) rotate(0deg)}35%,65%{transform:translate(-40px,0px) rotate(-90deg)}}
  @keyframes animsquare2{100%,90%,10%,0%{transform:translate(0px,0px) rotate(-90deg)}35%,65%{transform:translate(40px,0px) rotate(0deg)}}

  @keyframes animsquare3{0%,15%,85%,100%{transform:translate(0px,0px) rotate(0deg)}40%,60%{transform:translate(-40px,0px) rotate(-90deg)}}
  @keyframes animsquare3{100%,85%,15%,0%{transform:translate(0px,0px) rotate(-90deg)}40%,60%{transform:translate(40px,0px) rotate(0deg)}}

  @keyframes animsquare4{0%,20%,80%,100%{transform:translate(0px,0px) rotate(0deg)}45%,55%{transform:translate(-40px,0px) rotate(-90deg)}}
  @keyframes animsquare4{100%,80%,20%,0%{transform:translate(0px,0px) rotate(-90deg)}45%,55%{transform:translate(40px,0px) rotate(0deg)}}

  div.other .holderCircle::after,div.other .holderCircle::before{
    box-sizing: border-box;
  }
  div.other .holderCircle{
    width: 90%;
    position: relative;
    right: 5px;
  }
  .clearfix::after {
    clear: both;
    padding: 10px;
  }
  .clearfix::before,
     .clearfix:after {
       content: " ";
       display: table;
     }
  div.other .holderCircle{
    color: #D5D6E2;
    font-weight: 500;
    font-size: 1.05em;
    font-family: "Microsoft YaHei", Arial,sans-serif;
  }
  .contentCircle{
    /*width: 200px;*/
    /*height: 200px;*/
    position: relative;
    top:25px;
    left: 5px;
  }
  .contentCircle .CirItem {
    font-size: 16px;
  }
</style>
