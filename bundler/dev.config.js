const webpack = require('webpack')
const config = require('./config')

const HOST = '0.0.0.0' // so we can test the project remotely over the same network
const PORT = 3000

const devServer = {
  host: HOST,
  port: PORT,
  url: `http://${HOST}:${PORT}`
}

module.exports = Object.assign(config,
  { devServer },
  {
    devtool: 'eval',
    entry: Object.assign(
      {
        index: [
          'react-hot-loader/patch',
          `webpack-dev-server/client?${devServer.url}`,
          'webpack/hot/only-dev-server'
        ].concat(config.entry.index)
      }
    ),
    output: Object.assign(
      config.output,
      {
        publicPath: `${devServer.url}/${config.output.publicPath}`
      }
    ),
    plugins: [
      new webpack.HotModuleReplacementPlugin()
    ]
  }
)
