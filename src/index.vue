<template lang="pug">
    v-app#index
        mainNav
        top
        router-view
</template>

<style scoped lang="sass">
#index
    position: relative
    color: #111
</style>

<script lang="ts">
import global from './components/global.vue'
import mainNav from './components/mainNav.vue'
import top from './components/top.vue'

export default {
    components: {
        mainNav: mainNav,
        top: top
    },

    data: function() {
        return {
            route: ''
        }
    },

    mounted: function() {
        if (typeof this.$route.name === 'undefined') {
            this.route = ''
        } else {
            this.route = this.$route.name
        }

        console.log('mounted route: ' + this.route)
    },

    watch: {
        '$route': 'routeUpdate'
    },

    methods: {
        routeUpdate: function(to, from) {
            this.route = to.name
            console.log('update route: ' + this.route)
        }
    }
}
</script>
