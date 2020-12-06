const path = require('path')
const webpack = require('webpack')
module.exports = {
    entry: path.resolve(__dirname, 'src/demo.js'),
    output: {
        path: path.resolve(__dirname, 'landing/static/js'),
        filename: 'demo.js'
    },
    mode: 'development',
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/,
                    /test\.js$/
                ],
                use: ['babel-loader']
            }
        ]
    }
}
