<template lang="pug">
    v-app#index
        main-nav
        top
</template>

<style lang="sass">
#index
    color: #111
</style>

<script lang="ts">
import mainNav from './main-nav.vue'
import top from './top.vue'

export default {
    components: {
        mainNav: mainNav,
        top: top
    },

    data: function() {
        return {
            greeting: 'Hello'
        }
    }
}
</script>
