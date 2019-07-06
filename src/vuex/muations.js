import type from './muationType'
let {SET_LOADING} = type



export default {
    [SET_LOADING](state, newValue){
        state.loading = newValue
    }
}