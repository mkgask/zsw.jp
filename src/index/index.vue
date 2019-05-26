<template>
    <div id="index">
        <main-nav></main-nav>
    </div>
</template>

<style lang="sass">
#index
    color: #111
</style>

<script lang="ts">
import mainNav from './main-nav.vue'

export default {
    components: {
        mainNav: mainNav
    },

    data: function() {
        return {
            greeting: 'Hello'
        }
    }
}
</script>
