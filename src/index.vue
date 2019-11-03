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

        this.$store.commit('routes/route_change', route)
        this.changeSiteMetaData(this.$route)
    },

    watch: {
        '$route': 'routeUpdate'
    },

    methods: {
        routeUpdate: function (to, from) {
            this.changeSiteMetaData(to)
            this.$store.commit('routes/route_change', to.name)
        },

        changeSiteMetaData: function (route) {
            if (typeof route.meta.title !== 'undefined') this.changePageTitle(route.meta.title)
            if (typeof route.meta.description !== 'undefined') this.changePageDescription(route.meta.description)
            if (typeof route.name !== 'undefined') this.changeOgUrl(route.name)
            if (typeof route.meta.image !== 'undefined') this.changeOgImage(route.meta.image)
        },

        changePageTitle: function (s) {
            let page_title = document.title
            let pos = page_title.indexOf(' - ')

            if (pos < 0) {
                page_title = s + ' - ' + page_title
            } else {
                page_title = s + page_title.substr(pos)
            }

            document.title = page_title
            this.setContentMetaProperty('og:title', page_title)
        },

        changePageDescription: function (s) {
            this.setContentMetaProperty('og:description', s)
            document.querySelector('meta[name=description]').setAttribute('content', s)
        },

        changeOgUrl: function (s) {
            if (s && s !== 'index') {
                this.setContentMetaProperty('og:url', window.location.origin + '/#/' + s)
            } else {
                this.setContentMetaProperty('og:url', window.location.origin)
            }
        },

        changeOgImage: function (s) {
            if (s && s !== 'index') {
                this.setContentMetaProperty('og:image', window.location.origin + '/' + s)
            }
        },

        setContentMetaProperty: function (property_name, content) {
            document.querySelector("meta[property='" + property_name + "']").setAttribute('content', content)
        }
    }

}
</script>
