import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loading: 0,
        istrueScrollTop: false,
        isLogin: 0,
    },
    mutations: {
        changeLogin(state,data){
            state.isLogin = data
        }
    },
    actions: {

    },

})