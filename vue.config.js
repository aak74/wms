const baseUrl = process.env.NODE_ENV === 'production'
  ? 'wms'
  : '/';

module.exports = {
  devServer: {
    proxy: 'http://localhost'
  },

  baseUrl,
  outputDir: 'docs',
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pluginOptions: {
    'resolve-alias': {
      alias: {
        src: '',
        components: ''
      }
    }
  }
}
