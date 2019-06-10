<template lang="pug">
    v-parallax#Results(height="100%")
        div.list_title 制作実績
        v-card.content_box(v-for="content, index in list",:key="index",:href="content.url",:style="{ backgroundImage: 'url(' + content.image + ')' }")
            span.content_text(v-if="content.type != 'niconico'")
                span.content_title {{content.title}}
                span.content_body {{content.body}}
            iframe.content_niconico(v-if="content.type == 'niconico'",src="https://ext.nicovideo.jp/thumb/sm35011267",scrolling="no")
</template>

<style lang="sass">
#Results .v-parallax__content
    display: flex
    flex-direction: row
    justify-content: center
    align-items: center
    flex-wrap: wrap
</style>

<style scoped lang="sass">
#Results
    width: 100vw
    height: 100vh
    text-align: center
    color: #111
    padding-left: 100px

.list_title
    width: 100%
    margin: 1em
    font-weight: bold
    font-size: 1.5em
    color: #111

.content_box
    width: 48%
    margin: 1%
    min-height: 176px
    text-decoration: none
    overflow: hidden
    background: left center #fff no-repeat
    background-size: contain
    text-shadow: 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff

.content_title
    display: inline-block
    width: 100%
    padding: 1em 0 0.5em 33.333%
    text-align: left
    font-weight: bold

.content_body
    display: inline-block
    width: 100%
    padding: 0.5em 0 1em 33.333%
    text-align: left
    color: #111

.content_niconico
    width: 100%
    height: 176px
    border: none
</style>

<script lang="ts">
export default {
    components: {
    },

    data: function() {
        return {
            list: [
                {
                    url: 'https://github.com/mkgask/zsw.jp',
                    image: 'https://github.com/fluidicon.png',
                    title: 'zsw.jp',
                    body: '本サイトのコードです。DockerでVue CLI 3を利用し静的サイトとして生成しています。'
                },
                {
                    url: 'https://unityroom.com/games/unitychan-with-darkmaze',
                    image: 'https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/6539/Thumnail_2.png',
                    title: 'Unityちゃんと闇の迷宮',
                    body: 'Unityで製作したWebGLのゲームです。まず完成させる事に主眼を置き、移動とバトルの基本要素だけです。'
                },
                {
                    url: 'https://github.com/mkgask/UnityChan-with-DarkMaze',
                    image: 'https://github.com/fluidicon.png',
                    title: 'Unityちゃんと闇の迷宮（GitHub）',
                    body: 'Unityちゃんと闇の迷宮のコード（一部。公開できるもののみ）です。UniRxとDDDを分かる範囲で利用しています。'
                },

            ]
        }
    }
}
</script>
