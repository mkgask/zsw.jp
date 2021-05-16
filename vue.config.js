module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',

    pages: {
        index: {
            entry: 'src/index.ts',
            template: 'src/index.template.html',
            title: 'zsw.jp - mkgask web site.',
            description: 'みかげあすかの創作物展示サイトです。',
            filename: 'index.html'
        },

        docs: {
            entry: 'src/docs.ts',
            template: 'docs/index.html',
        }
    },

    configureWebpack: {
        resolve: {
            alias: {
                vue$: 'vue/dist/vue.esm.js'
            },

            extensions: ['.js', '.ts']
        }
    }
}
