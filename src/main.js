// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/index'
import './assets/js/rem'
import store from './store/'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import FastClick from 'fastclick'

Vue.use(Router);
Vue.use(VueAxios,axios);
Vue.use(VueAwesomeSwiper);

Vue.config.productionTip = false;
/*实例化FastClick*/
if('addEventListener' in document){                           //document.addEventListener == true
    document.addEventListener('DOMContentLoaded',function () {  //document.addEventListener("事件名称", 函数, false);
        FastClick.attach(document.body);                        //如果为true事件执行顺序为 addEventListener ---- 标签的onclick事件 ---- document.onclick　
    },false);                                                   //如果为false事件的顺序为 标签的onclick事件 ---- document.onclick  ---- addEventListener
}


const router = new Router({
    //mode: 'history',
    routes,
});

/* eslint-disable no-new */
new Vue({
  store,
  router,
}).$mount('#app');
