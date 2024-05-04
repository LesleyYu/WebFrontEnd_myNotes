const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: path.resolve(__dirname, 'src/main.js'), // 入口
  output: { // 出口
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.js',
    clean: true // 先清空 dist，然后再输出最新内容
  },
  plugins: [ // 插件列表
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/index.html') // 以指定的 html 文件作为生成模板
    })
  ],
  module: { // 加载器
    rules: [ // 规则列表
      {
        test: /\.css$/i, // 匹配 .css 结尾的文件
        use: ["style-loader", "css-loader"], // 使用从后到前的加载器来解析 css 代码和插入到 DOM
      },
      {
        test: /\.less$/i,
        use: [
          // compiles Less to CSS
          'style-loader',
          'css-loader',
          'less-loader',
        ],
      },
      { // 针对资源模块（图片，字体文件，图标文件等）处理
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset', // 根据文件大小（8KB）小于：把文件转成 base64 打包进 js 文件中（减少网络请求次数）大于：文件复制到输出的目录下
        generator: { // 输出文件时，路径+名字
          filename: 'assets/[hash][ext]'
        }
      }
    ],
  },
  resolve: { // 解析
    alias: { // 别名
      '@': path.resolve(__dirname, 'src')
    }
  }
};