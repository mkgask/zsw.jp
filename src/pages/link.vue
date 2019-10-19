<template lang="pug">
    section#link.section
        div.section_body
            h1.page_title Link

            v-card.content_box(
                v-for="content, index in list",
                :key="index",
                v-if="index < show_num"
            )
                a.content_link(
                    v-show="content.type != 'niconico'"
                    :href="content.url",
                )
                    span.content_image_box
                        img.content_image(:src="content.image")

                    span.content_text_box
                        span.content_title {{content.title}}
                        span.content_body {{content.body}}

                        span.datetime
                            span.firsttime(v-show="content.firsttime") {{content.firsttime}}初出
                            span.updatetime(v-show="content.updatetime") {{content.updatetime}}更新

                iframe.content_niconico(
                    v-show="content.type == 'niconico'",
                    scrolling="no"
                    :src="content.src",
                )

            div.pager_box
                span.read_next(
                    @click="readNext"
                    v-show="show_num < list.length"
                ) 次を見る

</template>

<style scoped lang="stylus" src="../components/styles/link.styl"></style>

<script lang="ts">
export default {
    data: function () {
        return {
            list: [],

            show_num: 10,
            per_page: 10
        }
    },

    mounted: function () {
        this.$data.list = this.$store.getters.get_link_list
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
