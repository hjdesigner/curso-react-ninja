'use strict'

const path = require('path')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = function (config, env) {
  const newConfig = webpackConfig(config, env)

  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat({
    test: /\.js$/,
    exclude: /node_modules/,
    loader: 'standard'
  })

  newConfig.resolve = {
    alias: {
      utils: path.join(__dirname, '..', 'src', 'utils')
    }
  }
  const cssLoader = newConfig.module.loaders.find((loader) => {
    return loader.test.test('actions.css')
  })

  newConfig.module.loaders = (newConfig.module.loaders || []).map((loader) => {
    if (loader.test.test('actions.css')) {
      return {
        ...loader,
        loaders: loader.loaders.map((internalLoader) => {
          return internalLoader.includes('/css-loader')
            ? `${internalLoader}&modules`
            : internalLoader
        })
      }
    }
    return loader
  })

  return newConfig
}
