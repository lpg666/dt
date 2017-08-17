<template>
  <div>
    <div class="zg" v-if="zg">
      <lottery :lottery="lottery" :status="status" @close="close"></lottery>
      <div class="gz" v-if="guize">
        <div class="gz_text">
          <p class="p1">答题即可刮奖，每关3道题，全部答对送刮刮乐一次。 <br/>分享活动页面给好友，送刮刮乐一次，直接参与刮奖。 <br/>奖品可以累计。</p>
          <p class="p2">奖品发放:</p>
          <p class="p1" style="margin: 0 .45rem;">消费保将在每周五下午 6点前公布本周的获奖人员名单 ，并联系获奖人员及时发放奖品，奖品以实物为准，快递费用由获奖者承担。</p>
        </div>
        <div class="gz_gb" @click="gzGb"></div>
        <img src="../assets/img/gz.png">
      </div>
      <div class="sz" v-if="shezhi">
        <div class="sz_text">
          <div class="sp_box">
            <div class="sp_box_r">
              <img src=""/>
              <span>
                <p>恒信长盒ECHO-D 电子烟50份</p>
              </span>
            </div>
            <div class="sp_box_l">
              <p class="p1">一等奖</p>
              <p class="p2">价值 198元</p>
            </div>
          </div>
          <div class="sp_box">
            <div class="sp_box_r">
              <img src=""/>
              <span>
                <p>恒信长盒ECHO-D 电子烟50份</p>
              </span>
            </div>
            <div class="sp_box_l">
              <p class="p1">一等奖</p>
              <p class="p2">价值 198元</p>
            </div>
          </div>
          <div class="sp_box">
            <div class="sp_box_r dt">
              <img src=""/>
              <img src=""/>
              <p>恒信长盒ECHO-D 电子烟50份</p>
            </div>
            <div class="sp_box_l">
              <p class="p1">一等奖</p>
              <p class="p2">价值 198元</p>
            </div>
          </div>
        </div>
        <div class="sz_gb" @click="szGb"></div>
        <img src="../assets/img/sz.png">
      </div>
      <div class="huida" v-if="dt">
        <div class="box">
          <div class="yes" v-if="right">
            <img src="../assets/img/dt_yes.png">
            <p class="p1">保保送您一张刮刮乐</p>
            <div class="guaj">
              <span>
                <div class="but" @click="cj">点击抽奖</div>
              </span>
            </div>
            <p class="p2">消费保，您的消费服务管家</p>
          </div>
          <div class="no" v-else>
            <img src="../assets/img/nole.png">
            <div class="but" @click="getIndex">再来一次</div>
            <p class="p1">正确答案为：A</p>
            <p class="p2">消费保，您的消费服务管家</p>
          </div>
        </div>
        <div class="gb"><div class="clickGb" @click="TK"></div></div>
      </div>
    </div>
    <div class="auth" v-if="auth">
      <img src="../assets/img/dt_banner.png">
      <div class="but">关注</div>
    </div>
    <swiper id="swiper-nav" :options="swiperNav" ref="Tswiper">
      <swiper-slide class="list"><img src="../assets/img/dt_banner.png"></swiper-slide>
      <swiper-slide class="list">2</swiper-slide>
      <swiper-slide class="list">3</swiper-slide>
      <swiper-slide class="list">4</swiper-slide>
    </swiper>
    <div class="main">
      <router-link class="my" to="/my">我的奖品</router-link>
      <div class="fx" @click="alertShare">抄近道？直接刮奖点这里<div class="fx_ts" v-if="firstFx">分享有惊喜！大奖等着你</div></div>
    </div>
    <div class="dt">
      <img class="size" src="../assets/img/dt1.png"/>
      <div class="dt_main">
        <div class="title">新修订的《消费者权益保护法》于（ ）正式实施？</div>
        <div class="daan" @click="dtAjax">A. 这是一行答案的行高</div>
        <div class="daan">B. 这是两行答案的行高这是两行答案的行高这是这 这是两行答案的行高</div>
        <div class="daan">C. 这是两行答案的行高这是两行答案的行高这是这 这是两行答案的行高</div>
      </div>
      <div style="clear: both;"></div>
      <swiper id="swiper-name" :options="swiperName" ref="Nswiper">
        <swiper-slide>*王尼玛一分钟前刮中一等奖</swiper-slide>
        <swiper-slide>*王尼玛一分钟前刮中二等奖</swiper-slide>
        <swiper-slide>*王尼玛一分钟前刮中三等奖</swiper-slide>
        <swiper-slide>*王尼玛一分钟前刮中四等奖</swiper-slide>
      </swiper>
    </div>
    <div class="foot">
      <div class="left" @click="gz"><img src="../assets/img/hd.png">活动规则</div>
      <div class="right" @click="sz"><img src="../assets/img/jp.png">奖品设置</div>
    </div>
  </div>
