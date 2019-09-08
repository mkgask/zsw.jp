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
                    | （あんまりムキになってするゲームでもないので、ちょっとでもめんどい、しんどいと思ったら、すぐやめちゃって大丈夫です）<br>

            div.lets_play
                a.play_button(href="https://unityroom.com/games/unitychan-with-darkmaze") Unityroomで遊べます

            div.detail_introduction_box
                span.detail_introduction
                    |

            div.tips_box

            div.lets_play
                a.play_button(href="https://unityroom.com/games/unitychan-with-darkmaze") Unityroomで遊べます

</template>

<style scoped lang="stylus" src="../components/styles/game.styl"></style>

<script lang="ts">
export default {
    data: function () {
        return {}
    },

    methods: {
    }
}
</script>
