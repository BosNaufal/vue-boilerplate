
var webpack = require('webpack');

module.exports = function (config) {
  config.set({
    singleRun: false,

    frameworks: ['mocha'],

    files: [
      'webpack/webpack-test.config.js'
    ],

    preprocessors: {
      'webpack/webpack-test.config.js': ['webpack']
    },

    reporters: ['mocha'],

    port: 9000,

    webpack: {

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
          }
        ],


      },

      resolve: {
        alias: {
          vue: 'vue/dist/vue.min.js',
          api: __dirname + '/app/api',
          assets: __dirname + '/app/assets',
          components: __dirname + '/app/components',
          containers: __dirname + '/app/containers'
        }
      },

      plugins: [
        new webpack.DefinePlugin({
          'process.env': {
            'NODE_ENV': '"production"'
          }
        }),
      ]

    },

    webpackServer: {
      noInfo: true,
    },

  })
};
