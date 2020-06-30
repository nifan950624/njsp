const path = require('path');

module.exports = {
  mode: 'production',
  entry: {jsonpRequest: './src/jsonpRequest.js'},
  output: {
    filename: '[name].min.js',
    library: 'jsonpRequest',
    libraryTarget: 'umd',
    path: path.resolve(__dirname, 'dist'),
    libraryExport: 'default'
  }
}
