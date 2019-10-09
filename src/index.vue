<template lang="pug">
    v-app#index
        mainNav
        top
        router-view
</template>

<style scoped lang="stylus">
#index
    position: relative
    color: #111
</style>

<style lang="stylus" src="./components/styles/global.styl"></style>

<script lang="ts">
import mainNav from './components/mainNav.vue'
import top from './components/top.vue'

export default {
    components: {
        mainNav: mainNav,
        top: top
    },

    data: function () {
        return {
        }
    },

    mounted: function () {
        let route = 'menu'

        if (
            typeof this.$route.name !== 'undefined' &&
            this.$route.name !== null &&
            this.$route.name !== false &&
            this.$route.name !== 'undefined' &&
            this.$route.name !== 'null' &&
            this.$route.name !== 'false'
        ) {
            route = this.$route.name
        }

        this.$store.commit('route_change', route)
    },

    watch: {
        '$route': 'routeUpdate'
    },

    methods: {
        routeUpdate: function (to, from) {
            this.$store.commit('route_change', to.name)
        }
    }
}
</script>
