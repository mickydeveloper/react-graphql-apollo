const merge = require("webpack-merge");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const common = require("./webpack.common.js");
const path = require("path");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: 'development',
  entry: [
    "react-hot-loader/patch",
    "webpack-dev-server/client?http://localhost:3000",
    "webpack/hot/only-dev-server",
    "./src/app/index.tsx"
  ],
  // configure the output directory and publicPath for the devServer
  output: {
    publicPath: "/dist"
  },
  module: {
    rules: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      {
        test: /\.tsx?$/,
        loaders: [
          "react-hot-loader/webpack",
          "babel-loader",
          "awesome-typescript-loader"
        ],
        include: path.resolve("src/app")
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
            "css-hot-loader",
            MiniCssExtractPlugin.loader,
            "css-loader",
            "sass-loader"
        ]
      }
    ]
  },
  devServer: {
    port: 3000,
    hot: true,
    historyApiFallback: true,
    inline: true,
    open: true,
    contentBase: path.join(__dirname, './../../dist'),
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin("main.css")
  ]
});
