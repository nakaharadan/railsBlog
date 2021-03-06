const ExtractTextPlugin = require('extract-text-webpack-plugin')
const { env } = require('../configuration.js')
const glob = require('glob');
const path = require('path');

module.exports = {
  test: /\.(scss|sass|css)$/i,
  use: ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      { loader: 'css-loader', options: { minimize: env.NODE_ENV === 'production' } },
      { loader: 'postcss-loader', options: { sourceMap: true } },
      'resolve-url-loader',
      {
        loader: 'sass-loader',
        options: {
          sourceMap: true,
          includePaths: [
            path.join(__dirname, '../../../node_modules')
          ],
        }
      }
    ]
  })
}
