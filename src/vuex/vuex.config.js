import Vue from 'vue'
import Vuex from 'vuex'
//用户的store
import userState from './user/state.js'
import userMuatations from './user/muatations.js'
import userGetter from './user/state.js'
// 公用store
import state from './state.js'
import muatations from './muations.js'
import getter from './getter.js'
import actions from './action.js'



Vue.use(Vuex)
const store = new Vuex.Store({
    state: {...userState,...state},
    mutations: {...userMuatations,...muatations},
    actions,
    getter: {...userGetter, ...getter}
})

export default store