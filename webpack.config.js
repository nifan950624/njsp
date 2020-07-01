const path = require('path');
var version = require('./package.json').version;
var webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {jsonpRequest: './src/njsp.js'},
  output: {
    filename: '[name].min.js',
    library: 'njsp',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    libraryExport: 'default'
  },
  plugins: [
    new webpack.DefinePlugin({
      __VERSION__: JSON.stringify(version)
    })
  ]
}
