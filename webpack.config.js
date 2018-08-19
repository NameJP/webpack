const path = require("path");

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/js/index.js',
    output:{
        path: path.resolve(__dirname, './dist'),
        filename: 'my-first-webpack.bundle.js'
      },
      plugins: [
        new HtmlWebpackPlugin(
            {
                template: './index.html'
            }
        )
      ],
  };