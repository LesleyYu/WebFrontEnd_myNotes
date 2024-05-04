/**
 * 总结：
 * Node.js模块：
 *  概念：每个文件就是一个模块，独立作用域，按需加载，需使用特定语法导出导入
 *  CommonJS 标准语法：
 *    导出：module.exports = {}
 *    导入：require('模块名或路径')
 *  ECMAScript 标准语法：
 *    默认导出：export default {}
 *    默认导入：import 变量名 from '模块名或路径'
 *    命名导出：export 修饰定义语句
 *    命名导入：import { 同名变量 } from '模块名或路径'
 * Node.js包：
 *  概念：把模块文件，代码文件，其他资料聚合成一个文件夹
 *  项目包：编写项目需求和业务逻辑的文件夹
 *  软件包：封装工具/方法的文件夹（一般用 npm 管理）
 *    本地软件包：封装属性/方法，在当前项目中使用，例如：dayjs，lodash
 *    全局软件包：封装工具/命令，在本机中使用，例如：nodemon
 * 常用命令：
 *  执行 js 文件：node xxx
 *  初始化 package.json: npm init -y
 *  下载本地软件包：npm i 软件包名
 *  下载全局软件包：npm i 软件包名 -g
 *  删除软件包：npm uni 软件包名
 */