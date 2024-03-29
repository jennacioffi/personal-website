module.exports = {
  resolve: {
    fallback: {
      // eslint-disable-next-line quotes
      "fs": false, 
      // "fs": require.resolve("path-browserify"),
      // eslint-disable-next-line quotes
      "path": false,
      // "path": require.resolve("path-browserify"),
      // eslint-disable-next-line quotes
      "os": false,
      // "os": require.resolve("os-browserify/browser")
    }
  }
};
