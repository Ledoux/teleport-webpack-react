const webpack = require('webpack')

const config = require('./config')

const PRODUCTION = 'production'

module.exports = Object.assign(
  config,
  {
    entry: Object.assign(
      {
        index: config.entry.index
      }
    ),
    plugins: [
      new webpack.DefinePlugin(
        {
          'process.env': { NODE_ENV: `'${PRODUCTION}'` }
        }
      )
    ]
  }
)
