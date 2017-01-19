
var webpack = require('webpack');
var combineLoaders = require('webpack-combine-loaders');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
require('es6-promise').polyfill();

module.exports = {

  devtool: 'eval',

  entry: __dirname + '/../app/app.js',

  output: {
    path: __dirname + '/../app/public/js',
    publicPath: '/js/',
    filename: 'build.js',
    chunkFilename: '[name]-[hash].js'
  },


  module: {

    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },

      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
      },

      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url',
      },

      {
        test: /\.css$/,
        loaders: ['style','css']
      },

      {
        test: /\.json$/,
        loader: 'json'
      },
    ]

  },

  resolve: {
    alias: {
      api: __dirname + '/../app/api',
      assets: __dirname + '/../app/public/assets',
      components: __dirname + '/../app/components',
      containers: __dirname + '/../app/containers'
    }
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    }),
  ]

};
