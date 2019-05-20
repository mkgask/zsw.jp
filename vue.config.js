module.exports = {
    outputDir: 'docs',
    assetsDir: 'assets',
    publicPath: 'assets',

    pages: {
        index: {
            entry: 'src/index/index.vue',
            template: 'src/index.template.html',
            title: 'zsw.jp - @mkgask web site.',
            chunks: ['chunk-vendors', 'chunk-common', 'main-nav']
        }
    }
}