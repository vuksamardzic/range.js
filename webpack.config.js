const path = require('path');
const env = require('yargs').argv.env;
const HtmlWebpackPlugin = require('html-webpack-plugin');

const libname = 'range';
const filename = 'range.min.js';
const dir = 'lib';
let plugins = [];

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, dir),
        filename: filename,
        library: 'range',
        libraryTarget: 'umd',
        umdNamedDefine: true
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['es2015']
            }
        }]
    },
    plugins: plugins
};