const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const TerserPlugin = require('terser-webpack-plugin');
module.exports = {
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin({
            terserOptions: {
                compress: {
                    drop_console: true, // 移除所有的`console`语句
                },
                output: {
                    comments: false, // 去掉注释
                },
            },
            extractComments: false, // 是否将注释提取到单独的文件中
        })],
    },
	entry: "./src/index-prod.js",
    output: {
        filename: "tac/js/tac.min.js",
        path: path.resolve(__dirname, "./dist"),
		library: 'TAC',           // 暴露为全局变量名
		libraryTarget: 'umd',     // 通用模块定义
		globalObject: 'this'       // 兼容浏览器环境
    }
}
