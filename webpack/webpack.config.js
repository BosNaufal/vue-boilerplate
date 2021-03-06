require('es6-promise').polyfill();

module.exports = {

  entry: __dirname + '/../app/app.js',

  devtool: 'eval-source-map',

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

  devServer: {
    historyApiFallback: true,
    contentBase: "app/public/",
    port: 8000
  },

};
