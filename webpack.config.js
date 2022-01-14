const path = require('path');

module.exports = {
  watch: true,
  entry: './src/index.js',

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  },

  devServer: {
    static: ['./', './src'],
    liveReload: true,
    hot: true,
    open: true,
    port: 9900,
  },

  output: {
    path: path.resolve(__dirname, 'bundel'),
    publicPath: '/dist/',
    filename: 'main.js'
  },
};
