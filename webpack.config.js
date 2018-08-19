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
        ),
      ],
      module: {
        rules: [
          { 
                test: /\.js$/,     //以什么结尾的忽略
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                 }
          }
        ]
      },
      devServer: {
        contentBase: path.join(__dirname, "dist"),
        // compress: true,
        open:true,
        port: 9000
      }
  };

  