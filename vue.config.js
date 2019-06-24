module.exports = {
    outputDir: 'docs',
    assetsDir: './',
    publicPath: './',

    pages: {
        index: {
            entry: 'src/index.ts',
            template: 'src/index.template.html',
            title: 'zsw.jp - @mkgask web site.',
            filename: 'index.html'
        },

        test: {
            entry: 'src/test.ts',
            template: 'src/test.template.html',
            title: 'test - zsw.jp - @mkgask web site.',
            filename: 'test/index.html'
        }
    },

    configureWebpack: {
        resolve: {
            alias: {
                'vue$': 'vue/dist/vue.esm.js'
            }
        }
    }
}