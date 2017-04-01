const path = require('path')
const autoprefixer = require('autoprefixer')
const ROOT_DIR = path.join(__dirname, '../')

module.exports = {
  entry: {
    index: [
      path.join(ROOT_DIR, 'frontend/scripts/index.js')
    ]
  },
  output: {
    path: path.join(ROOT_DIR, 'backend/servers/$[frontend.serverName]/app/static'),
    publicPath: '/static',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff'
      },
      {
        test: /\.(ttf|eot|svg|png)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader'
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        loader: 'style!css!postcss!sass',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets: ['latest', 'react']
        }
      }
    ]
  },
  postcss: [
    autoprefixer()
  ]
}
