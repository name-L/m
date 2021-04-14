module.exports = {
    devServer: {
        overlay: {
            warnings: true,
            errors: true
        },
        proxy: {
            '/ajax': {
                target: 'http://m.maoyan.com',
                changeOrigin: true,
                pathRewrite: {
                    '^/lele': ''
                }
            }
        }
    },
    publicPath: './',
    lintOnSave: false // 关了eslint检查
}
