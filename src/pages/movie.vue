<template lang="pug">
    section#link.section
        div.section_body
            h1.page_title Movie

            v-card.content_box(
                v-for="content, index in list"
                :key="index"
                v-if="index < show_num"
            )
                iframe.content_niconico(
                    v-show="content.type == 'niconico'"
                    scrolling="no"
                    :src="content.src"
                )

            div.pager_box
                span.read_next(
                    @click="readNext"
                    v-show="show_num < list.length"
                ) 次を見る

</template>

<style scoped lang="stylus" src="../components/styles/movie.styl"></style>

<script lang="ts">
export default {
    data: function () {
        return {
            list: {},
            show_num: 8,
            per_page: 8
        }
    },

    mounted: function () {
        this.$data.list = this.$store.getters.get_movie_list
    },

    methods: {
        readNext: function () {
            this.show_num += this.per_page

            this.scroll({
                top: this.$el.offsetTop + 223.2,
                behavior: 'smooth'
            })
        }
    }
}
</script>
