const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve('demo', 'js', 'index.js'),

  devtool: 'inline-source-map',

  output: {
    path: '/demo',
    publicPath: 'demo',
    filename: 'demo.bundle.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: ['babel-loader', 'eslint-loader'],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development')
      }
    }),
    new webpack.LoaderOptionsPlugin({
      eslint: {
        failOnWarning: false,
        failOnError: false
      }
    })
  ]
}
