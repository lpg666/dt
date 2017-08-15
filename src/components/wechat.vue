<template>
    <div style="width: 100%; height:100vh;">
        <img src="../assets/img/fx_yes.png">
        <p class="p1">保保送您一张刮刮乐</p>
        <div class="ggl">
            <span>
                <div class="but">点击抽奖</div>
            </span>
        </div>
        <p class="p2">消费保，您的消费服务管家</p>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        }
    }
</script>


<style lang="less" scoped>
    .ggl{
        display: table;
        span{
            display: table-cell;
            vertical-align: middle;
            .but{
                box-shadow: 1px 2px 8px rgba(0,0,0,.2);
                border-radius: .4rem;
                background-image:-webkit-linear-gradient(to right, #307BF5, #82C3FF);
                background-image:linear-gradient(to right,#307BF5,#82C3FF);
                margin: 0 auto;
                width: 2.2rem;
                height: .8rem;
                color: #fff;
                font-size: .32rem;
                text-align: center;
                line-height: .8rem;
            }
        }
        width: 6rem;
        height: 2.66rem;
        background: url("../assets/img/guaka.png") no-repeat;
        background-size: 100% 100%;
        margin: 0 auto;
    }
    img{
        width: 4.3rem;
        height: auto;
        display: block;
        margin: 0 auto;
    }
    .p1{
        text-align: center  ;
        margin: .75rem 0;
        font-size: .32rem;
        line-height: .48rem;
        color: #1D2733;
    }
    .p2{
        font-size: .26rem;
        color: #999;
        text-align: center;
        width: 100%;
        position: absolute;
        bottom: .7rem;
        left: 0;
    }
</style>