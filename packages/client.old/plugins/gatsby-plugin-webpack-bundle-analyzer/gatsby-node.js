const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

exports.onCreateWebpackConfig = ({ stage, actions }, options) => {
  if (options.disable) {
    return
  }
  if (stage === 'build-javascript') {
    actions.setWebpackConfig({
      plugins: [new BundleAnalyzerPlugin(options)],
    })
  }
}
