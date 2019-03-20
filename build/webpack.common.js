
const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    module: {
        rules: [{
            test: /\.(js)$/,
            use: [
                'babel-loader'
            ]
        }, {
            test: /\.(vue)$/,
            use: [
                'vue-loader'
            ]
        }, {
            test: /\.css$/,
            use: [
                'vue-style-loader',
                'css-loader'
            ]
        }]
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    resolve: {
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
        extensions: ['.js', '.vue'],
        alias: {
            vue$: 'vue/dist/vue.js',
            component$: 'index.js'
        }
    }
};