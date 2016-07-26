module.exports = {
  entry: './app/index.js',
  output: {
    path: './build',
    filename: 'app.bundle.js'
  },
  devServer: {
    inline: true,
    contentBase: './app',
    port: 3000
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        plugins: ['transform-decorators-legacy']
      }
    }]
  }
}
