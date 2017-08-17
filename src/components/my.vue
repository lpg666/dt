<template>
    <div>
        <swiper id="swiper-nav" :options="swiperNav" ref="Tswiper">
            <swiper-slide class="list"><img src="../assets/img/dt_banner.png"></swiper-slide>
            <swiper-slide class="list">2</swiper-slide>
            <swiper-slide class="list">3</swiper-slide>
            <swiper-slide class="list">4</swiper-slide>
        </swiper>
        <div class="title">
            <div class="t_l">我的奖品</div>
            <div class="but">编辑资料</div>
        </div>
        <div class="my_jp">
            <div class="box">
                <div class="box_top">
                    <div class="status status1">未寄发</div>
                    <img class="sp_tu" src="../assets/img/j1.png">
                    <div class="main">
                        <img src="../assets/img/j1.png">
                        <p class="p1">中奖时间：2017年09月20日 11:42:23</p>
                        <p class="p2">恒信长盒ECHO-D电子烟</p>
                        <p class="p2">价值 198元</p>
                    </div>
                </div>
            </div>
            <div class="box">
                <div class="box_top">
                    <div class="status status2">已寄发</div>
                    <img class="sp_tu" src="../assets/img/j2.png">
                    <div class="main">
                        <img src="../assets/img/j2.png">
                        <p class="p1">中奖时间：2017年09月20日 11:42:23</p>
                        <p class="p2">恒信长盒ECHO-D电子烟</p>
                        <p class="p2">价值 198元</p>
                    </div>
                </div>
                <div class="box_bot"><span></span>物流单号：中通快递2345678932</div>
            </div>
        </div>
        <div class="info">
            <p class="p1"><span>＊</span>请填写真实的个人资料，保保将在活动结束后给您寄发奖品</p>
            <div class="box">
                <p><span>姓&nbsp;&nbsp;&nbsp;名：</span> 邵果</p>
                <p><span>手机号：</span> 13521605311</p>
                <p style="overflow: hidden;"><span style="float: left;">地&nbsp;&nbsp;&nbsp;址：</span><span style="line-height:.45rem; width: calc(100% - 4em - .4rem); float: left; margin-left: .1rem">广东省深圳市南山区松坪村朗山路中景马 商业城消费保</span></p>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
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
            }
        }
    }
</script>


<style lang="less" scoped>
    .info{
        width: 100%;
        padding-bottom: .8rem;
        .box{
            padding: 1px 0;
            width: 7.05rem;
            height: auto;
            margin: 0 auto;
            box-shadow: 0 0 .4rem rgba(0,0,0,.12);
            p{
                span{
                    display: inline-block;
                    width: 4em;
                }
                margin: .25rem 0 .25rem .5rem;
                font-size: .28rem;
                color: #1D2733;
            }
        }
        .p1{
            span{
                color: #317CF5;
            }
            padding: .35rem 0;
            text-align: center;
            font-size: .24rem;
            color: #1D2733;
        }
    }
    .my_jp{
        width: 100%;
        .box{
            .box_bot{
                span{
                    float: left;
                    width: calc(~'100% - .22rem');
                    margin-left: .22rem;
                    display: block;
                    border-top: 1px solid rgba(204,204,204,.5);
                }
                text-indent: .22rem;
                line-height: .7rem;
                background: #fff;
                width: 100%;
                font-size: .24rem;
                color: #999;
            }
            .box_top{
                overflow: hidden;
                .main{
                    .p2{
                        font-weight: bold;
                        line-height: .4rem;
                        font-size: .28rem;
                        color: #1D2733;
                    }
                    .p1{
                        margin: .25rem 0;
                        font-size: .24rem;
                        color: #999;
                    }
                    img{
                        width: 1.1rem;
                        display: block;
                        margin-top: .1rem;
                    }
                    float: right;
                    width: calc(~'100% - 2.42rem');
                }
                .status1{
                    background: rgba(33,33,33,.8);
                }
                .status2{
                    background: rgba(245,91,49,.8);
                }
                .status{
                    position: absolute;
                    left: 0;
                    top: .4rem;
                    width: 1.2rem;
                    height: .4rem;
                    text-align: center;
                    line-height: .38rem;
                    color: #fff;
                    font-size: .26rem;
                }
                .sp_tu{
                    width: 2.2rem;
                    height: 2.2rem;
                    display: block;
                    float: left;
                }
                padding: .4rem .22rem;
                position: relative;
                background: #fff;
            }
            background: #F6F7F9;
            padding-bottom: .2rem;
        }
    }
    .title{
        .but{
            margin:.3rem .22rem .3rem 0;
            float: right;
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
        .t_l{
            font-weight: bold;
            height: 1.4rem;
            line-height: 1.4rem;
            margin-left: .22rem;
            float: left;
            font-size: .32rem;
            color: #1D2733;
        }
        width: 100%;
        height: 1.4rem;
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