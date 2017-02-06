const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')

const config = require('./dev.config')

const HOST = config.devServer.host
const PORT = config.devServer.port

new WebpackDevServer(
  webpack(config),
  {
    contentBase: 'backend/servers/$[frontend.serverName]/app/templates/',
    hot: true,
    historyApiFallback: true,
    publicPath: config.output.publicPath,

    // provide less noisy output from webpack
    quiet: false,
    noInfo: false,
    stats: {
      assets: false,
      colors: true,
      version: false,
      hash: false,
      timings: false,
      chunks: false,
      chunkModules: false
    }
  }
).listen(PORT, HOST, function (err, result) {
  if (err) {
    return console.log(err)
  }
  console.log(`You hot server is available here http://${HOST}:${PORT}`)
})
