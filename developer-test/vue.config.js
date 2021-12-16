module.exports = {
  devServer: {
    port: 5001,
    hot: true,
    disableHostCheck: true,
    proxy: {
      "/lottery": {
        target: "http://apis.juhe.cn/",
        changeOrigin: true,
        pathRewrite: {
          "^/lottery": "",
        },
      },
    },
  },

  productionSourceMap: false,
  publicPath: "/",
};
