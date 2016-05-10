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
        query: {presets: ['react', 'es2015']}}
    ]
  },
  devtool: 'source-map'
};
