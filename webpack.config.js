const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'blogBundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname,'dist'),
        compress: true,
        port: 8080,
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: [
                  'file-loader',
                ],
              },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    {loader:'style-loader'},
                    {
                        loader:'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]__[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    },{
                        loader: 'postcss-loader',
                        options: {
                            postcssOptions: {
                                plugins: [
                                    ['autoprefixer',{},],
                                ],
                            }
                        }
                    }
                ]
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template:__dirname + '/src/index.html',filename:'index.html',inject:'body'}),
        new CleanWebpackPlugin()
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname,'dist')
    }
}