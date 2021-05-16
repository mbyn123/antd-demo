const CracoLessPlugin = require('craco-less');

module.exports = {
    babel: {   
        plugins: [
            [
                "import",
                {
                    "libraryName": "antd",
                    "libraryDirectory": "es",
                    "style": true //设置为true即是less
                }
            ],
           
        ]
    },
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: { '@primary-color': '#1DA57A' },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
    //配置代理解决跨域
    // devServer: {
    //     proxy: {
    //         "/api": {
    //             target: "http://baidu.com",
    //             //target: 'http://192.168.9.19:8080',
    //             changeOrigin: true,
    //             pathRewrite: {
    //                 "^/api": ""
    //             }
    //         }
    //     }
    // }
};