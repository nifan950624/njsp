const path = require('path');

module.exports = {
  mode: 'production',
  entry: {jsonpRequest: './src/jsonpRequest.js'},
  output: {
    filename: '[name].min.js',
    libraryTarget: 'umd',
    library: 'jsonpRequest',
    path: path.resolve(__dirname, 'dist'),
  }
}
