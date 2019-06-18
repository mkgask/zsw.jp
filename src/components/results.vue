<template lang="pug">
    v-parallax#Results(height="100%")
        div.list_title 実績
        v-card.content_box(
            v-for="content, index in list", :key="index",
            :href="content.url",
            :style="{ backgroundImage: 'url(' + content.image + ')' }"
        )
            span.content_text(v-show="content.type != 'niconico'")
                span.content_title {{content.title}}
                span.content_body {{content.body}}
            iframe.content_niconico(
                v-show="content.type == 'niconico'", scrolling="no"
                src="https://ext.nicovideo.jp/thumb/sm35011267",
            )
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
    width: 31.333%
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
    padding: 1em 0 0.5em 50%
    text-align: left
    font-weight: bold

.content_body
    display: inline-block
    width: 100%
    padding: 0.5em 0 1em 50%
    text-align: left
    color: #111

.content_niconico
    width: 100%
    height: 176px
    border: none
</style>

<script lang="ts">
export default {
    data: function() {
        return {
            display_num: 6,

            per_page: 6,

            list: [
                {
                    type: 'github',
                    url: 'https://github.com/mkgask/zsw.jp',
                    image: 'https://github.com/fluidicon.png',
                    title: 'zsw.jp',
                    body: '本サイトのコードです。DockerでVue CLI 3を利用し静的サイトとして生成しています。'
                },
                {
                    type: 'niconico',
                    url: 'https://www.nicovideo.jp/watch/sm35011267',
                    image: '',
                    title: '【琴葉姉妹誕生祭2019】琴葉にしてあげる♪【静止画MAD】',
                    body: ''
                },
                {
                    type: 'unityroom',
                    url: 'https://unityroom.com/games/unitychan-with-darkmaze',
                    image: 'https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/6539/Thumnail_2.png',
                    title: 'Unityちゃんと闇の迷宮',
                    body: 'Unityで製作したWebGLのゲームです。まず完成させる事に主眼を置き、移動とバトルの基本要素だけを実装しています。'
                },
                {
                    type: 'github',
                    url: 'https://github.com/mkgask/UnityChan-with-DarkMaze',
                    image: 'https://github.com/fluidicon.png',
                    title: 'UnityChan-with-DarkMaze',
                    body: 'Unityちゃんと闇の迷宮のコード（一部。公開できるもののみ）です。UniRxとDDDを分かる範囲で利用しています。'
                },
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask/items/8d66dcada58a485e3585',
                    image: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
                    title: 'Chrome58以降でハネられないSHA-2でオレオレ認証局署名のあるオレオレ証明書 - Qiita',
                    body: 'web pushのローカルテスト用に環境を構築した際のメモです。'
                },
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask/items/d984f7f4d94cc39d8e3c',
                    image: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
                    title: 'PythonでのDependency Injection 依存性の注入',
                    body: 'DIについてそこそこ分かってきたのでPythonを例にとって説明してみたものです。'
                },

            ]
        }
    }
}
</script>
