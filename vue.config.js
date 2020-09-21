module.exports = {
  devServer: {
    overlay: {
      warnings: false,
      errors: false,
    },
    proxy: 'http://localhost:3024',
  },
};
