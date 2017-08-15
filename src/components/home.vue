<template>
  <div>
    <div class="zg" v-if="zg">
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
    </div>
    <!--<head-top>
      <span class="go" slot="go"></span>
      <span class="head_title" slot="title_text">111</span>
    </head-top>-->
    <swiper id="swiper-nav" :options="swiperNav" ref="Tswiper">
      <swiper-slide class="list"><img src="../assets/img/dt_banner.png"></swiper-slide>
      <swiper-slide class="list">2</swiper-slide>
      <swiper-slide class="list">3</swiper-slide>
      <swiper-slide class="list">4</swiper-slide>
    </swiper>
    <div class="main">
      <router-link class="my" to="/my">我的奖品</router-link>
      <router-link class="fx" to="">抄近道？直接刮奖点这里</router-link>
    </div>
    <div class="dt">
      1
    </div>
    <div class="foot">
      <div class="left" @click="gz"><img src="../assets/img/hd.png">活动规则</div>
      <div class="right" @click="sz"><img src="../assets/img/jp.png">奖品设置</div>
    </div>
  </div>
</template>

<script>
import headTop from './header'

export default {
  data () {
    return {
        zg:false,
        guize:false,
        shezhi:false,
        swiperNav:{
            autoplay: 3500,
            autoplayDisableOnInteraction : false,
            setWrapperSize :true,
            paginationClickable :true,
            mousewheelControl : true,
            observeParents:true,
            loop:true,
            effect : 'fade',
        }
    }
  },
  components:{
      headTop
  },
  methods:{
      gz() {
        this.zg = true;
        this.guize = true;
      },
      gzGb(){
          this.zg = false;
          this.guize = false;
      },
      sz(){
          this.zg = true;
          this.shezhi = true;
      },
      szGb(){
          this.zg = false;
          this.shezhi = false;
      },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .zg{
    position: fixed;
    left: 0;
    top: 0;
    background: rgba(0,0,0,.5);
    width: 100%;
    height: 100%;
    z-index: 999;
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
        margin: 1.6rem auto 0 auto;
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
        top:10.4rem;
      }
    }
    .gz{
      .gz_gb{
        width: .8rem;
        height: .8rem;
        position: absolute;
        left: 50%;
        margin-left: -.4rem;
        top:10.75rem;
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
        top: 4.42rem;
        width: 6.5rem;
        height: 5.7rem;
      }
      img{
        margin: 1.6rem auto 0 auto;
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
    margin: 0 auto;
    width: 7.1rem;
    height: auto;
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
