const isDev = process.env.NODE_ENV === "development";

module.exports = {
  mode: isDev ? "development" : "production",
  entry: [
    "./client/app.js",
    // "@babel/polyfill", // enables async-await
  ],
  output: {
    path: __dirname,
    filename: "./public/bundle.js",
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devtool: "source-map",
  watchOptions: {
    ignored: /node_modules/,
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};