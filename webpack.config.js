const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: { main: "./src/index" },

  output: { publicPath: "http://localhost:3000/" },
  devServer: { port: 3000 },
  devtool: "inline-source-map",

  resolve: { extensions: [".ts", ".js", ".tsx"] },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  plugins: [new HtmlWebPackPlugin({ title: "Sample" })],
};
