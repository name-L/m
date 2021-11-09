module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es6: true
    },
    extends: [
        'plugin:vue/essential',
        '@vue/standard'
    ],
    // 'plugins': [
    //     'html', 'vue'
    // ],
    parserOptions: {
        parser: 'babel-eslint'
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        semi: ['error', 'always'],
        indent: ['warn', 4],
        'max-len': ['warn', 120],
        'object-curly-spacing': ['warn', 'always']
    }
};
