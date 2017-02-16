const webpack = require('webpack')
const path = require('path')

module.exports = {
  entry: path.resolve('demo', 'js', 'index.js'),

  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'demo.bundle.js',
    library: 'ReactWaxDocs',
    libraryTarget: 'umd'
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
        NODE_ENV: JSON.stringify('production')
      }
    })
  ]
}
