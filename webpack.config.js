const path = require('path');
const webpack = require('webpack');

var BrowserSyncPlugin = require('browser-sync-webpack-plugin');

var NODE_ENV = process.env.NODE_ENV || 'development';

var publicPath = path.join(__dirname, 'public');
var frontend = path.join(__dirname, 'frontend');


module.exports = {

    context: frontend,
    entry: {
        main: './main'
    },

    output: {
        path: publicPath,
        publicPath: '/',
        filename: '[name].js'
    },

    resolve: {
        extensions: ['','.js','.scss','.vue']
    },

    devtool: NODE_ENV === 'development' ? 'inline-cheap-module-source-map' : null,

    module: {

        loaders: [
            {
                test: /\.js$/,
                include: frontend,
                loader: 'babel?presets[]=es2015'
            }, 
            {
                test: /\.scss$/,
                loader: NODE_ENV === 'development' ? 'style!css!sass?sourceMap' : 'style!css!sass'

            }, 
            {
                test: /\.vue$/,
                loader: 'vue'
            }
        ]
    },

    vue: {
        loader: {
            js: 'babel?presets[]=es2015'
        }
    },
    node: {
        net: 'empty',
        tls: 'empty'
    },
    plugins: [
        new webpack.ProvidePlugin({
            Vue: 'vue',
        }),
        new BrowserSyncPlugin({
            proxy: 'http://php-case.local/',
            //tunnel: true,
            files: ['./public/main.js']
        })
    ]
};


if (NODE_ENV != 'development') {

    module.exports.plugins.push(
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
                drop_console: true,
                unsafe: true
            }
        })
    );
}

