/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path')

exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        leaflet: path.resolve(__dirname, 'node_modules/leaflet/dist/leaflet-src.esm.js'),
        leaflet_css: path.resolve(__dirname, 'node_modules/leaflet/dist/leaflet.css'),
        marker_icon: path.resolve(__dirname, 'node_modules/leaflet/dist/images/marker-icon.png'),
        marker_shadow: path.resolve(__dirname, 'node_modules/leaflet/dist/images/marker-shadow.png'),
        '~': path.resolve(__dirname, 'src'),  // works along tsconfig paths for enabling absolute imports
      },
    },
  })

  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /react-leaflet/,
            use: loaders.null(),
          },
        ],
      },
    })
  }
}
