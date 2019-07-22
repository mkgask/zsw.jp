import Vue from 'vue'

import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

import router from './routes/index.ts'
import store from './stores/index.ts'
import index from './index.vue'

Vue.use(vuetify)

const app = new Vue({
    router,
    store,
    render: h => h(index)
})

app.$mount('#app')
