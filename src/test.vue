<template lang="pug">
    v-app#index
        top
</template>

<style scoped lang="sass">
#index
    position: relative
    color: #111
</style>

<script lang="ts">
import global from './components/global.vue'
import test_top from './components/test_top.vue'

export default {
    components: {
        top: test_top,
    },

    data: function() {
        return {
        }
    }
}
</script>
