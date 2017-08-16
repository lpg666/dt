<template>
    <div>
        <div class="lo" v-if="status">
            <img class="tu1" src="../assets/img/lottery_tu1.png">
            <div class="box">
                <p class="p1">恭喜您</p>
                <p class="p2">获得一等奖</p>
                <p class="p3">价值 198元 恒信长盒ECHO-D电子烟</p>
            </div>
            <div class="but" @click="fx">这么好的事，叫上小伙伴</div>
            <p class="pt">请<router-link to="/from" replace>填写个人资料</router-link>活动结束后，保保将为您寄发奖品</p>
            <p class="foot">消费保，您的消费服务管家</p>
            <div class="gb"><div class="clickGb" @click="getIndex"></div></div>
        </div>
        <div class="nolo" v-else>
            <div class="box">
                <p class="p1">很遗憾</p>
                <p class="p2">未中奖</p>
            </div>
            <div class="but" @click="getIndex">再来一次</div>
            <p class="foot">消费保，您的消费服务管家</p>
            <div class="gb"><div class="clickGb" @click="getIndex"></div></div>
        </div>
    </div>
</template>

<script>
    import {mapMutations,mapState} from 'vuex'

    export default {
        data(){
            return{

            }
        },
        props:['status'],
        computed:{
            ...mapState([
               'tan'
            ])
        },
        methods:{
            ...mapMutations([
               'TAN'
            ]),
            getIndex(){
                this.$router.replace({path:'/index'});
            },
            closeTip(){
                this.$emit('closeTip')
            },
            fx(){
                this.TAN(true);
            }
        }
    }
</script>


<style lang="less" scoped>
    .lo{
        .foot{
            width: 100%;
            position: absolute;
            bottom: .2rem;
            color: #999999;
            text-align: center;
            font-size: .26rem;
        }
        .pt{
            a{
                color: #317CF5;
                text-decoration: underline;
            }
            margin-top: .5rem;
            text-align: center;
            font-size: .26rem;
            color: #1D2733;
        }
        .but{
            text-align: center;
            font-size: .32rem;
            color: #317CF5;
            margin: 0 auto;
            width: 4.3rem;
            height: .9rem;
            line-height: .9rem;
            background: url("../assets/img/lottery_bor.png") no-repeat;
            background-size: 100% 100%;
        }
        .box{
            p{
                text-align: center;
                color: #EE3512;
            }
            .p1{
                margin-bottom: .25rem;
                padding-top: .32rem;
                font-weight: bold;
                font-size: .4rem;
            }
            .p2{
                font-size: .36rem;
                margin-bottom: .25rem;
            }
            .p3{
                font-size: .28rem;
            }
            margin: .65rem auto .35rem auto;
            width: 6rem;
            height: 2.65rem;
            background: url("../assets/img/lottery.png") no-repeat;
            background-size: 100% 100%;
        }
        .tu1{
            width: 5.4rem;
            height: 3rem;
            display: block;
            margin: .35rem auto 0 auto;
        }
        left: 50%;
        margin-left: calc(~'-7.08rem/2');
        position: absolute;
        margin-top: .35rem;
        width: 7.08rem;
        height: 9.75rem;
        background: #fff;
        z-index: 9999;
        .gb{
            .clickGb{
                width: .62rem;
                height: .62rem;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            bottom: -1.37rem;
            margin-left: -.31rem;
            left: 50%;
            position: absolute;
            width: .62rem;
            height: 1.37rem;
            background: url("../assets/img/box_gb.png") no-repeat;
            background-size: 100%;
        }
    }
    .nolo{
        .gb{
            .clickGb{
                width: .62rem;
                height: .62rem;
                position: absolute;
                left: 0;
                bottom: 0;
            }
            bottom: -1.37rem;
            margin-left: -.31rem;
            left: 50%;
            position: absolute;
            width: .62rem;
            height: 1.37rem;
            background: url("../assets/img/box_gb.png") no-repeat;
            background-size: 100%;
        }
        .foot{
            width: 100%;
            position: absolute;
            bottom: .7rem;
            color: #999999;
            text-align: center;
            font-size: .26rem;
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
        .box{
            p{
                text-align: center;
                color: #EE3512;
            }
            .p1{
                margin-bottom: .3rem;
                padding-top: .7rem;
                font-weight: bold;
                font-size: .4rem;
            }
            .p2{
                font-size: .36rem;
            }
            margin: 1.4rem auto .9rem auto;
            width: 6rem;
            height: 2.65rem;
            background: url("../assets/img/lottery.png") no-repeat;
            background-size: 100% 100%;
        }
        left: 50%;
        margin-left: calc(~'-7.08rem/2');
        position: absolute;
        margin-top: .35rem;
        width: 7.08rem;
        height: 9.75rem;
        background: #fff;
        z-index: 9999;
    }
</style>