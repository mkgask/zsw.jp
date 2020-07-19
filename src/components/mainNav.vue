<template lang="pug">
    nav#nav(
        :class="[isMenuEnabled ? 'active' : 'inactive']"
    )
        v-btn.nav_pickup(
            ripple=true, block=true,
            :class="class_pickup"
            @click="select('pickup')"
        ) Pickup

        v-btn.nav_latest(
            ripple=true, block=true,
            :class="class_latest"
            @click="select('latest')"
        )
            span.main Latest
            span.sub (All)

        v-btn.nav_game(
            ripple=true, block=true,
            :class="class_game"
            @click="select('game')"
        ) Game

        v-btn.nav_app(
            ripple=true, block=true,
            :class="class_app"
            @click="select('app')"
        ) App

        v-btn.nav_movie(
            ripple=true, block=true,
            :class="class_movie"
            @click="select('movie')"
        ) Movie

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

<style scoped lang="stylus" src="./styles/mainNav.styl"></style>

<style scoped lang="stylus">
use('utils/yaml.js')
contents = yaml('src/components/styles/mainNav.yml')

for key, styles in contents
    #nav .nav_{key}
        right: styles.right
        background: styles.background
        color: styles.color

contents_sp = yaml('src/components/styles/mainNav_sp.yml')

@media (max-width: 850px)
    for key, styles in contents_sp
        #nav .nav_{key}
            right: styles.right
            bottom: styles.bottom
            background: styles.background
            color: styles.color
</style>

<style lang="stylus">
@media (max-width: 850px)
    .v-btn__content
        padding-left 5%
        justify-content left
</style>

<style scoped lang="stylus" src="./styles/mainNav_latest.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_game.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_app.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_service.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_pickup.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_movie.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_link.styl"></style>
<style scoped lang="stylus" src="./styles/mainNav_menu.styl"></style>

<script lang="ts">
export default {
    data: function () {
        return {
            isMenuEnabled: false,
            selected: 'menu',
            prev_selected: ''
        }
    },

    computed: {
        class_latest: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'latest') return 'active'
            return 'deactive'
        },

        class_game: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'game') return 'active'
            return 'deactive'
        },

        class_app: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'app') return 'active'
            return 'deactive'
        },

        class_service: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'service') return 'active'
            return 'deactive'
        },

        class_pickup: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'pickup') return 'active'
            return 'deactive'
        },

        class_movie: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'movie') return 'active'
            return 'deactive'
        },

        class_link: function () {
            if (this.selected === 'menu') return 'default'
            if (this.selected === 'link') return 'active'
            return 'deactive'
        }
    },

    mounted: function () {
        this.$store.watch(
            () => this.$store.getters['routes/get_route'],
            (val, old) => {
                this.prev_selected = val
                this.routeUpdate(val)
            }
        )

        this.routeUpdate(this.$store.getters['routes/get_route'])
    },

    methods: {
        select: function (s = '') {
            if (s === 'menu') {
                this.routeUpdate(s)
                return
            }

            this.$router.push(s)
        },

        menuEnable: function () {
            this.isMenuEnabled = !this.isMenuEnabled
            if (!this.isMenuEnabled) this.selected = this.prev_selected
        },

        routeUpdate: function (s) {
            this.selected = s
            this.menuEnable()
        }
    }
}
</script>
