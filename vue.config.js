module.exports = {
    outputDir: 'docs',
    assetsDir: 'assets',
    publicPath: 'assets',

    pages: {
        index: {
            entry: 'src/index.ts',
            template: 'src/index.template.html',
            title: 'zsw.jp - @mkgask web site.'
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