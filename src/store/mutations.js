import {
    RECORD_USERINFO,
    TAN,
    SIGN,
    SHARE

} from './mutation-types.js'

import {setStore,getStore,removeStore} from '../assets/js/mUtils'

export default {
    //记录用户信息
    [RECORD_USERINFO](state, info) {
        state.userInfo = info;
        setStore('userInfo', info);
    },
    [TAN](state,info){
        state.tan = info;
    },
    [SIGN](state,info){
        state.sign = info;
        setStore('sign', info);
    },
    [SHARE](state,info){
        state.share = info;
    },
}