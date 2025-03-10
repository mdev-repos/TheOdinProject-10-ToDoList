const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',  // Entry point
  output: {
    filename: 'main.js',  // Output
    path: path.resolve(__dirname, 'dist'), 
  },
  plugins: [
    // HTML SECTION
    new HtmlWebpackPlugin({
      title: 'Webpack Template',
      template: './src/index.html',
    }),
  ],
  module: {
    rules: [
      // CSS SECTION
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      // IMAGES SECTION
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
};
