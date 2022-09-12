// This is the configuration file for webpack

// access all the node paths which are made
const path = require('path');

// importing html-webpack-plugin for gernerating HTML
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Class of Workbox plugin for service worker
//const WorkboxPlugin = require('workbox-webpack-plugin');

// Using InjectManifest for the service worker creation
const { InjectManifest } = require('workbox-webpack-plugin');

// Plugins for install
const WebpackPwaManifest = require('webpack-pwa-manifest');

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
    // New plugin added
    // new WorkboxPlugin.GenerateSW({
    //   // excluding images
    //   // Do not precache images
    //   exclude: [/\.(?:png|jpg|jpeg|svg)$/],

    //   // Define runtime caching rules.
    //   //Only cache images which are used in a specfic window
    //   runtimeCaching: [
    //     {
    //       // Match any request that ends with .png, .jpg, .jpeg or .svg.
    //       urlPattern: /\.(?:png|jpg|jpeg|svg)$/,

    //       // Apply a cache-first strategy.
    //       handler: 'CacheFirst',

    //       options: {
    //         // Use a custom cache name.
    //         cacheName: 'images',

    //         // Only cache 1 images
    //         expiration: {
    //           maxEntries: 1,
    //         },
    //       },
    //     },
    //   ],
    // }),

    // InjectionManifest plugin
    new InjectManifest({
      // This is the raw file that will be bundled
      swSrc: './src/sw.js',
      //This is the file name where your service worker will show in the bundle.
      swDest: 'service-worker.js',
    }),

    // installation plugins details
    new WebpackPwaManifest({
      name: 'Contact Cards Application',
      short_name: 'Contact Cards',
      description: 'Keep track of contacts!',
      background_color: '#7eb4e2',
      theme_color: '#7eb4e2',
      start_url: './',
      publicPath: './',
      icons: [
        {
          src: path.resolve('src/images/icon-manifest.png'),
          sizes: [96, 128, 192, 256, 384, 512],
          destination: path.join('assets', 'icons'),
        },
        {
          src: path.resolve('src/images/icon-manifest.png'),
          size: '1024x1024',
          destination: path.join('assets', 'icons'),
          purpose: 'maskable',
        },
      ],
    }),
  ],
  //   helps the webpack to priotize the build
  //   mode: 'development',
};
