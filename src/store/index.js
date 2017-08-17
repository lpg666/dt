import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex);

const state = {
    userInfo:'',
    tan:false,
    sign:'',
    share:false,
    login:false
}

export default new Vuex.Store({
    state,
    mutations
})