import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'

Vue.use(Vuex)

const state = {
    userInfo:localStorage.getItem('userInfo'),
    tan:false,
    sign:'',
    share:false,
}

export default new Vuex.Store({
    state,
    mutations
})