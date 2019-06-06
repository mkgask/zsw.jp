<template lang="pug">
    v-parallax#top(:height="windowHeight",:src="require('@/images/starlight.jpg')")
        span.site_tile zsw.jp
        span.site_description 本サイトは みかげあすか のポートフォリオサイトです。
</template>

<style scoped lang="sass">
#top
    width: 100vw
    text-align: center

.site_tile
    display: inline-block
    vertical-align: center
    font-family: 'Gloria Hallelujah', cursive
    font-size: 10em
    color: #fff
    margin-bottom: 0.5em
</style>

<script lang="ts">
export default {
    components: {
    },

    data: function() {
        return {
            windowHeight: 0
        }
    },

    mounted: function() {
        this.windowHeight = window.innerHeight
        window.addEventListener('resize', this.onWindowResize)
    },

    methods: {
        onWindowResize: function() {
            this.windowHeight = window.innerHeight
        }
    }

}
</script>
