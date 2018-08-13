import webpack from 'webpack'
import path from 'path'
import HtmlWebpackPlugin from 'html-webpack-plugin'


new webpack.DefinePlugin({
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
})

const PATHS = {
  app: path.join(__dirname, 'app'),
  build: path.join(__dirname, 'dist'),
}

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: PATHS.app + '/index.html',
  filename: 'index.html',
  inject: 'body'
})

const faviconPlugin = new HtmlWebpackPlugin({
    favicon: PATHS.app + '/imgs/favicons/favicon-96x96.png',
  })

module.exports = {
  devtool: 'source-map',
  entry: ['babel-polyfill' , PATHS.app],
  output: {
    path: PATHS.build,
    filename: "index_bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"},
      { test: /\.(jpe?g|png|gif|ico)$/, loader: 'url-loader?limit=8192' },
      { test: /\.css$/, loader: "style-loader!css-loader" },
    ]
  },
  resolve: {
    //extensions: ['', '.js', '.jsx'],
    //root: path.resolve('./app')
  },
  plugins: [
    HTMLWebpackPluginConfig,
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    })
  ]
};
