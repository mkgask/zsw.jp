<template lang="pug">
    v-app#index
        main-nav
        top
        results
</template>

<style lang="sass">
#index
    position: relative
    color: #111
</style>

<script lang="ts">
import mainNav from './main-nav.vue'
import top from './top.vue'
import results from './results.vue'

export default {
    components: {
        mainNav: mainNav,
        top: top,
        results: results
    },

    data: function() {
        return {
        }
    }
}
</script>
