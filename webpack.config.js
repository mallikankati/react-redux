var debug = process.env.NODE_ENV !== "production";
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var BUILD_DIR = path.resolve(__dirname, 'public');
var APP_DIR = path.resolve(__dirname, 'src/app')

module.exports = {
    context: __dirname,
    devtool: debug ? "inline-sourcemap" : null,
    entry: {
        app: [
            APP_DIR + "/index.js",
            APP_DIR + "/assets/sass/all.scss"
        ]
    },
    resolve: {
        alias: {
            config: path.join(__dirname, 'src/config/config.json')
        }
    },
    output: {
        path: BUILD_DIR,
        filename: "index.min.js"
    },
    module: {
        // rules: [
        // {
        //     test: /\.s[ac]ss$/,
        //     use: ExtractTextPlugin.extract({
        //     	use: ['css-loader', 'sass-loader'],
        //     	fallback: 'style-loader'
        //     })
        // }],
        loaders: [
        {
            test: /\.s[ac]ss$/,
            use: ExtractTextPlugin.extract({
            	use: ['css-loader', 'sass-loader'],
            	fallback: 'style-loader'
            })
        },
        {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            use: [{
                    loader: 'babel-loader',
                    options: {
                         presets: ['react', 'es2015'],
                         plugins: ['react-hot-loader/babel']
                         //plugins: ['react-html-attrs', 'transform-decorators-legacy', 'transform-class-properties'],
                    }
            }]
        }]
    },
    plugins: debug ? [
        new ExtractTextPlugin('[name].css'),
        new webpack.NamedModulesPlugin(),
        //new webpack.CleanWebpackPlugin(['dist'])
        //new webpack.HtmlWebpackPlugin({
        //    title: 'Hot Module Replacement'
        //}),
        new webpack.HotModuleReplacementPlugin()

    ] : [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.LoaderOptionsPlugin({
            minimize:true
        }),
        new webpack.optimize.UglifyJsPlugin({mangle: false, sourcemap: false})
    ]
};
