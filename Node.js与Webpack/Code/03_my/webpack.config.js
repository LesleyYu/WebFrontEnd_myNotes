const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const webpack = require('webpack')

config = {
  // 打包模式 
  // mode: 'development',  // development：开发模式。使用相关内置优化
  // 注释掉了。因为不推荐用在这里配置对象的方式，更推荐使用 在 package.json 配置命令行参数的形式。
  entry: path.resolve(__dirname, 'src/login/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: './login/index.js',
    clean: true   // 生成打包后的内容之前，清空输出目录 // webpack 5.2 以上的版本才支持
  },
  // devtool: 'inline-source-map',
  devServer: {
    static: false,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: 'Developmennt',
      template: path.resolve(__dirname, 'public/login.html'),    // 模版文件（输入）
      filename: path.resolve(__dirname, 'dist/login/index.html'),    // 输出 html 文件
      useCDN: process.env.NODE_ENV === 'production',    // 生产模式下使用 cdn引入的地址
    }),
    new MiniCssExtractPlugin({
      filename: './login/index.css'
    }),  // 生成 css 文件
    new CssMinimizerPlugin(),    // 压缩 css 文件
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV)
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        // use: ["style-loader", "css-loader"],
        use: [process.env.NODE_ENV === "development" ? "style-loader" : MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [process.env.NODE_ENV === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
      },
      {
        test: /\.(png|jpg|jpeg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'assets/[hash][ext][query]'
        }
      }
    ],
  },
  optimization: {
    minimizer: [
      // 在 webpack@5 中，你可以使用 `...` 语法来扩展现有的 minimizer（即 `terser-webpack-plugin`），将下一行取消注释（保证 js 代码还能压缩）
      `...`,    //  会出现一个 index.js.LICENSE.txt 文件
      new CssMinimizerPlugin(),
    ],
    minimize: true,
  },
  // 设置解析别名路径
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  }
};

if (process.env.NODE_ENV === 'development') {
  config.devtool = 'inline-source-map'
}

if (process.env.NODE_ENV === 'production') {
  config.externals = {
    // key：import from 语句后面的字符串
    // value：留在原地的全局变量（最好和 cdn 在全局暴露的变量一致）
    'bootstrap/dist/css/bootstrap.min.css': 'bootstrap',
    'axios': 'axios'
  }
}

module.exports = config