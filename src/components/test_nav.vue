<template lang="pug">
    div#nav
        v-btn.nav_latest(
            ripple=true, block=true,
            :class="class_latest"
            @click="select('latest')"
        ) Latest
        v-btn.nav_game(
            ripple=true, block=true,
            :class="class_game"
            @click="select('game')"
        ) Game
        v-btn.nav_movie(
            ripple=true, block=true,
            :class="class_movie"
            @click="select('movie')"
        ) Movie
        v-btn.nav_app(
            ripple=true, block=true,
            :class="class_app"
            @click="select('app')"
        ) App
        v-btn.nav_link(
            ripple=true, block=true,
            :class="class_link"
            @click="select('link')"
        ) Link
        v-btn.nav_menu(
            ripple=true, block=true,
            class="default"
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

</style>

<style scoped lang="sass" src="./styles/nav_latest.sass">
</style>

<style scoped lang="sass" src="./styles/nav_game.sass">
</style>

<style scoped lang="sass" src="./styles/nav_movie.sass">
</style>

<style scoped lang="sass" src="./styles/nav_app.sass">
</style>

<style scoped lang="sass" src="./styles/nav_link.sass">
</style>

<style scoped lang="sass" src="./styles/nav_menu.sass">
</style>

<script lang="ts">
import Vue from 'vue';

export default {

    data: function() {
        return {
            selected: 'menu'
        }
    },

    computed: {
        class_latest: function() {
            if (this.selected == 'menu') return 'default'
            if (this.selected == 'latest') return 'active'
            return 'deactive'
        },
        
        class_game: function() {
            if (this.selected == 'menu') return 'default'
            if (this.selected == 'game') return 'active'
            return 'deactive'
        },
        
        class_movie: function() {
            if (this.selected == 'menu') return 'default'
            if (this.selected == 'movie') return 'active'
            return 'deactive'
        },
        class_app: function() {
            if (this.selected == 'menu') return 'default'
            if (this.selected == 'app') return 'active'
            return 'deactive'
        },
        
        class_link: function() {
            if (this.selected == 'menu') return 'default'
            if (this.selected == 'link') return 'active'
            return 'deactive'
        }
    },

    methods: {
        select: function(s = '') {
            this.selected = s
        }
    }
}
</script>
