const HTMLWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: {
    index: path.resolve(__dirname, 'source/javascript', 'index.js'),
    search: path.resolve(__dirname, 'source/javascript', 'search.js'),
  },
  output: { path: path.resolve(__dirname, 'build'), filename: '[name].js' },
  plugins: [
    new HTMLWebpackPlugin({
      filename: 'index.html',
      template: path.resolve(__dirname, 'source/template', 'index.html'),
      chunks : ['index']
    }),
    new HTMLWebpackPlugin({
      filename: 'search.html',
      template: path.resolve(__dirname, 'source/template', 'search.html'),
      chunks : ['search']
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ],
  },
  optimization: {
    splitChunks: { chunks: 'all' },
  },
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'build')
    },
    port: 8080
  },
  devtool: 'inline-source-map'
}