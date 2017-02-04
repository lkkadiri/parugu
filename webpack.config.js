const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var config = {
    entry: {
        app: './src/index.js',
        scss: './src/styles/app.scss'
    },
    output: {
        filename: "[name].bundle.js",
        chunkFilename: "[id].bundle.js",
        path: __dirname + '/build'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract('css-loader!sass-loader')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin({ filename: 'build/[name].css', disable: false, allChunks: true })
    ]
}
module.exports = config;
