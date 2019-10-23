export default {
    namespaced: true,

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
}
