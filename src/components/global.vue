<template lang="pug">
</template>

<style lang="stylus">
html
    scroll-behavior: smooth

.application--wrap
    position relative

.section
    position: absolute
    top: 5%
    left: 5%
    height: 90%
    width: 80%
    background-color: #fff
    animation: section_active_animate 1.2s

.section_body
    display: flex
    justify-content: left
    align-items: center
    flex-wrap: wrap
    overflow: scroll
    height: 100%
    padding: 1%

@keyframes section_active_animate
    0%
        opacity: 0
    100%
        opacity: 1

</style>

<script lang="ts">
export default {}
</script>
