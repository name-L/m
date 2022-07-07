// module.exports = {
//     devServer: {
//         overlay: {
//             warnings: true,
//             errors: true
//         },
//         proxy: {
//             '/ajax': {
//                 target: 'http://m.maoyan.com',
//                 changeOrigin: true,
//                 pathRewrite: {
//                     '^/lele': ''
//                 }
//             }
//         }
//     },
//     // publicPath: `${'./'||'/'}`,
//     publicPath: process.env.NODE_ENV === 'production'
//         ? './'
//         : '/',
//     lintOnSave: false // 关了eslint检查
// }
module.exports = {
    publicPath: './', // 打包后的位置(如果不设置这个静态资源会报404)
    // publicPath: process.env.NODE_ENV === "production" ? "http://47.92.237.225:8080/dist" : "./",
    outputDir: 'dist', // 打包后的目录名称
    assetsDir: 'static', // 静态资源目录名称
    productionSourceMap: false, // 去掉打包的时候生成的map文件
    filenameHashing: false,
    lintOnSave: false, // 关了eslint检查
    devServer: {
        // sockHost: "http://192.168.2.22:8080/",
        // disableHostCheck: true,
        host: '0.0.0.0', // 不清楚主机和目的网络
        port: 8080, // 源地址端口，自行修改
        // disableHostCheck: true,
        // hotOnly: false,
        // useLocalIp: false,
        proxy: {
            '/api': {
                target: 'http://localhost:8888', // 设置你调用的接口域名和端口号 别忘了加http
                changeOrigin: true,
                pathRewrite: {
                    '^/api': ''
                    // 这里理解成用‘/api'代替target里面的地址，后面组件中我们掉接口时直接用api代替
                    // 比如我要调用'http://40.00.100.133:3002/user/login'，直接写‘/api/user/login'即可
                }
            },
            '/auth2_test': {
                // https://antfact.com/auth2_test
                target: 'https://antfact.com',
                changeOrigin: true
            },
            '/ajax': {
                target: 'http://m.maoyan.com',
                changeOrigin: true
            }
        }
    }
};
