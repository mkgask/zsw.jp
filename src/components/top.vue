<template lang="pug">
    <v-parallax id="top" :height="windowHeight" :src="require('@/images/starlight.jpg')" v-resize="onWindowResize">
        section.top_box(:class="class_top")
            h1.site_tile zsw.jp
            span.site_description 本サイトは みかげあすか のポートフォリオサイトです。
    </v-parallax>
</template>

<style scoped lang="stylus" src="./styles/top.styl"></style>

<script lang="ts">
export default {
    data: function() {
        return {
            selected: '',
            windowHeight: 0
        }
    },

    mounted: function() {
        this.onWindowResize()
    },

    computed: {
        class_top: function() {
            if (this.selected == 'menu') return 'active'
            return 'deactive'
        }
    },

    watch: {
        '$store.getters.get_route': 'routeUpdate'
    },

    methods: {
        onWindowResize: function() {
            this.windowHeight = window.innerHeight
        },

        routeUpdate: function(s) {
            this.selected = s
        }
    }

}
</script>
