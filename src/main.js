// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Router from 'vue-router'
import routes from './router/index'
import './assets/js/rem'
import store from './store/'
import axios from 'axios'
import Qs from 'qs'
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

Vue.prototype.isWebview= function(){
    let u = navigator.userAgent;
    let isWebview = u.indexOf('xiaofeibao') > -1 || u.indexOf('xfb-development-to-gavinwead-2017-05-25') > -1; //android终端
    return isWebview;
}

Vue.prototype.isAndroid= function(){
    let u = navigator.userAgent;
    let isAndroid = u.indexOf('xfb-development-to-gavinwead-2017-05-25') > -1 || u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
    return isAndroid;
}

Vue.prototype.isWeiXin = function(){
    let ua = window.navigator.userAgent.toLowerCase();
    if(ua.match(/MicroMessenger/i) == 'micromessenger'){
        return true;
    }else{
        return false;
    }
}

const router = new Router({
    //mode: 'history',
    routes,
});

if (process.env.NODE_ENV == 'development') {

}else if(process.env.NODE_ENV == 'production'){
    axios.defaults.baseURL = 'http://api.xfb315.com';
    axios.defaults.transformRequest = function (data) {
        return Qs.stringify(data);
    };
}

router.beforeEach((to, from, next) => {
    store.commit('SHARE',false);
    if(to.meta.aR){
        if(store.state.userInfo){
            next();
        }else{
            next({path:'/login'});
        }
    }else{
        next();
    }

});

/* eslint-disable no-new */
new Vue({
  store,
  router,
}).$mount('#app');

window.getSign=function (sign) {
    alert(sign);
    if(sign){
        store.commit('RECORD_USERINFO',sign);
        //存用户信息
    }else{
        store.commit('RECORD_USERINFO',null);
    }
    store.commit('SIGN',sign);
};

