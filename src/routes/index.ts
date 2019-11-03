import Vue from 'vue'
import VueRouter from 'vue-router'

import menu from '../pages/menu.vue'
import latest from '../pages/latest.vue'
import link from '../pages/link.vue'
import game from '../pages/game.vue'
import movie from '../pages/movie.vue'
import app from '../pages/app.vue'
import service from '../pages/service.vue'

Vue.use(VueRouter)

export default new VueRouter({
    routes: [
        {
            path: '/',
            component: menu,
            name: 'index',

            meta: {
                title: 'Index',
                description: 'インデックス',
                image: require('@/images/ogp/ogp.jpg')
            }
        },

        {
            path: '/menu',
            component: menu,
            name: 'menu',

            meta: {
                title: 'Menu',
                description: 'サイトメニュー',
                image: require('@/images/ogp/ogp.jpg')
            }
        },

        {
            path: '/latest',
            component: latest,
            name: 'latest',

            meta: {
                title: 'Latest',
                description: '新着情報',
                image: require('@/images/ogp/ogp.jpg')
            }
        },

        {
            path: '/link',
            component: link,
            name: 'link',

            meta: {
                title: 'Link',
                description: '各サイトの作者プロフィールページへのリンクです。',
                image: require('@/images/ogp/ogp.jpg')
            }
        },

        {
            path: '/game',
            component: game,
            name: 'game',

            meta: {
                title: 'Game',
                description: 'Unityちゃんと闇の迷宮 のゲーム紹介です。',
                image: require('@/images/UniDark/Thumnail2.jpg')
            }
        },

        {
            path: '/movie',
            component: movie,
            name: 'movie',

            meta: {
                title: 'Movie',
                description: '公開済みの過去動画の一覧です。',
                image: require('@/images/ogp/ogp.jpg')
            }
        },

        {
            path: '/service',
            component: service,
            name: 'service',

            meta: {
                title: 'Service',
                description: '公開済みの製作したwebサービスの一覧です。',
                image: require('@/images/ogp/ogp.jpg')
            }
        },

        {
            path: '/app',
            component: app,
            name: 'app',

            meta: {
                title: 'App',
                description: 'プレイリスト再生型アラーム機能付きメディアプレイヤー Perm の紹介です。',
                image: require('@/images/Perm/ss1.png')
            }
        },

        {
            path: '/program/perm',
            redirect: '/app'
        }
    ]
})
