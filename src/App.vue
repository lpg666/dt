<template>
  <div>
    <share v-if="share" style="display:none;">#share$$$title**这么多奖，感觉身体被掏空-消费保两周年，答题抽奖“保”你嗨翻##url**http://dt.xfb315.com/#/index##icon**http://m.xfb315.com/wap/img/share_icon.jpg##desc**普及维权知识，增强维权意识，维权投诉就找消费保-消费保您的消费服务管家</share>
    <share v-else style="display:none;">#share$$$title**消费保两周年，答题抽奖“保”你嗨翻-消费保您的消费服务管家##url**http://dt.xfb315.com/#/index##icon**http://m.xfb315.com/wap/img/share_icon.jpg##desc**普及维权知识，增强维权意识，维权投诉就找消费保</share>
    <div id="wechat" class="tc" v-if="tan" @click="gbWx">
      <img src="./assets/img/wechat.png">
    </div>
    <transition name="router-fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import {mapState,mapMutations} from 'vuex'
export default {
    data(){
        return{

        }
    },
    computed:{
        ...mapState([
            'tan',
            'share',
        ])
    },
    methods:{
        ...mapMutations([
           'TAN'
        ]),
        gbWx(){
          this.TAN(false);
        }
    },
    mounted(){
        let url = encodeURIComponent(window.location.href.split('#')[0]);
        this.axios.get('/v4/weixin?url='+url)
            .then(res =>{
                console.log(res.data);
                wx.config({
                    debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: res.data.appId, // 必填，公众号的唯一标识
                    timestamp: res.data.timestamp, // 必填，生成签名的时间戳
                    nonceStr: res.data.nonceStr, // 必填，生成签名的随机串
                    signature: res.data.signature,// 必填，签名，见附录1
                    jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'chooseImage', 'previewImage', 'uploadImage', 'downloadImage'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                });
            });
    }
}
</script>

<style lang="less">
  @import "./style/common";
  .router-fade-enter-active, .router-fade-leave-active {
    transition: opacity .3s;
  }
  .router-fade-enter, .router-fade-leave-active {
    opacity: 0;
  }
  .tc{
    z-index: 10000;
    height: 100%;
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.8);
    img{
      float: right;
      width: 5.2rem;
      height: auto;
      display: block;
      margin: .1rem .45rem 0 0;
    }
  }
</style>
