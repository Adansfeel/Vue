// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue';
import './assets/iconfont/iconfont.css'
import animate from '../node_modules/animate.css/animate.css'
import Bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap'
import $ from 'jQuery'
import VueResource from 'vue-resource'
Vue.use(VueResource);
import ajax from 'ajax'
import InfiniteScroll from 'vue-infinite-scroll'
Vue.use(InfiniteScroll);
import Viewer from 'v-viewer'
import '../node_modules/viewerjs/dist/viewer.css'
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    "inline": true,
    "button": true,
    "navbar": true,
    "title": true,
    "toolbar": true,
    "tooltip": true,
    "movable": true,
    "zoomable": true,
    "rotatable": true,
    "scalable": true,
    "transition": true,
    "fullscreen": true,
    "keyboard": true,
    "url": "data-source"
  }
});
Vue.config.productionTip = false;

// 引入router路由
import Router from 'vue-router';
// 引入项目的四个模块组件
import home from './components/home';
import city from './components/city';
import header from './components/header';
import manga from './components/manga';
import other from './components/other';
import scenic from './components/scenic';
import cart from './components/cart';
import lady from './components/lady';
import setting from './components/setting';
import twoK from './components/twoK';
import register from './components/register';


Vue.use(Mint);

// 使用router
Vue.use(Router);
// 定义路由
var routes = [
  {
    path: '/',
    component: home
  },
  {
    path: '/twoK',
    component: twoK
  },
  {
    path: '/city',
    component: city
  },
  {
    path: '/header',
    component: header
  },
  {
    path: '/home',
    component: home
  },
  {
    path: '/lady',
    component: lady
  },
  {
    path: '/manga',
    component: manga
  },
  {
    path: '/other',
    component: other
  },
  {
    path: '/scenic',
    component: scenic
  },
  {
    path: '/cart',
    component: cart
  },
  {
    path: '/register',
    component: register
  },
  {
    path: '/setting',
    component: setting
  }]
// 实例化路由
var vueRouter = new Router({
  routes
})
 //创建和挂载根实例
new Vue({
  el: '#app',
  router: vueRouter,
  template: '<App></App>',
  components: {App}
})

