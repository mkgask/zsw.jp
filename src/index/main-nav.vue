<template lang="pug">
    div#main-nav
        v-btn.mainnav_zswjp(href="#Top",ripple=true,block=true) zsw.jp
        v-btn.mainnav_results(href="#Results",ripple=true,block=true) Results
        v-btn.mainnav_game(href="#Game",color="error",ripple=true,block=true) Game
        v-btn.mainnav_movie(href="#Movie",color="warning",ripple=true,block=true) Movie
        v-btn.mainnav_github(href="#GitHub",color="black",ripple=true,block=true,dark) GitHub
        v-btn.mainnav_qiita(href="#Qiita",color="success",ripple=true,block=true) Qiita
        v-btn.mainnav_twitter(href="#Twitter",color="info",ripple=true,block=true) Twitter
</template>

<style scoped lang="sass">
#main-nav
    position: fixed
    z-index: 1000
    top: 5%
    left: 0
    width: 90px
    font-family: "Kosugi Maru"

#main-nav a
    text-transform: capitalize

#main-nav a.mainnav_zswjp
    text-transform: lowercase
    border-right: 10px #999 solid
</style>

<script lang="ts">
import Vue from 'vue';

export default {}
</script>
