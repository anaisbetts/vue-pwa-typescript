'use strict'

const utils = require('./utils')
const config = require('../config')
const isProduction = process.env.NODE_ENV === 'production'

const loaders = utils.cssLoaders({
  sourceMap: isProduction
    ? config.build.productionSourceMap
    : config.dev.cssSourceMap,
  extract: isProduction
});

// NB: We rig TypeScript to be loaded by the Babel loader, or else vue-loader
// will default to parsing TypeScript script tags with the old-school ts-loader
loaders['ts'] = 'babel-loader';

module.exports = {
  loaders: loaders,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href'
  }
}
