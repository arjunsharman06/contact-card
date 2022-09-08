// This is the configuration file for webpack

// access all the node paths which are made
const path = require('path');

// importing html-webpack-plugin for gernerating HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  // Entry point of the webpack
  entry: './src/js/index.js',
  //   output / bundle location
  output: {
    // Name by which the output should be stored
    filename: 'bundle.js',

    // directory in which the file should be present
    path: path.resolve(__dirname, 'dist'),
  },

  // setting rules for the images
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      // The configuration file should have a new rule to preprocess CSS files that uses both style-loader and css-loader
      // regular expression to identify CSS files and then serves those files to the right loaders.
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        // new rule that directs JavaScript files to be handled by Babel
        // rule to exclude the node modules.
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults' }]],
          },
        },
      },
    ],
  },
  // creating the instance HtmlWebpackPlugin
  // template property defines which file should serve as the template for the generated file
  // title to define the content of the index.html code's <title> element.
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      title: 'Webpack Plugin',
    }),
  ],
  //   helps the webpack to priotize the build
  //   mode: 'development',
};