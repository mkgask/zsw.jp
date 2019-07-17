import Vue from 'vue'

import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './routes/index.ts'
import store from './stores/index.ts'
import index from './index.vue'

Vue.use(vuetify)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(index)
})
