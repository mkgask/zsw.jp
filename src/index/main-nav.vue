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
            href="#Game", color="error", ripple=true, block=true,
            :class="[selected == 'game' ? 'selected' : '']",
            @click="select('game')"
        ) Game
        v-btn.mainnav_movie(
            href="#Movie", color="warning", ripple=true, block=true,
            :class="[selected == 'movie' ? 'selected' : '']",
            @click="select('movie')"
        ) Movie
        v-btn.mainnav_github(
            href="#GitHub", color="black", ripple=true, block=true, dark,
            :class="[selected == 'github' ? 'selected' : '']",
            @click="select('github')"
        ) GitHub
        v-btn.mainnav_qiita(
            href="#Qiita", color="success", ripple=true, block=true,
            :class="[selected == 'qiita' ? 'selected' : '']",
            @click="select('qiita')"
        ) Qiita
        v-btn.mainnav_twitter(
            href="#Twitter", color="info", ripple=true, block=true,
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
    border-right: 10px #999 solid
    border-right-color: #999

#MainNav a.mainnav_results.selected
    border-right: 10px #999 solid
    border-right-color: #999

#MainNav a.mainnav_game.selected
    border-right: 10px #999 solid
    border-right-color: #999

#MainNav a.mainnav_movie.selected
    border-right: 10px #999 solid
    border-right-color: #999

#MainNav a.mainnav_github.selected
    border-right: 10px #999 solid
    border-right-color: #999

#MainNav a.mainnav_qiita.selected
    border-right: 10px #999 solid
    border-right-color: #999

#MainNav a.mainnav_twitter.selected
    border-right: 10px #999 solid
    border-right-color: #999
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
