const path            = require('path');
const webpack         = require('webpack');
const DashboardPlugin = require('webpack-dashboard/plugin');

module.exports = {
   entry: [
      'babel-polyfill',  // for async await -> generator
      './main.jsx',
   ],
   output: {
      path: path.resolve(__dirname),
      filename: 'bundle.js',
   },
   module: {
      rules: [
         {
            test: /\.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            options: {
               plugins: ['transform-async-to-generator'],
               presets: [
                  'stage-0',
                  'react',
                  ['es2015', { 'modules': false }],   // TODO: switch to webpack babel
               ],
            },
         },
         {
            test: /\.sass$/,
            include: path.resolve(__dirname, 'css'),
            loaders: ['style', 'css', 'sass'],
            // sassLoader: {
            //    includePaths: [path.resolve(__dirname, './css/')]
            // },
         },
      ],
   },
   plugins: [
      // new webpack.DefinePlugin({
      //    "process.env": {
      //       "NODE_ENV": JSON.stringify('production')
      //    },
      // }),
      // new DashboardPlugin({ port: 3000 })
   ],
};