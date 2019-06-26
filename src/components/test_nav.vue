<template lang="pug">
    div#nav
        v-btn.nav_latest(
            ripple=true, block=true,
            :class="[selected == 'latest' ? 'active' : 'deactive'], [selected == 'menu' ? 'default' : '']"
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
    padding: 1.2em 0
    font-size: 1.6em

#nav .nav_latest.default
    position: fixed
    z-index: 1000
    right: 0
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)
    color: #111
    animation: nav_latest_animate 1.2s

#nav .nav_latest.active
    position: fixed
    z-index: 1000
    right: -30%
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)
    color: #111
    animation: nav_latest_active_animate 1.2s

#nav .nav_latest.deactive
    position: fixed
    z-index: 1000
    right: -30%
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 50%, rgba(255, 255, 255, 0) 100%)
    color: #111
    animation: nav_latest_deactive_animate 1.2s

#nav .nav_game
    position: fixed
    z-index: 1000
    right: -5%
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 96, 96, 1) 0%, rgba(255, 96, 96, 1) 50%, rgba(255, 96, 96, 0) 100%)
    color: #fff
    animation: nav_game_animate 1.2s

#nav .nav_movie
    position: fixed
    z-index: 1000
    right: -10%
    bottom: 5%
    background: linear-gradient(to right,  rgba(96, 255, 96, 1) 0%, rgba(96, 255, 96, 1) 50%, rgba(96, 255, 96, 0) 100%)
    color: #111
    animation: nav_movie_animate 1.2s

#nav .nav_app
    position: fixed
    z-index: 1000
    right: -15%
    bottom: 5%
    background: linear-gradient(to right,  rgba(96, 96, 255, 1) 0%, rgba(96, 96, 255, 1) 50%, rgba(96, 96, 255, 0) 100%)
    color: #fff
    animation: nav_app_animate 1.2s

#nav .nav_link
    position: fixed
    z-index: 1000
    right: -20%
    bottom: 5%
    background: linear-gradient(to right,  rgba(255, 96, 0, 1) 0%, rgba(255, 96, 0, 1) 50%, rgba(255, 96, 0, 0) 100%)
    color: #111
    animation: nav_link_animate 1.2s

#nav .nav_menu
    position: fixed
    z-index: 1000
    right: -25%
    bottom: 5%
    background: linear-gradient(to right,  rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 100%)
    color: #fff
    animation: nav_menu_animate 1.2s

@keyframes nav_latest_animate
    0%
        right: 30%
        opacity: 0
    100%
        right: 0
        opacity: 1

@keyframes nav_latest_active_animate
    0%
        right: 0
        opacity: 1
    100%
        right: -20%
        opacity: 1

@keyframes nav_latest_deactive_animate
    0%
        right: 0
        opacity: 1
    100%
        right: 30%
        opacity: 0

@keyframes nav_game_animate
    0%
        right: 25%
        opacity: 0
    100%
        right: -5%
        opacity: 1

@keyframes nav_movie_animate
    0%
        right: 20%
        opacity: 0
    100%
        right: -10%
        opacity: 1

@keyframes nav_app_animate
    0%
        right: 15%
        opacity: 0
    100%
        right: -15%
        opacity: 1

@keyframes nav_link_animate
    0%
        right: 10%
        opacity: 0
    100%
        right: -20%
        opacity: 1

@keyframes nav_menu_animate
    0%
        right: 5%
        opacity: 0
    100%
        right: -25%
        opacity: 1

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
