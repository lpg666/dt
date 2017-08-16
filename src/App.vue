<template>
  <div>
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
