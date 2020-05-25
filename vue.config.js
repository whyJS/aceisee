module.exports = {
  //路径前缀
  publicPath: "/",
  lintOnSave: true,
  productionSourceMap: false,
  chainWebpack: config => {
    //忽略的打包文件
    // config.externals({
    //   'vue': 'Vue',
    //   'vue-router': 'VueRouter',
    //   'vuex': 'Vuex',
    //   'axios': 'axios',
    //   'element-ui': 'ELEMENT',
    // });
    const entry = config.entry("app");
    entry.add("babel-polyfill").end();
    entry.add("classlist-polyfill").end();
    entry.add("@/mock").end();
  },
  devServer: {
    port: 1888,
    proxy: {
      "/api": {
        //本地服务接口地址
        target: "http://47.93.102.80:8001", //测试
        // target: "http://192.168.2.9:8001", //刘玉宝
        // target: "http://192.168.2.161:8001", //乔鹏
        // target: "http://192.168.2.42:8001",
        //远程演示服务地址,可用于直接启动项目
        // target: "https://saber.bladex.vip/api",
        ws: true,
        pathRewrite: {
          "^/api": "/"
        }
      }
    }
  },

  configureWebpack: {
    performance: {
      hints: false
    }
  }
};
