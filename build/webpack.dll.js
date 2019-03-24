const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'production',
    entry: {
        lodash: ['lodash']
    },
    output: {
        path: path.resolve(__dirname, '../dist/dll'),
        library: `[name]_library`,
        filename: `[name].dll.js`
    },
    plugins: [
        new webpack.DllPlugin({
            name: `[name]_library`,
            path: path.join(path.resolve(__dirname, '../dist/dll'), `[name]_manifest.json`)
        })
    ] 
}