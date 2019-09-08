import Vue from 'vue'
import VueRouter from 'vue-router'

import menu from '../pages/menu.vue'
import latest from '../pages/latest.vue'
import link from '../pages/link.vue'
import game from '../pages/game.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        { path: '/', component: menu },
        { path: '/menu', component: menu, name: 'menu' },
        { path: '/latest', component: latest, name: 'latest' },
        { path: '/link', component: link, name: 'link' },
        { path: '/game', component: game, name: 'game' }
    ]
})
