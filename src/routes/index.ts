import Vue from 'vue'
import VueRouter from 'vue-router'

import menu from '../pages/menu.vue'
import latest from '../pages/latest.vue'

Vue.use(VueRouter)

export default new VueRouter( {
    mode: 'history',

    routes: [
        { path: '/', component: menu },
        { path: '/menu', component: menu, name: 'menu' },
        { path: '/latest', component: latest, name: 'latest' }
    ]
})