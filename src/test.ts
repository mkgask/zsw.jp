import Vue from 'vue'
import test from './test.vue'
import vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(vuetify)

new Vue({
    el: '#app',
    render: h => h(test)
})
