var path = require('path')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var ComponentResolverPlugin = require('component-resolver-webpack')
var webpack = require('webpack')

module.exports = {
  entry: './src',
  output: {
    path: 'dist',
    filename: 'bundle.js',
  },
  resolve: {
    alias: {
      app: path.resolve('src')
    },
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        include: __dirname + '/src',
      },
      {
        test: /\.css/,
        loader: ExtractTextPlugin.extract('css?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'),
      },
      { test: /\.gif(\?.*)?$/, loader: 'url-loader?limit=60000&mimetype=image/gif' },
      { test: /\.png(\?.*)?$/, loader: 'url-loader?limit=60000&mimetype=image/png' },
      { test: /\.jpg(\?.*)?$/, loader: 'url-loader?limit=60000&minetype=image/jpg' },
      { test: /\.svg(\?.*)?$/, loader: 'url-loader?limit=60000&mimetype=image/svg+xml' },
    ],
  },
  plugins: [
    new webpack.ResolverPlugin([
      new ComponentResolverPlugin()
    ]),
    new ExtractTextPlugin("styles.css")
  ]
};
