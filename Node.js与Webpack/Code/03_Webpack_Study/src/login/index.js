/**
 * 目标1：体验 webpack 打包过程
 */
// 1.1 准备项目和源代码
import { checkPhone, checkCode } from '../utils/check.js'
console.log(checkPhone('13900002020'))
console.log(checkCode('123123123123'))
// 1.2 准备 webpack 打包的环境
// 1.3 运行自定义命令打包观察效果（npm run 自定义命令）

/**
 * 目标2：修改 webpack 打包入口和出口
 *  2.1 项目根目录，新建 webpack.config.js 配置文件
 *  2.2 导出配置对象，配置入口，出口文件路径
 *  2.3 重新打包观察
 */

/**
 * 目标3：用户登录-长度判断案例
 *  3.1 准备用户登录页面
 *  3.2 编写核心 JS 逻辑代码
 *  3.3 打包并手动复制网页到 dist 下，引入打包后的 js，运行
 */
// 3.2 编写核心 JS 逻辑代码
// document.querySelector('.btn').addEventListener('click', () => {
//   const phone = document.querySelector('.login-form [name=mobile]').value
//   const code = document.querySelector('.login-form [name=code]').value

//   if (!checkPhone(phone)) {
//     console.log('手机号长度必须是11位')
//     return
//   }

//   if (!checkCode(code)) {
//     console.log('验证码长度必须是6位')
//     return
//   }

//   console.log('提交到服务器登录...')
// })

/**
 * 目标4：使用 html-webpack-plugin 插件生成 html 网页文件，并引入打包后的其他资源
 *  4.1 下载 html-webpack-plugin 本地软件包
 *  4.2 配置 webpack.config.js 让 Webpack 拥有插件功能
 *  4.3 重新打包观察效果
 */

/**
 * 目标5：打包 css 代码
 *  5.1 准备 css 代码，并引入到 js 中
 *  5.2 下载 css-loader 和 style-loader 本地软件包
 *  5.3 配置 webpack.config.js 让 Webpack 拥有该加载器功能
 *  5.4 打包后观察效果
 */
// 5.1 准备 css 代码，并引入到 js 中
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'

/**
 * 目标6：优化-提取 css 代码到单独的 css 文件中
 *  6.1 下载 mini-css-extract-plugin 本地软件包
 *  6.2 配置 webpack.config.js 让 Webpack 拥有该插件功能
 *  6.3 打包后观察效果
 */

/**
 * 目标7：优化-压缩 css 代码
 *  7.1 下载 css-minimizer-webpack-plugin 本地软件包
 *  7.2 配置 webpack.config.js 让 Webpack 拥有该插件功能
 *  7.3 打包后观察效果
 */

/**
 * 目标8：打包 less 代码
 *  8.1 新建 less 代码（设置背景图）并引入到 src/login/index.js 中
 *  8.2 下载 less 和 less-loader 本地软件包
 *  8.3 配置 webpack.config.js 让 Webpack 拥有功能
 *  8.4 打包后观察效果
 */
// 8.1 新建 less 代码（设置背景图）并引入到 src/login/index.js 中
import './index.less'

/**
 * 目标9：打包资源模块（图片处理）
 *  9.1 创建 img 标签并动态添加到页面，配置 webpack.config.js
 *  9.2 打包后观察效果和区别
 */
// 9.1 创建 img 标签并动态添加到页面，配置 webpack.config.js
// 注意：js 中引入本地图片资源要用 import 方式（如果是网络图片http地址，字符串可以直接写）
import imgObj from './assets/logo.png'
const theImg = document.createElement('img')
theImg.src = imgObj
document.querySelector('.login-wrap').appendChild(theImg)

/**
 * 目标10：完成登录功能
 *  10.1 使用 npm 下载 axios（体验 npm 作用在前端项目中）
 *  10.2 准备并修改 utils 工具包源代码导出实现函数
 *  10.3 导入并编写逻辑代码，打包后运行观察效果
 */
