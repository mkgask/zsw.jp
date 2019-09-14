<template lang="pug">
    section#link.section
        div.section_body
            h1.page_title Game

            div.title_image_box
                img.title_image(:src="require('@/images/UniDark/Thumnail.jpg')")

            div.title_text_box
                span.title_text Unityちゃんと闇の迷宮

            div.introduction_box
                span.introduction_text
                    | ブラウザでクリックだけで簡単に遊べるゲームです。<br>
                    | Unityちゃんを操作して、モンスターを倒し、お宝から強い武器をゲットして、奥へ奥へと進みましょう。<br>
                    | ゲームクリアの実装をしていないので、いつまででも遊べます。<br>
                    | （200階くらいから武器も敵も変わらなくなるので、その辺りが楽しめる限界だと思います）<br>
                    | （あんまりムキになってするゲームでもないので、ちょっとでもめんどい、しんどいと思ったら、ゲームを終了してください）<br>
                    | （用法用量を守って楽しく遊んでください）<br>

            div.weapons_image_box
                img.weapons_image(:src="require('@/images/UniDark/weapons.jpg')")

            div.lets_play
                a.play_button(href="https://unityroom.com/games/unitychan-with-darkmaze") Unityroomで遊べます

            div.control_introduction_box
                span.control_introduction_key
                    | 操作説明
                span.control_introduction_val
                    | ・床をクリックでそこへ移動します。<br>
                    | ・敵をクリックでその敵を追跡し、接近したら攻撃します。<br>
                    | ・宝箱に触れると、宝箱を開きます。<br>
                    | ・宝箱から出てきた武器を選択すると、そこへ移動し武器を拾って変更します。<br>
                    | ・敵を倒すと経験値を獲得し、一定以上貯める毎にレベルアップしていきます。<br>
                    | ・敵から攻撃されるとダメージを受けます。HPがゼロになると負けとなり、いくつかルームを戻されます。<br>
                    | ・敵を倒したり、武器を変更したり、ルームクリアしたりのタイミングでオートセーブされます。<br>
                    | ・ルームクリアし、次のルームへ移動すると、敵が強くなったり敵の数や種類が増えたり、宝箱から出てくる武器も変わったりします。<br>

            div.tips_box
                div.tip_box
                    span.tips_key
                        | Tips1 武器には特性がある
                    span.tips_val
                        | ・武器の種類毎に、攻撃が得意、防御が得意、振りが早い、バランスが良いなど違いがあります。<br>
                        | ・自分の戦いやすい武器を探して、珠玉の逸品を見つけましょう。<br>
                div.tip_box
                    span.tips_key
                        | Tips2 敵の攻撃を避ける
                    span.tips_val
                        | ・攻撃のタイミングで敵が真正面に居ないとダメージが入りません。<br>
                        | ・同様に敵の攻撃のタイミングの時に真正面に居ないようにすれば、ダメージを受けずにすみます。<br>
                        | ・ダメージを受けると移動がキャンセルされます。敵の数が増えてきた時、囲まれないように気をつける必要があります。<br>
                div.tip_box
                    span.tips_key
                        | Tips3 ドアには違いがある
                    span.tips_val
                        | ・次のルームへ移動する時、左右のドアのどちらを選ぶかで敵に変化があります。<br>

            div.ss_box
                span.ss.ss1(@click="onLightboxlikeOpen(require('@/images/UniDark/ss1.jpg'))")
                    img.ss_image(:src="require('@/images/UniDark/ss1.jpg')")
                span.ss.ss2(@click="onLightboxlikeOpen(require('@/images/UniDark/ss2.jpg'))")
                    img.ss_image(:src="require('@/images/UniDark/ss2.jpg')")
                span.ss.ss3(@click="onLightboxlikeOpen(require('@/images/UniDark/ss3.jpg'))")
                    img.ss_image(:src="require('@/images/UniDark/ss3.jpg')")
                span.ss.ss4(@click="onLightboxlikeOpen(require('@/images/UniDark/ss4.jpg'))")
                    img.ss_image(:src="require('@/images/UniDark/ss4.jpg')")

            div.lets_play
                a.play_button(href="https://unityroom.com/games/unitychan-with-darkmaze") Unityroomで遊べます

            div.lightboxlike(v-show="lightboxlike_show",@click="onLightboxlikeClose")
                span.lightboxlike_close_button
                img.lightboxlike_image(:src="lightboxlike_image")

</template>

<style scoped lang="stylus" src="../components/styles/game.styl"></style>

<script lang="ts">
export default {
    data: function () {
        return {
            lightboxlike_show: false,
            lightboxlike_image: ''
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
