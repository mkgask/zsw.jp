<template lang="pug">
    div#main-nav
        a.mainnav_zswjp(href="./") zsw.jp
        a.mainnav_game(href="#Game") Game
        a.mainnav_github(href="#GitHub") GitHub
        a.mainnav_qiita(href="#Qiita") Qiita
        a.mainnav_twitter(href="#Twitter") Twitter
        a.mainnav_movie(href="#Movie") Movie
</template>

<style lang="sass">
#main-nav
    position: absolute
    top: 5%
    left: 0
    width: 90px
    color: #111

#main-nav a
    display: inline-block
    width: 100%
    margin: 0.5em 0
    padding: 0.3em 0 0.3em 1em
    text-decoration: none
    font-family: "Kosugi Maru"

.mainnav_zswjp
    color: #111

.mainnav_game
    background-color: #ff8080
    color: #fff
    box-shadow: 3px 3px 3px #ffb0b0

.mainnav_github
    background-color: #111
    color: #fff
    box-shadow: 3px 3px 3px #666

.mainnav_qiita
    background-color: #80ff80
    color: #111
    box-shadow: 3px 3px 3px #b0ffb0

.mainnav_twitter
    background-color: #8080ff
    color: #fff
    box-shadow: 3px 3px 3px #b0b0ff

.mainnav_movie
    background-color: #ffff80
    color: #111
    box-shadow: 3px 3px 3px #ffffb0
</style>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
});
</script>
