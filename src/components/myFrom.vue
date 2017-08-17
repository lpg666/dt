<template>
    <div style="height: 100vh; background: #F6F7F9; padding-top: .35rem;">
        <div class="box">
            <div><span>姓名</span><input type="text" name="" v-model.trim="name" placeholder="联系人名字" /></div>
            <div><span>手机号</span><input type="number" name="" v-model.number="mobile" placeholder="11位手机号" /></div>
            <div style="height: auto;"><span>地址</span><textarea v-model.trim="address" rows="3" placeholder="详细邮寄地址"></textarea></div>
        </div>
        <div v-if="alert" class="alert">{{text}}</div>
        <div class="but" @click="but">提交</div>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                name:'',
                mobile:'',
                address:'',
                text:'',
                alert:false,
                re:false
            }
        },
        methods:{
            but(){
                this.$router.replace({path:'/my'});
                if(this.name.length<=0){
                    this.text='名字不能为空';
                    this.alert=true;
                    setTimeout(this.delbut,1500);
                }else if(!/^[\u4e00-\u9fa5]+$/.test(this.name)){
                    this.text='名字格式错误';
                    this.alert=true;
                    setTimeout(this.delbut,1500);
                }else if(this.mobile.length<=0){
                    this.text='手机号不能为空';
                    this.alert=true;
                    setTimeout(this.delbut,1500);
                }else if(!(/^1[3|4|5|7|8]\d{9}$/.test(this.mobile))){
                    this.text='手机号格式不对';
                    this.alert=true;
                    setTimeout(this.delbut,1500);
                }else if(this.address.length<=0){
                    this.text='邮寄地址不能为空';
                    this.alert=true;
                    setTimeout(this.delbut,1500);
                }else if(this.re==false){
                    this.re=true;
                    this.axios.get('')
                        .then(res =>{

                            console.log(res);
                        })
                        .catch(err => {
                            this.text='网络错误';
                            this.alert=true;
                            setTimeout(this.delbut,1500);
                        })
                }
            },
            delbut(){
                this.alert=false;
                this.text='';
            }
        }
    }
</script>

<style lang="less" scoped>
    .alert{
        padding: .1rem .2rem .14rem .2rem;
        color: #fff;
        font-size: .3rem;
        border-radius: .1rem;
        background: rgba(0,0,0,.7);
        width: auto;
        height: auto;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
    .but{
        margin: 1rem auto;
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
        padding-bottom: .2rem;
        width: 100%;
        height: auto;
        background: #fff;
        div{
            textarea{
                font-family: "Microsoft Yahei";
                height: auto !important;
                margin-top: .26rem !important;
                width: calc(~'100% - 1.57rem') !important;
                float: left;
                font-size: .28rem;
            }
            input{
                float: left;
                width: calc(~'100% - 1.35rem');
                height:calc(~'.9rem - 1px');
                font-size: .28rem;
            }
            span{
                float: left;
                display: block;
                width: 1.35rem;
                height: .9rem;
                line-height: .9rem;
                font-size: .28rem;
                color: #1D2733;
            }
            overflow: hidden;
            height: .9rem;
            line-height: .9rem;
            margin-left: .22rem;
            border-bottom: 1px solid #CCCCCC;
        }
        div:last-child{
            border: none;
        }
    }
</style>