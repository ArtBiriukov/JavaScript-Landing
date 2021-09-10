const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  devServer: {
    static: {
      directory: path.join(__dirname, ''),
      watch: true,
    },
    open: true,
    compress: true,
    hot: true,
    port: 9000,
    liveReload: true,
  },
  module: {
    rules: [
      { test: /\.(js)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          },
        }
      }
    ]
  },
  output: {
    filename: 'dev.js',
    path: path.resolve(__dirname, 'dist'),
  },
};
