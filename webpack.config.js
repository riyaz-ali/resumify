//- Webpack dev configuration
const webpack = require('webpack');
const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const HtmlHardiskPlugin = require('html-webpack-harddisk-plugin');

const BUILD_GH = !!JSON.parse(process.env.BUILD_GH || false)

module.exports = {
  entry: './src/main.js',
  output: {
    path: (!BUILD_GH)?path.resolve(__dirname, 'dist'):path.resolve(__dirname, "docs/dist/"),
    publicPath: (!BUILD_GH)?"/dist/":"dist/",
    filename: "bundle.[hash].js",
    pathinfo: true
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  externals: {
    // provided (loaded) externally, this will allow us to leverage global cdn
    'vue': 'Vue',
    'vue-router': 'VueRouter',
    'html2canvas': 'html2canvas'
  },
  devtool: "#eval-source-map",
  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    noInfo: true,
    open: true,
    overlay: true,
    port: 3003
  },
  plugins: [
    new HtmlPlugin({
      filename: (!BUILD_GH)?"index.html":"../index.html",
      template: "src/index.html",
      alwaysWriteToDisk: true
    }),
    new HtmlHardiskPlugin()
  ]
}

//# build for production
if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
