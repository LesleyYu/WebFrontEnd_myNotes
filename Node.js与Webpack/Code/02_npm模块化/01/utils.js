/**
 * 目标：基于 CommonJS 标准语法，封装属性和方法并导出
 */
const baseURL = 'http://hmajax.itheima.net'
const getArraySum = arr => arr.reduce((sum, item) => sum += item, 0)

// 导出
module.exports = {
  url: baseURL,
  arraySum: getArraySum
}