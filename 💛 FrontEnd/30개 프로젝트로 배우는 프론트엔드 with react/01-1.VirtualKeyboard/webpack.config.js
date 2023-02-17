const path = require("path");
const TerserWebpackPlugin = require("terser-webpack-plugin");  
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin"); 

module.exports = {
    entry: "./src/js/index.js",                        
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "./dist"),
        clean: true,
    },
    devtool: "source-map",
    mode: "development",
    devServer:{
        host: "localhost",
        port: 3030,
        open: true, // 웹팩 데브서버를 실행할때마다 새 창을 열지에 대한 설정
        watchFiles: "index.html" // index.html에 변화가 있을때마다 reload
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: "01-1.VirtualKeyboard",
            template: "./index.html",
            inject: "body", 
            favicon: "./favicon.png",
        }),
        new MiniCssExtractPlugin({
            filename: "style.css"
        })
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    },
    optimization: {
        minimizer: [
            new TerserWebpackPlugin(),
            new CssMinimizerPlugin()            
        ]
    }
}
