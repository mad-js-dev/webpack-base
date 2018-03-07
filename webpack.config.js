var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var UglifyJSPlugin = require('uglifyjs-webpack-plugin')
var webpack = require('webpack');
var path = require('path');

module.exports = [
    {
        entry: {
            Main: './src/main.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'statics/js/[name].js',
            library: 'library',
            libraryTarget: 'umd',
            umdNamedDefine: true
        },
        devServer: {
            contentBase: path.join(__dirname, 'dist'),
            compress: false,
            //hot: !isProd,
            open: true
        },
        module: {
            //Webpack loaders
            rules: [
                {
                    test: /\.js$/,
                    include: path.resolve(__dirname, 'scripts'),
                    use: [{
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                ['es2015']
                            ]
                        }
                    }],
                    //exclude: /node_modules(?!\/webpack-dev-server)/,
                },
            ]
        },
        plugins: [
            new UglifyJSPlugin(),
            new CopyWebpackPlugin([
                { from: 'src/statics/img/', to: 'statics/img' },
            ]),
            //Exporting static markup to output folder
            new HtmlWebpackPlugin({
                title: 'Index',
                filename: 'index.html',
                partialDirs: './src/components/',
                template: './src/views/index/index.html',
            })
        ]
    },
    //Parallel sass compilation: each block uses a different cpu core.
    {
        entry: './src/styles/index.scss',
        output:{
            path: path.resolve(__dirname, 'dist/statics'),
            filename: 'styles/index.css',
            publicPath: 'statics/styles/'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: ['css-loader', 'sass-loader'],
                        publicPath: 'http://localhost:8080/'
                    })
                },
                {
                    test: /\.(png|gif|jpg|jpeg|svg)/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'img/',
                            publicPath: '../img/',
                            name: '[name].[ext]',
                        },

                    },
                    exclude: [
                        path.resolve(__dirname, "src/statics/fonts/")
                    ],
                },
                {
                    test: /\.(eot|svg|ttf|woff|woff2)/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            outputPath: 'fonts/',
                            publicPath: '../fonts/',
                            name: '[name].[ext]',
                        }
                    }
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('./styles/index.css'),
        ]
    }
];