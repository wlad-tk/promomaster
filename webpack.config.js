var webpack = require('webpack');
var BundleTracker  = require('webpack-bundle-tracker');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "/build/",
        filename: PROD ? 'b.min.js' : 'b.js' //'bundle.min.js' or 'bundle.js'
    },
    devtool: 'source-map',
    plugins: PROD ? [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env':{
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new ExtractTextPlugin('./src/b.min.css'),
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            // sourceMap: false,
            output: {
                comments: false
            },
            compress: {
                warnings: true
            }
        }),
        new BundleTracker({filename: './public/build/webpack-stats.json'})
    ] : [
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('development')
            }
        }),
        new BundleTracker({filename: './public/build/webpack-stats.json'}),
        new ExtractTextPlugin('./src/b.css')
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx?)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    compact: false,
                    presets:['es2015', 'react']
                }
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/,
                loaders: [
                    'file?name=[path][name].[ext]'
                ]
            },
            // {
            //     test: /\.(css|less)$/,
            //     loader: "style-loader!css-loader!postcss-loader!less",
            //     exclude: [/node_modules/, /public/]
            // },
            // {
            //     test: /\.(css|less)$/,
            //     loader: ExtractTextPlugin.extract("style-loader!css-loader!postcss-loader!less"),
            //     exclude: [/node_modules/, /public/]
            // },

            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader"),
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.less$/,
                loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader!less"),
                exclude: [/node_modules/, /public/]
            },

            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};