// 10.3 导入并编写逻辑代码，打包后运行观察效果
import myAxios from '../utils/request.js'
import { myAlert } from '../utils/alert.js'
document.querySelector('.btn').addEventListener('click', () => {
  const phone = document.querySelector('.login-form [name=mobile]').value
  const code = document.querySelector('.login-form [name=code]').value

  if (!checkPhone(phone)) {
    myAlert(false, '手机号长度必须是11位')
    console.log('手机号长度必须是11位')
    return
  }

  if (!checkCode(code)) {
    myAlert(false, '验证码长度必须是6位')
    console.log('验证码长度必须是6位')
    return
  }

  myAxios({
    url: '/v1_0/authorizations',
    method: 'POST',
    data: {
      mobile: phone,
      code: code
    }
  }).then(res => {
    myAlert(true, '登录成功')
    localStorage.setItem('token', res.data.token)
    location.href = '../content/index.html'
  }).catch(error => {
    myAlert(false, error.response.data.message)
  })
})

/**
 * 目标11：配置开发服务器环境 webpack-dev-server
 *  11.1 下载 webpack-dev-server 软件包到当前项目
 *  11.2 设置打包的模式为开发模式，配置自定义命令
 *  11.3 使用 npm run dev 来启动开发服务器，试试热更新效果
 */ 
// 注意1：webpack-dev-server 借助 http 模块创建 8080 默认 Web 服务
// 注意2：默认以 public 文件夹作为服务器根目录
// 注意3：webpack-dev-server 根据配置，打包相关代码在内存当中，以 output.path 的值作为服务器根目录（所以可以直接自己拼接访问 dist 目录下内容）
console.log('观察页面是否有自动打包更新')

/**
 * 目标12；打包模式设置
 *  development：调试代码，实时加载，模块热替换（快）
 *  production：压缩代码，资源优化，更轻量等（小）
 * 设置方式：
 *  （1）：mode 选项设置
 *  （2）：--mode= 命令行设置（优先级高）
 */

/**
 * 目标13：webpack 环境下区分两种模式
 *  开发模式：style-loader 内嵌 css 代码在 js 中，让热替换更快
 *  生产模式：提取 css 代码，让浏览器缓存和并行下载 js 和 css 文件
 *  13.1 下载 cross-env 软件包到当前项目中
 *  13.2 配置自定义命令，传入参数名和值到 process.env 对象上（它是 Node.js 环境变量）
 *  13.3 在 webpack.config.js 调用使用做判断区分
 *  13.4 重新打包观察两种模式区别
 */

/**
 * 目标14：前端-注入环境变量
 * 需求：前端项目代码中，开发模式下打印语句生效，生产模式下打印语句失效
 *  14.1 webpack 中配置 DefinePlugin 插件
 *  14.2 前端代码使用，并在两个模式下使用，观察区别
 */
if (process.env.NODE_ENV === 'production') {
  console.log = function() {}
}
console.log('开发模式下好用，生产模式下失效')

/**
 * 目标15：source-map 调试代码
 *  问题：error 和 warning 代码的位置和源代码对不上，不方便我们调试！
 *  解决：启动 webpack 的 source-map 资源地图功能
 *  15.1 在 webpack.config.js 配置 devtool 选项和值开启功能（注意：只在开发环境下使用）
 *  15.2 代码中造成错误，并在开发服务器环境下查看效果
 */
console.warn('123')

/**
 * 目标16：路径解析别名设置
 *  作用：让我们前端代码引入路径更简单（而且使用绝度路径）
 *  16.1 在 webpack.config.js 中配置 resolve.alias 选项
 *  16.2 在代码中尝试并在开发环境和生产环境测试效果
 */
import youAxios from '@/utils/request.js'
console.log(youAxios)

/**
 * 目标17：第三方库使用 CDN 加载引入
 *  17.1 在 html 中引入第三方库的 CDN 地址并用模板语法判断
 *  17.2 配置 webpack.config.js 中 externals 外部扩展选项（防止某些 import 的包被打包）
 *  17.3 两种模式下打包观察效果
 */

/**
 * 目标18：多页面打包
 *  18.1 准备源码（html，css，js）放入相应位置，并改用模块化语法导出
 *  18.2 下载 form-serialize 包并导入到核心代码中使用（略过）
 *  18.3 配置 webpack.config.js 多入口和多页面的设置
 *  18.4 重新打包观察效果
 */