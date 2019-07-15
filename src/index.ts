import Vue from 'vue'

import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './route/index.ts'
import index from './index.vue'

Vue.use(vuetify)

new Vue({
    router,
    el: '#app',
    render: h => h(index)
})
