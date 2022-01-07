const {
  override,
  addWebpackPlugin,
  addWebpackResolve,
} = require("customize-cra");
const webpack = require("webpack");

module.exports = override(
  addWebpackResolve({
    fallback: {
      process: require.resolve("process/browser"),
      zlib: require.resolve("browserify-zlib"),
      stream: require.resolve("stream-browserify"),
      util: require.resolve("util"),
      buffer: require.resolve("buffer"),
      asset: require.resolve("assert"),
    },
  }),

  addWebpackPlugin(
    new webpack.ProvidePlugin({
      Buffer: ["buffer", "Buffer"],
      process: "process/browser",
    })
  )
);
