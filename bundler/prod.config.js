const fs = require('fs')
const gzipSize = require('gzip-size')
const path = require('path')
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
      new webpack.DefinePlugin({'process.env': { NODE_ENV: `'${PRODUCTION}'` }}),
      function () {
        this.plugin('done', function (stats) {
          const filename = stats.compilation.outputOptions.filename.replace('[hash]', stats.hash)
          const filepath = path.join(stats.compilation.outputOptions.path, filename)
          fs.readFile(filepath, (err, data) => {
            if (err) { console.log('error reading js bundle', err) }
            const byteSize = gzipSize.sync(data)
            const kbSize = Math.round(byteSize / 1024)
            console.log('\n\nGZIP size\n', filename + ': ~', kbSize, 'kB\n')
          })
        })
      }
    ]
  }
)
