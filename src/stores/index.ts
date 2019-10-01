import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        route: 'menu',

        list: [
            {
                type: 'github',
                url: 'https://github.com/mkgask/zsw.jp',
                image: require('@/images/GitHub_Logo.png'),
                src: '',
                title: 'zsw.jp',
                body: '本サイトのコードです。DockerでVue CLI 3を利用し静的サイトとして生成しています。Circle Ciを利用し、GitHubへのpushでLint、ビルド、デプロイが自動で行われるようになっています。',
                firsttime: '2019/07/20',
                updatetime: ''
            },
            {
                type: 'niconico',
                url: 'https://www.nicovideo.jp/watch/sm35011267',
                image: '',
                src: 'https://ext.nicovideo.jp/thumb/sm35011267',
                title: '【琴葉姉妹誕生祭2019】琴葉にしてあげる♪【静止画MAD】',
                body: '',
                firsttime: '2019/04/25',
                updatetime: ''
            },
            {
                type: 'unityroom',
                url: 'https://unityroom.com/games/unitychan-with-darkmaze',
                image: require('@/images/UniDark/Thumnail2.jpg'),
                src: '',
                title: 'Unityちゃんと闇の迷宮',
                body: 'Unityで製作したWebGLとWindowsのゲームです。まず完成させる事に主眼を置き、移動とバトルの基本要素だけを実装しています。',
                firsttime: '2019/03/10',
                updatetime: ''
            },
            {
                type: 'github',
                url: 'https://github.com/mkgask/UnityChan-with-DarkMaze',
                image: require('@/images/GitHub_Logo.png'),
                src: '',
                title: 'UnityChan-with-DarkMaze',
                body: 'Unityちゃんと闇の迷宮のコード（一部。公開できるもののみ）です。UniRxとDDDを分かる範囲で利用しています。',
                firsttime: '2019/03/10',
                updatetime: ''
            },
            {
                type: 'niconico',
                url: 'https://www.nicovideo.jp/watch/sm33696807',
                image: '',
                src: 'https://ext.nicovideo.jp/thumb/sm33696807',
                title: '【第四回ひじき祭】桃太郎【VOICEROID漫才紙芝居】',
                body: '',
                firsttime: '2018/07/07',
                updatetime: '2018/07/13'
            },
            {
                type: 'qiita',
                url: 'https://qiita.com/mkgask/items/d984f7f4d94cc39d8e3c',
                image: require('@/images/qiita-square.png'),
                src: '',
                title: 'PythonでのDependency Injection 依存性の注入',
                body: 'DIについてそこそこ分かってきたのでPythonを例にとって説明してみたものです。',
                firsttime: '2018/07/07',
                updatetime: '2018/07/13'
            },
            {
                type: 'qiita',
                url: 'https://qiita.com/mkgask/items/dcd0f173998168fe5614',
                image: require('@/images/qiita-square.png'),
                src: '',
                title: 'PythonのKivyで音楽プレイヤー',
                body: 'Permを最新の技術で再興させるためのチャレンジです。',
                firsttime: '2018/06/03',
                updatetime: '2018/06/09'
            },
            {
                type: 'niconico',
                url: 'https://www.nicovideo.jp/watch/sm33073747',
                image: '',
                src: 'https://ext.nicovideo.jp/thumb/sm33073747',
                title: '【琴葉姉妹誕生日2018】Sweets Party!【静止画MAD】',
                body: '',
                firsttime: '2018/04/25',
                updatetime: ''
            },
            {
                type: 'qiita',
                url: 'https://qiita.com/mkgask/items/7578bb0f9c646dbb68d0',
                image: require('@/images/qiita-square.png'),
                src: '',
                title: 'docker-compose（dockerで十分）でGitHub Pagesローカル開発環境',
                body: '本サイトを作るに当たり事前調査したのですが結局使わなかったやつです。',
                firsttime: '2018/02/24',
                updatetime: '2019/05/18'
            },
            {
                type: 'qiita',
                url: 'https://qiita.com/mkgask/items/0bf9c26dc96e7b0b45ac',
                image: require('@/images/qiita-square.png'),
                src: '',
                title: 'Windowsで音声合成Open JTalk',
                body: '音声合成ソフトCevioと出自が近しい名工大のOpen JTalkが気になって触ってみた履歴です。',
                firsttime: '2017/09/09',
                updatetime: '2017/09/10'
            },
            {
                type: 'niconico',
                url: 'https://www.nicovideo.jp/watch/sm31857256',
                image: '',
                src: 'https://ext.nicovideo.jp/thumb/sm31857256',
                title: '【のりフェス2】琴葉姉妹のJavaScript初めて触ろう 解説編',
                body: '',
                firsttime: '2017/09/03',
                updatetime: ''
            },
            {
                type: 'niconico',
                url: 'https://www.nicovideo.jp/watch/sm31766192',
                image: '',
                src: 'https://ext.nicovideo.jp/thumb/sm31766192',
                title: '【第三回ひじき祭】琴葉姉妹の1分間JavaScript初めて触ろう',
                body: '',
                firsttime: '2017/09/03',
                updatetime: ''
            },
            {
                type: 'niconico',
                url: 'https://www.nicovideo.jp/watch/sm31703198',
                image: '',
                src: 'https://ext.nicovideo.jp/thumb/sm31703198',
                title: '【第三回ひじき祭CM】琴葉姉妹の1分間JavaScript初めて触ろう',
                body: '',
                firsttime: '2017/08/07',
                updatetime: ''
            },
            {
                type: 'qiita',
                url: 'https://qiita.com/mkgask/items/8d66dcada58a485e3585',
                image: require('@/images/qiita-square.png'),
                src: '',
                title: 'Chrome58以降でハネられないSHA-2でオレオレ認証局署名のあるオレオレ証明書',
                body: 'web pushのローカルテスト用に環境を構築した際のメモです。',
                firsttime: '2017/06/30',
                updatetime: '2018/08/25'
            },
            {
                type: 'app',
                url: 'zsw.jp/software/perm',
                image: require('@/images/Perm/ss1.png'),
                src: '',
                title: 'Perm',
                body: 'プレイリスト再生型アラーム付きメディアプレイヤーです。ペルムと読みます。Qt/C++製です。',
                firsttime: '2013/02/10',
                updatetime: '2008/11/08'
            }
        ]
    },

    getters: {
        get_route: state => {
            return state.route
        },

        get_latest_list: state => {
            return state.list
        },

        get_movie_list: state => {
            return state.list.filter((value) => value.type === 'niconico')
        }
    },

    mutations: {
        route_change (state, r) {
            state.route = r
        }
    }
})
