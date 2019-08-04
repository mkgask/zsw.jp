import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        route: 'menu'
    },

    getters: {
        get_route: state => {
            return state.route
        }
    },

    mutations: {
        route_change (state, r) {
            state.route = r
        }
    }
})
