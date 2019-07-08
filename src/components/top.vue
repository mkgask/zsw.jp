<template lang="pug">
    <v-parallax id="top" :height="windowHeight" :src="require('@/images/starlight.jpg')" v-resize="onWindowResize">
        div.top_box
            span.site_tile zsw.jp
            span.site_description 本サイトは みかげあすか のポートフォリオサイトです。
    </v-parallax>
</template>

<style scoped lang="sass">
#top
    width: 100vw
    text-align: center

.site_tile
    display: inline-block
    width: 100%
    vertical-align: center
    font-family: 'Gloria Hallelujah', cursive
    font-size: 10em
    color: #fff
    margin-bottom: 0.3em
    animation: top_title_animate 1.2s

.site_description
    width: 100%

.top_box
    padding-bottom: 1em
    margin-top: -40%
    animation: top_box_animate 1.2s

@keyframes top_box_animate
    0%
        margin-top: 0
    100%
        margin-top: -40%

@keyframes top_title_animate
    0%
        margin-bottom: 0.5em
    100%
        margin-bottom: 0.3em

</style>

<script lang="ts">
export default {
    data: function() {
        return {
            windowHeight: 0
        }
    },
/*
    mounted: function() {
        this.windowHeight = window.innerHeight
        window.addEventListener('resize', this.onWindowResize)
    },
*/
    mounted: function() {
        this.onWindowResize()
    },

    methods: {
        onWindowResize: function() {
            this.windowHeight = window.innerHeight
        }
    }

}
</script>
