module.exports = {
  entry: './app/index.js',
  output: {
    path: './static',
    filename: 'bundle.js'
    },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/, 
        loaders: ['style', 'css']
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.json']
  }
};
