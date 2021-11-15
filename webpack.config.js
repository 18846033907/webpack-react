const path = require("path");
const DemoWebpackPlugin = require("./demo-webpack-plugin");
module.exports = {
  mode: "development",
  entry: {
    main: "./src/index.js",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  resolveLoader: {
    modules: ["node_modules", "./"],
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js$/,
  //       use: [
  //         {
  //           loader: "syncLoader",
  //           options: {
  //             message: "哈哈",
  //           },
  //         },
  //         { loader: "asyncLoader" },
  //       ],
  //     },
  //   ],
  // },
  plugins: [new DemoWebpackPlugin()],
};
