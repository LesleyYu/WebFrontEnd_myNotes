/**
 * 目标：基于 express 本地软件包，开发 Web 服务，返回资源给请求方
 */
// 1. 下载 express 软件包
// 2. 导入并创建 Web 服务对象
const express = require('express')
const server = express()

// 3. 监听请求的方法和请求的资源路径
server.get('/', (req, res) => {
  res.send('你好，欢迎使用 Express')
})

// 4. 监听任意请求的方法和请求的资源路径
server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

// 5. 监听端口号，启动 Web 服务
server.listen(3000, () => {
  console.log('Web 服务已启动')
})