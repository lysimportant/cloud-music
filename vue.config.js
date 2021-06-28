module.exports = {
  lintOnSave: false,
  configureWebpack: {
    resolve: {
      alias: {
        'components': '@/components',
        'views': '@/views',
        'assets': '@/assets'
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://lianghj.top:3000',
        changeOrigin: true,
        pathRewrite: {// 重写路径: 去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }
  }
}