</template>

<script type="text/javascript">
import {mapMutations,mapState} from 'vuex'
import lottery from './lottery'
export default{
  data () {
    return {
        firstFx:true,   //第一次进来的提示分享
        auth:true,      //微信关注
        zg:false,
        guize:false,
        shezhi:false,
        right:false,
        dt:false,
        lottery:false,
        status:false,
        swiperNav:{
            autoplay: 3500,
            autoplayDisableOnInteraction : false,
            setWrapperSize :true,
            paginationClickable :true,
            mousewheelControl : true,
            observeParents:true,
            loop:true,
            effect : 'fade',
        },
        swiperName:{
            loop: true,
            setWrapperSize:true,
            autoplay: 3000,
            speed:3000,
            onlyExternal:true
        }
    }
  },
  components:{
      lottery
  },
  computed:{
      ...mapState([
          'tan',
          'share',
      ])
  },
  methods:{
      ...mapMutations([
          'TAN',
          'SHARE'
      ]),
      gz() {
        document.querySelector('body').style.overflow='hidden';
        this.zg = true;
        this.guize = true;
      },
      gzGb(){
          document.querySelector('body').style.overflow='';
          this.zg = false;
          this.guize = false;
      },
      sz(){
          document.querySelector('body').style.overflow='hidden';
          this.zg = true;
          this.shezhi = true;
      },
      szGb(){
          document.querySelector('body').style.overflow='';
          this.zg = false;
          this.shezhi = false;
      },
      TK(){
          this.zg = false;
          this.dt = false;
          this.right = false;
      },
      close(){
          this.SHARE(false);
          this.right = false;
          this.dt = false;
          this.zg = false;
          this.lottery=false;
          this.status=false;
          this.$router.replace({path:'/index'});
      },
      getIndex(){
          this.zg = false;
          this.dt = false;
          this.right = false;
      },
      dtAjax(){
          this.zg = true;
          this.dt = true;
          this.right = true;
      },
      cj(){
          this.SHARE(true);
          this.lottery=true;
          this.status=true;
      },
      alertShare(){
          if(this.isWebview()){
              if(this.isAndroid()){
                  android.Share();
              }else{
                  window.android.alertShareViewFouction();
              }
          }else{
              this.TAN(true);
          }
      }
  },
  mounted(){
      console.log(this.isWebview());
      if(this.isWebview()){
          this.auth=false;
      }

      const vm = this;
      window.share = function () {
          vm.$router.replace({path:'/wechat'});
      };
  },
  created(){

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .auth{
    overflow: hidden;
    width: 100%;
    height: .67rem;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 9999;
    background: rgba(58,58,58,.6);
    img{
      display: block;
      float: left;
      margin-top: .15rem;
      margin-left: .22rem;
      width: .37rem;
      height: .37rem;
    }
    .but{
      width: 1.02rem;
      height: .42rem;
      border-radius: .05rem;
      border: 1px solid #fff;
      color: #fff;
      font-size: .26rem;
      text-align: center;
      line-height: .40rem;
      float: right;
      margin-right: .22rem;
      margin-top: .13rem;
    }
  }

  .zg{
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    z-index: 999;
    .huida{
      position: relative;
      left: 0;
      .box{
        position: relative;
        .yes{
          padding: 1px;
          .guaj{
            span{
              display: table-cell;
              vertical-align: middle;
              .but{
                margin: 0 auto;
                box-shadow: 1px 2px 8px rgba(0,0,0,.2);
                font-size: .32rem;
                color: #fff;
                text-align: center;
                width: 2.2rem;
                height: .8rem;
                line-height: .8rem;
                display: block;
                border-radius: .4rem;
                background-image:-webkit-linear-gradient(to right, #307BF5, #82C3FF);
                background-image:linear-gradient(to right,#307BF5,#82C3FF);
              }
            }
            display: table;
            margin: 0 auto;
            width: 6rem;
            height: 2.7rem;
            background: url("../assets/img/guaka.png") no-repeat;
            background-size: 100% 100%;
          }
          img{
            width: 3.9rem;
            height: auto;
            display: block;
            margin: 0 auto;
          }
          .p1{
            text-align: center;
            margin-top: .75rem;
            margin-bottom: .8rem;
            font-size: .32rem;
            color: #1D2733;
          }
          .p2{
            width: 100%;
            left: 0;
            bottom: .7rem;
            position: absolute;
            text-align: center;
            font-size: .26rem;
            color: #999;
          }
        }
        .no{
          padding: 1px;
          .p1{
            margin-top: 1.15rem;
            text-align: center;
            font-size: .3rem;
            color: #1D2733;
          }
          .p2{
            width: 100%;
            left: 0;
            bottom: .7rem;
            position: absolute;
            text-align: center;
            font-size: .26rem;
            color: #999;
          }
          .but{
            margin: 0 auto;
            box-shadow: 1px 2px 8px rgba(0,0,0,.2);
            font-size: .32rem;
            color: #fff;
            text-align: center;
            width: 2.2rem;
            height: .8rem;
            line-height: .8rem;
            display: block;
            border-radius: .4rem;
            background-image:-webkit-linear-gradient(to right, #307BF5, #82C3FF);
            background-image:linear-gradient(to right,#307BF5,#82C3FF);
          }
          img{
            width: 3.9rem;
            height: auto;
            display: block;
            margin: .7rem auto;
          }
        }
        margin:.35rem auto 0 auto;
        width: 7.08rem;
        height: 9.75rem;
        background: #fff;
      }
      .gb{
        .clickGb{
          float: left;
          margin-top: .77rem;
          width: .62rem;
          height: .62rem;
        }
        margin: 0 auto;
        width: .62rem;
        height: 1.37rem;
        background: url("../assets/img/box_gb.png") no-repeat;
        background-size: 100%;
      }
    }
    .sz{
      position: relative;
      .sz_text{
        .sp_box{
          margin-bottom: .4rem;
          overflow: hidden;
          width: 100%;
          .sp_box_l{
            border-radius: .05rem 0 0 .05rem;
            text-align: center;
            .p1{
              margin-top: .12rem;
              font-size: .36rem;
              color: #fff;
              line-height: .48rem;
            }
            .p2{
              font-size: .28rem;
              color: #fff;
              line-height: .48rem;
            }
            margin-top: .4rem;
            float: right;
            width: 2.2rem;
            height: 1.2rem;
            background-image:-webkit-linear-gradient(to right, #3498f3, #2887dd);
            background-image:linear-gradient(to right,#3498f3, #2887dd);
          }
          .sp_box_r{
            display: table;
            span{
              display: table-cell;
              vertical-align: middle;
            }
            img{
              margin:.2rem .1rem .2rem .3rem;
              width: 1.6rem;
              height: 1.6rem;
              display: block;
              float: left;
            }
            p{
              font-size: .26rem;
              color: #fff;
              margin-right: .2rem;
            }
            margin-right: .25rem;
            float: right;
            width: 4.35rem;
            height: 2rem;
            background-image:-webkit-linear-gradient(to right, #3498f3, #2887dd);
            background-image:linear-gradient(to right,#3498f3, #2887dd);
          }
          .dt{
            padding-bottom: .2rem;
            display: block;
            overflow: hidden;
            height: auto;
            p{
              text-align: justify;
              float: left;
              display: block;
              width: auto;
              margin: 0 .3rem;
            }
          }
        }
        top: 1.5rem;
        position: absolute;
        left: 50%;
        width: 7.05rem;
        margin-left: -3.525rem;
      }
      >img{
        margin: .35rem auto 0 auto;
        width: 7.05rem;
        height: auto;
        display: block;
      }
      .sz_gb{
        width: .8rem;
        height: .8rem;
        position: absolute;
        left: 50%;
        margin-left: -.4rem;
        top:10.38rem;
      }
    }
    .gz{
      .gz_gb{
        width: .8rem;
        height: .8rem;
        position: absolute;
        left: 50%;
        margin-left: -.4rem;
        top:9.5rem;
      }
      .gz_text{
        .p1{
          display: block;
          margin:.3rem .4rem;
          line-height: .48rem;
          font-size: .28rem;
          color: #fff;
        }
        .p2{
          padding-top: .2rem;
          margin-bottom: .2rem;
          text-indent: .4rem;
          line-height: .48rem;
          font-size: .32rem;
          color: #fff;
        }
        position: absolute;
        left: 50%;
        margin-left: -3.25rem;
        top: 3.15rem;
        width: 6.5rem;
        height: 5.7rem;
      }
      img{
        margin: .35rem auto 0 auto;
        width: 7.05rem;
        height: auto;
        display: block;
      }
    }
  }

  .foot{
    margin-top: .2rem;
    overflow: hidden;
    .left{
      margin-left: .22rem;
      float: left;
    }
    .right{
      margin-right: .22rem;
      float: right;
    }
    a,div{
      padding: .1rem 0;
      display: block;
      img{
        margin-right: .12rem;
        margin-top: .05rem;
        float: left;
        width: .3rem;
        height: .3rem;
      }
      font-size: .3rem;
      color: #317CF5;
    }
  }

  .dt{
    .dt_main{
      width: auto;
      margin:0 .34rem .2rem .34rem;
      .daan{
        text-indent: -1.15em;
        padding-top: .1rem;
        padding-bottom: .1rem;
        padding-left: calc(~'.22rem + 1.15em');
        padding-right: .22rem;
        width: auto;
        line-height: .44rem;
        background: #EFF3F3;
        color: #1D2733;
        font-size: .26rem;
        margin-bottom: .3rem;
      }
      .title{
        margin-bottom: .3rem;
        font-size: .32rem;
        font-weight: bold;
        color: #1D2733;
        line-height: .48rem;
      }
    }
    .size{
      width: 4.6rem;
      display: block;
      margin: .2rem auto;
    }
    margin: 0 auto;
    width: 7.1rem;
    height: auto;
    overflow: hidden;
    box-shadow: 2px 0 .4rem rgba(0,0,0,.12);
  }

  .my{
    margin: .325rem .22rem;
    float: left;
    box-shadow: 1px 2px 8px rgba(0,0,0,.2);
    font-size: .32rem;
    color: #fff;
    text-align: center;
    width: 2.2rem;
    height: .8rem;
    line-height: .8rem;
    display: block;
    border-radius: .4rem;
    background-image:-webkit-linear-gradient(to right, #307BF5, #82C3FF);
    background-image:linear-gradient(to right,#307BF5,#82C3FF);
  }

  .fx{
    .fx_ts{
      background: url("../assets/img/ts.png") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      width: 3.6rem;
      height: .93rem;
      line-height: 1rem;
      text-align: center;
      color: #fff;
      font-size: .26rem;
    }
    padding: 0 .35rem;
    background-clip: padding-box;
    position: relative;
    font-size: .32rem;
    color: #317CF5;
    width: auto;
    margin: .325rem .2rem;
    float: right;
    height: .8rem;
    line-height: .8rem;
    display: block;
    border-radius: .4rem;
    background: url("../assets/img/but_bor.png") no-repeat;
    background-size: 100%;
  }
  .main{
    width: 100%;
    height: 1.45rem;
  }

  #swiper-name{
    margin-bottom: .2rem;
    margin-right: .7rem;
    float: right;
    width: 4rem;
    height: .4rem;
    .swiper-slide{
      text-align: right;
      font-size: .22rem;
      color: #FFA42E;
    }
  }

  .swiper-container{
    width: 100%;
    overflow: hidden;
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal > .swiper-pagination-bullets{
    bottom: 0;
    height: .15rem;
    width: 1.2rem;
    left: 50%;
    margin-left: -.6rem;
  }
  .swiper-pagination-bullet{
    width: .12rem !important;
    height: .12rem !important;
    float: left;
    background: #EAEAEA;
    opacity: 1;
    margin: 0 .06rem !important;
  }
  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #37C078;
  }
  .swiper-slide{
    float: left;
  }
  .swiper-slide img{
    width: 100%;
    display: block;
  }
</style>
