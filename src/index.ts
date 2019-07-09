import Vue from 'vue'
import index from './index.vue'
import router from './route/index.ts'

import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(vuetify)

new Vue({
    router,
    el: '#app',
    render: h => h(index)
})
