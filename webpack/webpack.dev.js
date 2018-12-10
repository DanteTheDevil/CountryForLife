const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: [
    './src/index.js'
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../')
  },
  devtool: 'cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.js|jsx$/,
        exclude: [/(node_modules)/, /\.spec\.js$/],
        include: [
          path.resolve(__dirname, '../src')
        ],
        use: {
            loader: "babel-loader"
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]'
        ]
      },
      {
        test: /\.(svg|png|jpg|jpeg|gif)$/,

        use: {
          loader: 'file-loader',
          options: {
            name: 'images/[path][name].[ext]',
            context: '../src/images'
          }
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./src/index.html')
    }),
    new CopyWebpackPlugin([
      {
        from: './src/images',
        to: './images'
      },
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, '../'),
    compress: true,
    historyApiFallback: true,
  }
};
