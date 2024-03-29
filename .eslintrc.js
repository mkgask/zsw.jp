module.exports = {
    root: true,

    env: {
        node: true
    },

    'extends': [
        'plugin:vue/essential',
        '@vue/standard'
    ],

    rules: {
        'indent': ['error', 4],
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'camelcase': 0
    },

    parserOptions: {
        parser: 'babel-eslint'
    }
}
