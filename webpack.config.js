const path = require("path");
const webpack = require("webpack");
const BrowserSyncPlugin = require("browser-sync-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const definePlugin = new webpack.DefinePlugin({
  __DEV__: JSON.stringify(JSON.parse(process.env.BUILD_DEV || "true")),
});

module.exports = {
  entry: {
    main: path.join(__dirname, "static/index.ts"),
  },
  output: {
    pathinfo: true,
    path: path.join(__dirname, "build"),
    filename: "bundle.js",
  },
  resolve: {
    modules: ["node_modules"],
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    alias: {
      static: path.resolve("./static"),
    },
  },
  plugins: [
    definePlugin,
    new BrowserSyncPlugin({
      // contentBase: path.join(__dirname, "build"),
      host: process.env.IP || "localhost",
      port: process.env.PORT || 3000,
      server: {
        baseDir: "./build",
        index: "index.html",
      },
    }),
    new HtmlWebpackPlugin({
      title: "Synonym Form",
      template: "static/index.html",
      filename: "index.html",
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.join(__dirname, "static/fonts"),
          to: path.join(__dirname, "build/fonts"),
        },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: "/node-modules/",
      },
      {
        test: /\.scss?$/,
        use: [
          {
            loader: "style-loader",
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true,
              url: false,
            },
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "url-loader",
          },
        ],
      },
      // {
      //   test: /\.woff$/,
      //   use: [
      //     {
      //       loader: "file-loader",
      //       options: {
      //         name: "[name].[contenthash].[ext]",
      //         outputPath: "fonts/",
      //       },
      //     },
      //   ],
      // },
    ],
  },
  devtool: "source-map",
  mode: "development",
};
