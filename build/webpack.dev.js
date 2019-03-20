const common = require('./webpack.common.js');
const webpack = require('webpack');
const WebpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = WebpackMerge(common, {
    mode: 'development',
    entry: {
        example: './examples/index.js'
    },
    plugins: [
        
        // 启用模块热加载
        new webpack.HotModuleReplacementPlugin(),

        new HtmlWebpackPlugin({
            template: './examples/index.html',
            chunks: ['example'],
            filename: 'index.html'
        })
    ]
});