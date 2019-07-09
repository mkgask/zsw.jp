import VueRouter from 'vue-router'

import Latest from '../pages/latest.vue'

export default new VueRouter( {
    mode: 'history',

    routes: [
        { path: '/', component: {} },
        { path: 'latest', component: Latest }
    ]
})
