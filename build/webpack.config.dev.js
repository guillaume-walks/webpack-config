'use strict'
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',
  entry: [
    './src/app.js'
  ],
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      // {
      //   test: /\.(js|vue)$/,
      //   use: 'eslint-loader',
      //   enforce: 'pre'
      // },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          MiniCssExtractPlugin.loader,
          //'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    /**
     * {HtmlWebpackPlugin}
     * @inject
     * true || 'head' || 'body' || false 
     * Inject all assets into the given template or templateContent. 
     * When passing true or 'body',
     * all javascript resources will be placed at the bottom of the body element. 
     * 'head' will place the scripts in the head element
     */
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true 
    }),
    new MiniCssExtractPlugin({
      // extract css into its own .css file
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
}