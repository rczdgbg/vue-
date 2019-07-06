import type from './muationType'
let {SET_USER_INFO,SET_TOKEN} = type
export default {
    [SET_USER_INFO](state, newValue){
        state.userInfo = newValue
    },
    [SET_TOKEN](state, newValue){
        state.userToken = newValue
    }
}