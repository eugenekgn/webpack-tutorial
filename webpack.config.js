const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

const extractPlugIn = new ExtractTextPlugin({
  filename: 'css.css'
});

module.exports = {
  entry: './src/js/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015']
          }
        }]
      },
      {
        test: /\.scss$/,
        use: extractPlugIn.extract({
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.html$/,
        use: ['html-loader']
      },
      {
        test: /\.(jpg|png)/,
        use: [{
          loader: 'file-loader',
          options: {
            query: {
              name: 'assets/[name].[ext]',
              outputPath: 'images/',
            }
          }
        },
        {
          loader: 'image-webpack-loader',
          options: {
            query: {
              mozjpeg: {
                progressive: true,
              },
              gifsicle: {
                interlaced: true,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              optipng: {
                optimizationLevel: 7,
              }
            }
          }
        }]
      }
    ]
  },
  plugins: [
    extractPlugIn,
    /**
     * creates index.html
     */
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
}