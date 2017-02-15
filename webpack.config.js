/* eslint-disable */

var path = require('path');

module.exports = {

    entry: path.resolve(__dirname, 'src') + '/app/index.js',
    output: {
        path: path.resolve(__dirname, 'dist') + '/app',
        filename: 'bundle.js',
        publicPath: '/app/'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src'),
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                }
            },
            {
                test:/\.scss$/,
                loader:'style-loader!css-loader!sass-loader'
            },
            {   
                test: /\.(jpg|png)$/,
                loader: 'url-loader',
                options: {
                    name: './images/[hash].[ext]'
                }
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|otf)$/,
                loader: 'file?name=./fonts/[name].[ext]'
            }
        ]
    }
};