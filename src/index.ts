import Vue from 'vue'
import index from './index.vue'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(vuetify)

new Vue({
    el: '#app',
    render: h => h(index)
})
