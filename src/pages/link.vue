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
                    :style="{ backgroundImage: 'url(' + content.image + ')' }"
                )
                    span.content_text
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
            list: [
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask',
                    image: require('@/images/qiita-square.png'),
                    src: '',
                    title: 'Qiita',
                    body: 'Unity, C#, Python, Kivy, Docker, Laravelあたりのことを書いています。',
                    firsttime: '2015/09/16',
                    updatetime: '2018/10/29'
                },
                {
                    type: 'github',
                    url: 'https://github.com/mkgask',
                    image: require('@/images/GitHub_Logo.png'),
                    src: '',
                    title: 'GitHub',
                    body: '色々雑多に、書いたものを置いています。',
                    firsttime: '2015/10/22',
                    updatetime: '2019/08/28'
                },
                {
                    type: 'unityroom',
                    url: 'https://unityroom.com/users/mkgask',
                    image: require('@/images/UniDark/Thumnail2.jpg'),
                    src: '',
                    title: 'unityroom',
                    body: 'Unityで製作したWebGLのゲームを置いています。無料公開はだいたいここに上げていく予定です。',
                    firsttime: '2019/03/09',
                    updatetime: '2019/03/10'
                },
                {
                    type: 'niconico',
                    url: 'https://www.nicovideo.jp/user/519329/video',
                    image: '',
                    src: 'https://ext.nicovideo.jp/thumb_user/519329',
                    title: 'ニコニコ動画',
                    body: '',
                    firsttime: '2007/09/09',
                    updatetime: '2019/04/25'
                },
                {
                    type: 'twitter',
                    url: 'https://twitter.com/mkgask',
                    image: require('@/images/Twitter_Logo_Blue.png'),
                    src: '',
                    title: 'Twitter',
                    body: '技術的なことも日常のことも区別せずに色々呟いています。全ログは https://twilog.org/mkgask にあります。',
                    firsttime: '2009/9/12',
                    updatetime: 'ほぼ毎日'
                },
                {
                    type: 'pixiv',
                    url: 'https://www.pixiv.net/member.php?id=477235',
                    image: require('@/images/pixiv.png'),
                    src: '',
                    title: 'Pixiv',
                    body: '見せられないよ',
                    firsttime: '2018/06/03',
                    updatetime: '2018/06/09'
                }
            ],

            show_num: 10,
            per_page: 10
        }
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
