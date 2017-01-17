const webpack = require('webpack')
const config = require('./config')

const HOST = '0.0.0.0'
const PORT = 3000

const hotAssetsServer = {
  host: HOST,
  port: PORT,
  url: `http://${HOST}:${PORT}`
}

module.exports = Object.assign(
  config,
  { hotAssetsServer: hotAssetsServer },
  {
    devtool: 'eval',
    entry: Object.assign(
      {
        index: [
          'react-hot-loader/patch',
          `webpack-dev-server/client?${hotAssetsServer.url}`,
          'webpack/hot/only-dev-server'
        ].concat(config.entry.index)
      }
    ),
    output: Object.assign(
      config.output,
      {
        publicPath: `${hotAssetsServer.url}/${config.output.publicPath}`
      }
    ),
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ],
    port: PORT
  }
)
