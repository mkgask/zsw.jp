<template lang="pug">
    v-app#index
        main-nav
        top
        results
</template>

<style scoped lang="sass">
#index
    position: relative
    color: #111
</style>

<script lang="ts">
import global from './components/global.vue'
import mainNav from './components/main-nav.vue'
import top from './components/top.vue'
import results from './components/results.vue'

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
