<template lang="pug">
    div#nav
        v-btn.nav_latest(
            ripple=true, block=true,
            :class="[selected == 'latest' ? 'selected' : '']"
            @click="select('latest')"
        ) Latest
        v-btn.nav_game(
            ripple=true, block=true,
            :class="[selected == 'game' ? 'selected' : '']"
            @click="select('game')"
        ) Game
        v-btn.nav_movie(
            ripple=true, block=true,
            :class="[selected == 'movie' ? 'selected' : '']"
            @click="select('movie')"
        ) Movie
        v-btn.nav_app(
            ripple=true, block=true,
            :class="[selected == 'app' ? 'selected' : '']"
            @click="select('app')"
        ) App
        v-btn.nav_link(
            ripple=true, block=true,
            :class="[selected == 'link' ? 'selected' : '']"
            @click="select('link')"
        ) Link
        v-btn.nav_menu(
            ripple=true, block=true,
            :class="[selected == 'link' ? 'selected' : '']"
            @click="select('menu')"
        ) Menu
</template>

<style scoped lang="sass">
#nav
    font-family: "Kosugi Maru"

#nav button
    text-transform: capitalize
    width: 100vh
    max-width: 100vw
    transform: rotate(-75deg)
    padding: 1em 0
    font-size: 1.6em

#nav .nav_latest
    position: fixed
    z-index: 1000
    right: 0
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)
    color: #111

#nav .nav_game
    position: fixed
    z-index: 1000
    right: -5%
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 128, 128, 1) 0%, rgba(255, 128, 128, 1) 50%, rgba(255, 128, 128, 0) 100%)
    color: #fff

#nav .nav_movie
    position: fixed
    z-index: 1000
    right: -10%
    bottom: 5%
    background: linear-gradient(to right,  rgba(128, 255, 128, 1) 0%, rgba(128, 255, 128, 1) 50%, rgba(128, 255, 128, 0) 100%)
    color: #111

#nav .nav_app
    position: fixed
    z-index: 1000
    right: -15%
    bottom: 5%
    background: linear-gradient(to right,  rgba(128, 128, 255, 1) 0%, rgba(128, 128, 255, 1) 50%, rgba(128, 128, 255, 0) 100%)
    color: #fff

#nav .nav_link
    position: fixed
    z-index: 1000
    right: -20%
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 128, 0, 1) 0%, rgba(255, 128, 0, 1) 50%, rgba(255, 128, 0, 0) 100%)
    color: #111

#nav .nav_menu
    position: fixed
    z-index: 1000
    right: -25%
    bottom: 5%
    background: linear-gradient(to right,  rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)
    color: #fff

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
