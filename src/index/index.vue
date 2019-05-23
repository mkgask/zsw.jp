<template>
    <div id="index">
        <span>{{greeting}} zsw.jp</span>
    </div>
</template>

<style lang="sass">
#app
    color: #111
</style>

<script lang="ts">
export default {
    data: function() {
        return {
            greeting: 'Hello'
        }
    }
}
</script>
