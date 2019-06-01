<template lang="pug">
    v-parallax#top(height="100%")
        span.site_tile zsw.jp
        span.site_description 本サイトは みかげあすか のポートフォリオサイトです。
</template>

<style lang="sass">
#top
    width: 100vw
    text-align: center
.site_tile
    display: inline-block
    vertical-align: center
    font-family: 'Gloria Hallelujah', cursive
    font-size: 10em
    color: #fff
</style>

<script lang="ts">
export default {
    components: {
    },

    data: function() {
        return {
        }
    }
}
</script>
