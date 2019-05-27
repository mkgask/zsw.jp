import Vue from 'vue'
import index from './index/index.vue'
import vuetify from 'vuetify'

Vue.use(vuetify)

new Vue({
    el: '#app',
    render: h => h(index)
})
