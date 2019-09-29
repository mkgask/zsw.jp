<template lang="pug">
    div.lightboxlike
        slot
        div.lightboxlike_background(v-show="show",@click="onClose")
            span.lightboxlike_close_button
            img.lightboxlike_image(:src="image")
</template>

<style scoped lang="stylus">
.lightboxlike_background
    position fixed
    z-index 110
    width 100%
    height 100%
    top 0
    left 0
    background-color rgba(0, 0, 0, 0.85)

.lightboxlike_close_button
    position fixed
    z-index: 120
    top 1%
    right 1%
    width 35px
    height 35px
    border-radius: 50%
    border 1px #ddd solid
    cursor pointer

.lightboxlike_close_button:hover
    background-color: #ddd

.lightboxlike_close_button::before
    content ""
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    margin auto
    width 60%
    height 0
    border-top 1px #ddd solid
    transform rotate(45deg)

.lightboxlike_close_button::after
    content ""
    position absolute
    top 0
    left 0
    right 0
    bottom 0
    margin auto
    width 60%
    height 0
    border-top 1px #fff solid
    transform rotate(-45deg)

.lightboxlike_close_button:hover::before
.lightboxlike_close_button:hover::after
    border-top 1px #111 solid

.lightboxlike_image
    position fixed
    z-index 130
    top 0
    left 0
    right 0
    bottom 0
    margin auto
    max-width 100%
</style>

<script lang="ts">
export default {
    props: [
        'show',
        'image'
    ],

    methods: {
        onClose: function () {
            this.$emit('onLightboxlikeClose')
        }
        /*
        onLightboxlikeOpen: function (path) {
            this.$emit('onLightboxlikeOpen', path)
        }
        */
    }
}
</script>
