<template lang="pug">
    v-app#index
        nav
        top
</template>

<style scoped lang="sass">
#index
    position: relative
    color: #111
</style>

<script lang="ts">
import global from './components/global.vue'
import nav from './components/nav.vue'
import top from './components/top.vue'
import pickup from './components/pickup.vue'

export default {
    components: {
        nav: nav,
        top: top
    },

    data: function() {
        return {
        }
    }
}
</script>
