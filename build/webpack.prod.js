const common = require('./webpack.common.js');
const WebpackMerge = require('webpack-merge');
const path = require('path');

module.exports = WebpackMerge(common, {
    mode: 'development',
    entry: {
        index: './src/index.js'
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'index.js'
    },
    plugins: [],
    stats: {
        modules: false,
        children: false
    }
});