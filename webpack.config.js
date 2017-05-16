'use strict';

var path = require('path');
// var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackShellPlugin = require('webpack-shell-plugin');

module.exports = {
  // Entry point for static analyzer
  entry: {
    'webpack-bundle': './index.js',
    'mure': './mure-library/mure.js',
    'svgLibraryLoader': './mure-library/svgLibraryLoader.js'
  },

  output: {
    // Where to build results
    path: path.join(__dirname, 'docs'),

    // Filename to use in HTML
    filename: '[name].js'
  },
  devtool: 'cheap-source-map',
  plugins: [
    /* new CleanWebpackPlugin([
      './docs'
    ]), */
    new HtmlWebpackPlugin({
      template: 'index.html',
      inject: 'body',
      excludeChunks: ['mure', 'svgLibraryLoader']
    }),
    new WebpackShellPlugin({
      onBuildExit: [
        './node_modules/uglify-js/bin/uglifyjs docs/mure.js -c -m -o docs/mure.min.js',
        './node_modules/uglify-js/bin/uglifyjs docs/svgLibraryLoader.js -c -m -o docs/svgLibraryLoader.min.js'
      ]
    })
  ],
  module: {
    rules: [
      {
        test: /\.htaccess$|\.csv$/,
        loader: 'file-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.html$/,
        loader: 'html-loader?attrs=img:src'
      },
      {
        test: /\.jpe?g$|\.gif$|\.png$|(?!template\b)\b\w+\.svg$|\.woff$|\.ttf$|\.wav$|\.mp3$/,
        loader: 'url-loader'
      },
      {
        test: /template\.svg$/,
        loader: 'html-loader',
        query: {
          attrs: ['image:xlink:href', 'image:href']
        }
      },
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|web_client)/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    alias: {
      'd3': path.resolve(__dirname, 'lib/d3.min.js')
    }
  }
};
