<template lang="pug">
    div#main-nav
        <a href="./" class="mainnav_zswjp">zsw.jp</a>
        <a href="#Game" class="mainnav_game">Game</a>
        <a href="#GitHub" class="mainnav_github">GitHub</a>
        <a href="#Qiita" class="mainnav_qiita">Qiita</a>
        <a href="#Twitter" class="mainnav_twitter">Twitter</a>
        <a href="#Movie" class="mainnav_moviw">Movie</a>
    </div>
</template>

<style lang="sass">
#main-nav
    color: #111

#main-nav a
    padding: 0.2em 1em

.mainnav_zswjp
    background-color: #111
    color: #fff
    border-right: 2px #333 solid
    border-bottom: 2px #333 solid
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
