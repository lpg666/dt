<template>
    <div>
        <div class="lo" v-if="status">
            111
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
    export default {
        data(){
            return{

            }
        },
        props:['status'],
        methods:{
            getIndex(){
                this.$router.replace({path:'/index'});
            },
            closeTip(){
                this.$emit('closeTip')
            }
        }
    }
</script>


<style lang="less" scoped>
    .lo{
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