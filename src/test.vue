<template lang="pug">
    v-app#index
        test_top
        test_nav
</template>

<style scoped lang="sass">
#index
    position: relative
    color: #111
</style>

<script lang="ts">
import global from './components/global.vue'
import test_top from './components/test_top.vue'
import test_nav from './components/test_nav.vue'

export default {
    components: {
        test_top: test_top,
        test_nav: test_nav,
    },

    data: function() {
        return {
        }
    }
}
</script>
