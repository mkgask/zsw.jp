<template lang="pug">
    section#link.section
        div.section_body
            h1.page_title App

            div.top_line
                div.app_title_box
                    img.app_title_thumbnail(:src="require('@/images/Perm/ss1.png')")

                div.introduction_box
                    span.app_title Perm
                    span.introduction
                        | Permは、ペルムと読んで下さい。
                        | アラーム設定で指定の時間にプレイリストを再生する機能をメインに据えた、
                        | プレイリスト再生型アラーム機能付きメディアプレイヤーです。
                        |
                        | アラーム機能付きのソフトをいろいろ試した結果、
                        | 「時間と曲を１個１個ちまちま指定してられっか！」と逆ギレして作ってみました。
                        |
                        | Permは以下の機能を持っています。
                        |
                        | - 特定の楽曲の再生/停止(*1)
                        | - プレイリストに複数の楽曲を登録可能（エクスプローラーからDnD可/フォルダをDnDも可）(*2)
                        | - プレイリストに登録した、個別の楽曲の再生時間、合計の再生時間、登録数を表示
                        | - 再生モードを以下の8つから選択可能
                        |    ・リピートなし
                        |    ・１曲リピート
                        |    ・全曲リピート(>>)
                        |    ・全曲リピート(<<)
                        |    ・ランダム
                        |    ・シャッフル
                        |    ・リピートなし：ランダム
                        |    ・リピートなし：曲指定（アラーム設定時のみ）
                        | - プレイリスト表示部をワンクリックで非表示にすることが可能
                        | - 指定した時間になるとプレイリストを自動再生するアラーム機能搭載
                        | - アラームは、時間だけでなく曜日も指定可能
                        | - アラームは複数設定可
                        | - アラーム再生時に音量指定可能
                        | - アラーム再生時に「指定時間後に」「指定音量になるよう」フェードイン再生可能
                        | - 複数のアラームを時間だけ違う同一条件で一度に設定可（一括設定後、個別に設定変更も可）
                        |
                        | *1 楽曲の再生には、Phononという音楽再生ライブラリを利用しています。
                        |    これにより、DirectXなどで再生できる曲はすべてPermでも再生出来ます。
                        |
                        | *2 プレイリスト自体は、今のところ「標準プレイリスト」一つしか利用出来ません。

            lightboxlike.ss_box(:image="lightboxlike_image",:show="lightboxlike_show",@onLightboxlikeClose="onLightboxlikeClose")
                span.ss_image_box
                    img.ss_image(:src="require('@/images/Perm/ss1.png')",@click="onLightboxlikeOpen(require('@/images/Perm/ss1.png'))")
                span.ss_image_box
                    img.ss_image(:src="require('@/images/Perm/ss2.png')",@click="onLightboxlikeOpen(require('@/images/Perm/ss2.png'))")
                span.ss_image_box
                    img.ss_image(:src="require('@/images/Perm/ss3.png')",@click="onLightboxlikeOpen(require('@/images/Perm/ss3.png'))")

            div.media_box
                span.media_one 週刊アスキー増刊号 Windows8対応無料ソフト大全 ／ アスキー・メディアワークス ／ 2013年03月15日発売
                span.media_one iP! 2013年4月号 ／ 株式会社晋遊舎 ／ 2013年02月28日発売
                span.media_one 他数冊

            div.download_box
                a.link(href="static/Perm/Perm034.txt") Perm034.txt（取扱説明書のようなもの。いわゆるreadme）
                a.link(href="static/Perm/Perm034.exe") Perm034.exe（自己解凍形式。4.30MB）
                a.link(href="static/Perm/Perm034.7z") Perm034.7z（7z圧縮形式。4.25MB）
                a.link(href="http://www.vector.co.jp/soft/winnt/art/se466134.html") ソフトのダウンロードは、vectorのサイトからも行なえます。（バージョンアップ直後は、最新版がDL出来ないことがあります）
                a.link(href="static/Perm/src_taglib.zip") Permで使っている改変版TagLibのコースコードは、こちらからDL出来ます。
</template>

<style scoped lang="stylus" src="../components/styles/app.styl"></style>

<script lang="ts">
import lightboxlike from '../components/utils/lightboxlike.vue'

export default {
    components: {
        'lightboxlike': lightboxlike
    },

    data: function () {
        return {
            'lightboxlike_show': false,
            'lightboxlike_image': ''
        }
    },

    methods: {
        onLightboxlikeOpen: function (path) {
            this.lightboxlike_image = path
            this.lightboxlike_show = true
        },

        onLightboxlikeClose: function () {
            this.lightboxlike_show = false
        }
    }
}
</script>
