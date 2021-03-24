const path = require('path');
const name = 'TS-VUE';
const sourceMap = process.env.NODE_ENV === 'development';

const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')

const devServerPort = 9327;

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: '/', // 基本路径
  outputDir: 'dist', // 输出文件目录
  lintOnSave: process.env.NODE_ENV === 'development', // eslint-loader 是否在保存的时候检查
  runtimeCompiler: true,
  chainWebpack: config => {
    // Provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    config.set('name', name);

    const svgRule = config.module.rule('svg')
    // 清除已有的所有 loader。
    // 如果你不这样做，接下来的 loader 会附加在该规则现有的 loader 之后。
    svgRule.uses.clear()
    svgRule
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      });
  },
  productionSourceMap: sourceMap, // 生产环境是否生成 sourceMap 文件
  css: {
    // css相关配置
    // 是否使用css分离插件 ExtractTextPlugin
    extract: true,
    // 开启 CSS source maps?
    sourceMap: false,
    // css预设器配置项
    loaderOptions: {},
    // 启用 CSS modules for all css / pre-processor files.
    modules: false
  },
  // use thread-loader for babel & TS in production build
  // enabled by default if the machine has more than 1 cores
  parallel: require('os').cpus().length > 1,
  // PWA 插件相关配置
  // see https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  pwa: {},
  devServer: {
    open: false,
    compress: true,
    host: '0.0.0.0',
    port: devServerPort,
    hot: true,
    https: false,
    proxy: {
      '/dev-api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/dev-api': ''
        }
      },
      '/wisdom-navigation-dev-api': {
        target: 'http://192.168.1.131:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/wisdom-navigation-dev-api': ''
        }
      }
    },
    before: app => {} // 用于在服务器内部所有中间件执行前定义自定义处理程序，即此选项可在本地模拟服务器数据返回。参考https://github.com/lbwa/set/issues/8
  },
  // 第三方插件配置
  pluginOptions: {
    // style-resources-loader(https://www.npmjs.com/package/vue-cli-plugin-style-resources-loader)
    // 导入一些公共的样式文件，比如：variables / mixins / functions，避免在每个样式文件中手动的@import导入
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        path.resolve(__dirname, 'src/styles/_variables.scss'),
        path.resolve(__dirname, 'src/styles/_mixins.scss')
      ]
    }
  },
  configureWebpack: {
    plugins: [
    ]
  }
};
