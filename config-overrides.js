const {injectBabelPlugin} = require('react-app-rewired')
const rewireMobx = require('react-app-rewire-mobx')
const rewireLess = require('react-app-rewire-less')
const rewireSass = require('react-app-rewire-sass-modules')
const theme = require('./src/theme')

module.exports = function override(config, env) {
  config = injectBabelPlugin(['import', {libraryName: 'antd', style: true}], config)
  config = injectBabelPlugin('babel-plugin-styled-components', config)
  config = rewireMobx(config, env)
  config = rewireLess.withLoaderOptions({
    modifyVars: theme,
    javascriptEnabled: true,
  })(config, env)
  config = rewireSass(config, env)

  return config
}
