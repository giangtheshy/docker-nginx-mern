const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ReactRefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

let mode = "development";
let target = "web";
const plugins = [
  new CleanWebpackPlugin(),
  new MiniCssExtractPlugin(),
  new HtmlWebpackPlugin({ template: "./src/index.html", favicon: "./src/images/favicon.ico" }),
];

if (process.env.NODE_ENV === "production") {
  mode = "production";
  target = "browserslist";
}

if (process.env.SERVE) {
  plugins.push(new ReactRefreshWebpackPlugin());
}

module.exports = {
  mode: mode,
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "build"),
    assetModuleFilename: "images/[hash][ext][query]",
  },

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: { publicPath: "" },
          },
          "css-loader",
          "postcss-loader",
          "sass-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|ico)$/i,
        type: "asset",
      },
      {
        test: /\.jsx?$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: { cacheDirectory: true },
        },
      },
    ],
  },
  plugins: plugins,
  target: target,
  devtool: "source-map",
  resolve: {
    alias: {
      Apis: path.resolve(__dirname, "src/apis"),
      Components: path.resolve(__dirname, "src/components"),
      Images: path.resolve(__dirname, "src/images"),
      Pages: path.resolve(__dirname, "src/pages"),
      Scss: path.resolve(__dirname, "src/scss"),
      Store: path.resolve(__dirname, "src/store"),
      Utils: path.resolve(__dirname, "src/utils"),

      types$: path.resolve(__dirname, "src/store/types.js"),
    },
    extensions: [".js", ".jsx"],
  },
  devServer: {
    contentBase: "./build",
    hot: true,
    open: true,
    port: process.env.PORT || 3000,
    historyApiFallback: true,
  },
};
