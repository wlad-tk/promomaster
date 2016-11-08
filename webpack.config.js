var webpack = require('webpack');
var BundleTracker  = require('webpack-bundle-tracker');

var PROD = JSON.parse(process.env.PROD_ENV || '0');

//console.log('Building with entry point: ' + ENTRY);
//console.log('Production mode: ' + PROD);
//console.log(' ');

module.exports = {
    entry: "./src/main.js",
    output: {
        path: __dirname + '/public/build/',
        publicPath: "build/",
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
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            sourceMap: false,
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
        new BundleTracker({filename: './public/build/webpack-stats.json'})
    ],
    module: {
        loaders: [
            {
                test: /\.(js|jsx?)$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets:['es2015', 'react']
                }
            },
            {
                test: /\.(css|less)$/,
                loader: "style-loader!css-loader!postcss-loader!less",
                exclude: [/node_modules/, /public/]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file?hash=sha512&name=image/[hash].[ext]'
                ]
            },
            {
                test: /\.json$/,
                loader: "json-loader"
            }
        ]
    }
};