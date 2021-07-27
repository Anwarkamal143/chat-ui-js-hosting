const path = require('path')
const glob = require('glob');
const webpack = require("webpack");
module.exports = {
  //do stuff with the webpack config...
  mode: "production",
  entry: path.join(__dirname, "./src/embeddedWidget/widget.ts"),
  // entry: glob
  //   .sync("build/static/?(js|css)/*.?(js|css)")
  //   .map((f) => path.resolve(__dirname, f)),
  output: {
    path: path.resolve(__dirname, 'lib'),
    filename: "chatWidget.min.js",
    // libraryTarget: "commonjs2",
    library: "MyWidget",
    libraryTarget: "umd",
    umdNamedDefine: true,
  },
  // devtool: "source-map",
  resolve: {
    extensions: [
      ".ts",
      ".tsx",
      ".js",
      ".css",
      ".txt",
      ".svg",
      ".png",
      ".jpg",
      ".jpeg",
    ],
  },
  module: {
    rules: [
      {
        test: /\.ts(x?)$/,
        exclude: /node_modules/,
        include: [path.resolve("src")],
        loader: "ts-loader",
        options: {
          transpileOnly: false,
          compilerOptions: {
            module: "es2015",
          },

          configFile: require.resolve("./tsconfig-widget.json"),
        },
      },
      {
        test: /\.(scss|css)$/i,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "resolve-url-loader",
            // options: {...}
          },
          "sass-loader",
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      process: {
        env: {
          REACT_APP_CHAT: "true",
          REACT_APP_FAQ: "true",
          REACT_APP_CALLBACK: "true",
          REACT_APP_TICKET: "true",
          NODE_ENV: JSON.stringify("production"),
        },
      },
      // process: { env: { ...process.env } },
    }),
  ],
};
// const webpack = require("webpack");
// const config = {
//   entry: path.join(__dirname, "./src/index.ts"),
//   output: {
//     path: path.resolve(__dirname, "./docs"),
//     filename: "simple-calendar.js",
//     libraryTarget: "commonjs2",
//   },
//   devtool: "source-map",
//   resolve: {
//     extensions: [".ts", ".tsx", ".js", ".css", ".txt"],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.ts(x?)$/,
//         exclude: /node_modules/,
//         include: [path.resolve("src")],
//         loader: "ts-loader",
//         options: {
//           transpileOnly: false,
//           compilerOptions: {
//             module: "es2015",
//           },
//         },
//       },
//       {
//         test: /\.css$/i,
//         use: ["style-loader", "css-loader", "sass-loader"],
//       },
//     ],
//   },
//   // plugins: [
//   //   new webpack.DefinePlugin({
//   //     "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
//   //     // process: { env: { ...process.env } },
//   //     "process.env.REACT_APP_CHAT": JSON.stringify(process.env.REACT_APP_CHAT),
//   //     "process.env.REACT_APP_FAQ": JSON.stringify(process.env.REACT_APP_FAQ),
//   //     "process.env.REACT_APP_CALLBACK": JSON.stringify(
//   //       process.env.REACT_APP_CALLBACK
//   //     ),
//   //   }),
//   // ],
// };