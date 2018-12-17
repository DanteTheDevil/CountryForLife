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
    path: path.resolve(__dirname, '../public')
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
        test: /\.scss|css$/,
        loaders: [
          'style-loader?sourceMap',
          'css-loader?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'sass-loader'
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
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
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
      {
        from: './src/service-worker.js',
        to: './service-worker.js'
      },
      {
        from: './src/favicon.ico',
        to: './favicon.ico'
      },
    ])
  ],
  devServer: {
    contentBase: path.join(__dirname, '../public'),
    compress: true,
    historyApiFallback: true,
  }
};
