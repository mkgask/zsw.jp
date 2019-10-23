import Vue from 'vue'
import Vuex from 'vuex'
import routes from './routes'
import latest from './latest'
import link from './link'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        routes: routes,
        latest: latest,
        link: link
    }
})
