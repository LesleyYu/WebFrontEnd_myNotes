/**
 * 目标：安装所有依赖软件包
 * 场景：一般拿到别人的项目后，只有 package.json 缺少 node_modules 时需要做
 * 语法：在当前项目终端下，输入命令：npm i
 * 效果：会根据 package.json 记录的所有包和版本开始下载
 */

// 格式化日期
const dayjs = require('dayjs')
const nowDateStr = dayjs().format('YYYY-MM-DD')
console.log(nowDateStr)

// 求数组里最大值
const _ = require('lodash')
console.log(_.max([1, 2, 8, 3, 4, 5]))