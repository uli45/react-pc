const path = require('path')
const resolve = dir => path.resolve(__dirname, dir)
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const { whenProd, getPlugin, pluginByName } = require('@craco/craco')
module.exports = {
  webpack: {
    alias: {
      // '@': resolve('src'),  使用@代替src
      '@': resolve('src')
    },
    // * 重写 webpack 任意配置
    // *  - 与直接定义 configure 对象方式互斥
    // *  - 几乎所有的 webpack 配置均可以在 configure 函数中读取，然后覆盖
    // */
    configure: (webpackConfig, { env, paths }) => {
      // 关闭 devtool
      // webpackConfig.devtool = false
      whenProd(() => {
        //当生产环境的时候，把一部分第三方包使用cdn引入，不打包到main.js中
        // 这里如果设置使用cdn引入第三方包，需要去到 public目录下的 indx.html文件设置cdn地址 具体看代码
        webpackConfig.externals = {
          // react: 'React',
          // 'react-dom': 'ReactDOM',
          // 'react-router-dom': 'ReactRouterDom',
          // redux: 'Redux',
        }
        const { isFound, match } = getPlugin(
          webpackConfig,
          pluginByName('HtmlWebpackPlugin')
        )
        if (isFound) {
          match.userOptions.cdn = {
            //该链接可能会失效   可以访问免费cdn 查询 https://www.bootcdn.cn/
            js: [
              'https://cdn.bootcdn.net/ajax/libs/react/18.2.0/umd/react.production.min.js',
              'https://cdn.bootcdn.net/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js',
              'https://cdn.bootcdn.net/ajax/libs/redux/4.2.0/redux.min.js',
              'https://cdn.bootcdn.net/ajax/libs/react-router-dom/5.3.0/react-router-dom.min.js'
            ]
          }
        }
      })
      return webpackConfig
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.css$/,
          use: [
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        },
        {
          test: /\.scss$/,
          include: [path.resolve(__dirname, 'src')], //限制打包范围提高一丝丝速度
          exclude: /node_modules/, //排除node_modules
          use: [
            {
              loader: MiniCssExtractPlugin.loader,
              options: {
                publicPath: path.join(__dirname, 'src')
              }
            },
            {
              loader: 'css-loader',
              options: {
                sourceMap: false
              }
            },
            {
              loader: 'sass-loader',
              options: {
                sourceMap: false
              }
            }
          ]
        }
      ]
    },

    plugins:
      process.env.NODE_ENV === 'production'
        ? [
            // whenProd(()=>{
            new UglifyJsPlugin({
              uglifyOptions: {
                warnings: false,
                compress: {
                  // 移除 debugger
                  drop_debugger: true,
                  // 移除console.*函数
                  drop_console: true,
                  // 移除console.log的引用
                  // 例如 log = console.log, 移除log，同时移除console.log
                  pure_funcs: ['console.log']
                }
              },
              sourceMap: false,
              parallel: true // 使用多进程压缩
              // cache: true,// 使用缓存
            })

            // })
          ]
        : []
  }
}
