<template lang="pug">
    section#latest.section
        div.section_body
            h1.page_title Latest

            v-card.content_box(
                v-for="content, index in list",
                :key="index",
                :href="content.url",
                :style="{ backgroundImage: 'url(' + content.image + ')' }"
            )
                span.content_text(v-show="content.type != 'niconico'")
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
</template>

<style scoped lang="stylus">
.page_title
    width 100%
    font-weight bold
    color #111
    border-top 5px #888 solid
    text-align center

.content_box
    width 46%
    margin 2%
    min-height 176px
    text-decoration none
    overflow hidden
    background left center #fff no-repeat
    background-size contain
    text-shadow 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff, 0 0 3px #fff

.content_title
    display: inline-block
    width: 100%
    padding: 1em 0 0.5em 40%
    text-align: left
    font-weight: bold

.content_body
    display: inline-block
    width: 100%
    padding: 0.5em 0 1em 40%
    text-align: left

.datetime
    display: inline-block
    width: 100%
    padding: 0.5em 0 1em 40%
    text-align: right

.firsttime
    margin-right 1em

.updatetime
    margin-right 1em

.content_niconico
    width: 100%
    height: 176px
    border: none
</style>

<script lang="ts">
export default {
    data: function() {
        return {
            list: [
                {
                    type: 'github',
                    url: 'https://github.com/mkgask/zsw.jp',
                    image: 'https://github.com/fluidicon.png',
                    src: '',
                    title: 'zsw.jp',
                    body: '本サイトのコードです。DockerでVue CLI 3を利用し静的サイトとして生成しています。',
                    firsttime: '2019/07/20',
                },
                {
                    type: 'niconico',
                    url: 'https://www.nicovideo.jp/watch/sm35011267',
                    image: '',
                    src: 'https://ext.nicovideo.jp/thumb/sm35011267',
                    title: '【琴葉姉妹誕生祭2019】琴葉にしてあげる♪【静止画MAD】',
                    body: '',
                    firsttime: '2019/04/25',
                },
                {
                    type: 'unityroom',
                    url: 'https://unityroom.com/games/unitychan-with-darkmaze',
                    image: 'https://object-storage.tyo1.conoha.io/v1/nc_df3bdbc45bc04950b558834f5728517a/unityroom_production/icon/6539/Thumnail_2.png',
                    src: '',
                    title: 'Unityちゃんと闇の迷宮',
                    body: 'Unityで製作したWebGLとWindowsのゲームです。まず完成させる事に主眼を置き、移動とバトルの基本要素だけを実装しています。',
                    firsttime: '2019/03/10',
                },
                {
                    type: 'github',
                    url: 'https://github.com/mkgask/UnityChan-with-DarkMaze',
                    image: 'https://github.com/fluidicon.png',
                    src: '',
                    title: 'UnityChan-with-DarkMaze',
                    body: 'Unityちゃんと闇の迷宮のコード（一部。公開できるもののみ）です。UniRxとDDDを分かる範囲で利用しています。',
                    firsttime: '2019/03/10',
                },
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask/items/d984f7f4d94cc39d8e3c',
                    image: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
                    src: '',
                    title: 'PythonでのDependency Injection 依存性の注入',
                    body: 'DIについてそこそこ分かってきたのでPythonを例にとって説明してみたものです。',
                    firsttime: '2018/07/07',
                    updatetime: '2018/07/13',
                },
                {
                    type: 'niconico',
                    url: 'https://www.nicovideo.jp/watch/sm33073747',
                    image: '',
                    src: 'https://ext.nicovideo.jp/thumb/sm33073747',
                    title: '【琴葉姉妹誕生日2018】Sweets Party!【静止画MAD】',
                    body: '',
                    firsttime: '2018/04/25',
                },
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask/items/7578bb0f9c646dbb68d0',
                    image: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
                    src: '',
                    title: 'docker-compose（dockerで十分）でGitHub Pagesローカル開発環境',
                    body: '本サイトを作るに当たり事前調査したのですが結局使わなかったやつです。',
                    firsttime: '2018/02/24',
                    updatetime: '2019/05/18',
                },
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask/items/0bf9c26dc96e7b0b45ac',
                    image: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
                    src: '',
                    title: 'Windowsで音声合成Open JTalk',
                    body: '音声合成ソフトCevioと出自が近しい名工大のOpen JTalkが気になって触ってみた履歴です。',
                    firsttime: '2017/09/09',
                    updatetime: '2017/09/10',
                },
                {
                    type: 'qiita',
                    url: 'https://qiita.com/mkgask/items/8d66dcada58a485e3585',
                    image: 'https://cdn.qiita.com/assets/qiita-fb-2887e7b4aad86fd8c25cea84846f2236.png',
                    src: '',
                    title: 'Chrome58以降でハネられないSHA-2でオレオレ認証局署名のあるオレオレ証明書',
                    body: 'web pushのローカルテスト用に環境を構築した際のメモです。',
                    firsttime: '2017/06/30',
                    updatetime: '2018/08/25',
                },
                {
                    type: 'app',
                    url: 'zsw.jp/software/perm',
                    image: 'http://zsw.jp/downloads/perm/034/ss1.png',
                    src: '',
                    title: 'Perm',
                    body: 'プレイリスト再生型アラーム付きメディアプレイヤーです。ペルムと読みます。Qt/C++製です。',
                    firsttime: '2013/02/10',
                    updatetime: '2008/11/08',
                }
            ]
        }
    }
}
</script>
