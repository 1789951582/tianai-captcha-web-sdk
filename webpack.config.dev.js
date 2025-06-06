const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
module.exports = {
	entry: "./src/index.js",
    output: {
        filename: "tac/js/tac.js",
        path: path.resolve(__dirname, "./dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: './public/index.html'
        }),
    ]
}
