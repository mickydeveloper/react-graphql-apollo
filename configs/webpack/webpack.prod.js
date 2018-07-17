const merge = require("webpack-merge");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");
const common = require("./webpack.common.js");

module.exports = merge(common, {
  devtool: false,
  mode: "production",
  entry: {
    index: "./src/app/index.tsx"
  },
  output: {
    filename: "[name]-[hash].js",
    path: path.resolve("dist"),
    chunkFilename: "[name]-[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      // .ts(x) files should first pass through the Typescript loader, and then through babel
      {
        test: /\.tsx?$/,
        loaders: ["babel-loader", "awesome-typescript-loader"],
        include: path.resolve("src/app")
      },
      {
        test: /\.scss$/,
        exclude: [/node_modules/],
        use: [
          "style-loader",
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: {
              minimize: true,
              sourceMaps: false
            }
          },
          "sass-loader"
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin("main.css?cachebust=[hash]")
  ],
  optimization: {
    splitChunks: {
      chunks: "all"
    }
  }
});
