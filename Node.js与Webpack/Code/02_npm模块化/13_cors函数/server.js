/**
 * 目标：开启 cors 支持跨域资源共享
 * 步骤：
 *  1. 下载 cors 本地软件包
 *  2. 导入 cors 函数
 *  3. 使用 server.use() 给 Web 服务添加插件功能
 *  4. 把 cors 函数调用传入给 Web 服务，启动并测试
 */
const fs = require('fs')
const path = require('path')
const express = require('express')
const server = express()
// 2. 导入 cors 函数
const cors = require('cors')
// 3. 使用 server.use() 给 Web 服务添加插件功能
server.use(cors())

server.get('/api/province', (req, res) => {
  fs.readFile(path.join(__dirname, 'data/province.json'), (err, data) => {
    res.send(data.toString())
  })
})

server.all('*', (req, res) => {
  res.status(404)
  res.send('你要访问的资源路径不存在')
})

server.listen(3000, () => {
  console.log('Web 服务已启动')
})