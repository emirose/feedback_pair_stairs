module.exports = {
  entry: "./app.js",
  output: {
    path: "./build/",
    publicPath: "/build/",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {presets: ['react', 'es2015']}},
      { test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style", "css", "sass"]}
    ]
  },
  devtool: 'source-map',
  watchOptions: {
    poll: true
  }
};
