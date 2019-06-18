<template lang="pug">
    div#MainNav
        v-btn.mainnav_zswjp(
            href="#Top", ripple=true, block=true,
            :class="[selected == 'top' ? 'selected' : '']",
            @click="select('top')"
        ) zsw.jp
        v-btn.mainnav_results(
            href="#Results", ripple=true, block=true,
            :class="[selected == 'results' ? 'selected' : '']",
            @click="select('results')"
        ) Results
        v-btn.mainnav_game(
            href="#Game", ripple=true, block=true,
            :class="[selected == 'game' ? 'selected' : '']",
            @click="select('game')"
        ) Game
        v-btn.mainnav_movie(
            href="#Movie", ripple=true, block=true,
            :class="[selected == 'movie' ? 'selected' : '']",
            @click="select('movie')"
        ) Movie
        v-btn.mainnav_github(
            href="#GitHub", ripple=true, block=true,
            :class="[selected == 'github' ? 'selected' : '']",
            @click="select('github')"
        ) GitHub
        v-btn.mainnav_qiita(
            href="#Qiita", ripple=true, block=true,
            :class="[selected == 'qiita' ? 'selected' : '']",
            @click="select('qiita')"
        ) Qiita
        v-btn.mainnav_twitter(
            href="#Twitter", ripple=true, block=true,
            :class="[selected == 'twitter' ? 'selected' : '']",
            @click="select('twitter')"
        ) Twitter
</template>

<style scoped lang="sass">
#MainNav
    position: fixed
    z-index: 1000
    top: 5%
    left: 0
    width: 90px
    font-family: "Kosugi Maru"

#MainNav a
    text-transform: capitalize

#MainNav a.mainnav_zswjp
    text-transform: lowercase

#MainNav a.mainnav_zswjp.selected
    border-right: 10px #111 solid

#MainNav a.mainnav_results.selected
    border-right: 10px #111 solid

#MainNav a.mainnav_game
    background-color: #ff4040
    color: #fff

#MainNav a.mainnav_game.selected
    border-right: 10px #f00 solid

#MainNav a.mainnav_movie
    background-color: #ff60ff
    color: #fff

#MainNav a.mainnav_movie.selected
    border-right: 10px #f0f solid

#MainNav a.mainnav_github
    background-color: #24292e
    color: #fff

#MainNav a.mainnav_github.selected
    border-right: 10px #fff solid

#MainNav a.mainnav_qiita
    background-color: #55c500
    color: #fff

#MainNav a.mainnav_qiita.selected
    border-right: 10px #0f0 solid

#MainNav a.mainnav_twitter
    background-color: #1da1f2
    color: #fff

#MainNav a.mainnav_twitter.selected
    border-right: 10px #00f solid
</style>

<script lang="ts">
import Vue from 'vue';

export default {

    data: function() {
        return {
            selected: ''
        }
    },

    methods: {
        select: function(s = '') {
            this.selected = s
        }
    }
}
</script>
