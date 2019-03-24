const common = require('./webpack.common.js');
const webpackMerge = require('webpack-merge');
const webpack = require('webpack');
const path = require('path');

module.exports = webpackMerge(common, {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    plugins: [
        new webpack.DllReferencePlugin({
            manifest: require(path.resolve(__dirname, '../dist/dll/lodash_manifest.json'))
        })
    ]
});