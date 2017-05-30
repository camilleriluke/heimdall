const { resolve, join } = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: join(__dirname, 'src/index.html'),
    filename: 'index.html',
    inject: 'body'
});

const extractSassPlugin = new ExtractTextPlugin({
    filename: '[name].[contenthash].css',
    disable: process.env.NODE_ENV === 'development'
});

module.exports = {
    context: resolve(__dirname, 'src'),
    entry: resolve(__dirname, 'src/app.js'),
    target: 'electron-renderer',
    output: {
        filename: 'build.js',
        path: resolve(__dirname, 'build'),
    },

    devServer: {
        contentBase: resolve(__dirname, 'build'),
        publicPath: '/'
    },

    module: {
        rules: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                use: extractSassPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader', options: { sourceMap: true } },
                        { loader: 'sass-loader', options: { sourceMap: true } }
                    ]
                })
            }
        ],
    },
    plugins: [
        htmlWebpackPlugin,
        extractSassPlugin
    ],
    devtool: 'source-map' // https://webpack.js.org/configuration/devtool
};