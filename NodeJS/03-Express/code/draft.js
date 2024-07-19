const express = require('express')
const app = express()

// 全局中间件的简化形式
app.use((req, res, next) => {
  console.log('middle ware function')
  const time = Date.now()
  req.startTime = time
  next()
})

// 局部生效的中间件
// 可以使用多个中间件
const mw1 = (req, res, next) => {
  console.log('calls part mw')
  next()
}

// 内置中间件
// 1） express.json 解析 JSON 格式的请求体数据
app.use (express.json())
// 2) express.urlencoded 解析 URL-encoded 格式的请求体数据
// app.use(express.urlencoded({ extended: false }))

// 第三方的中间件
// body-parser
const parser = require("body-parser")
app.use(parser.urlencoded({ encoded: false }))  // line 23

app.get('/', mw1, (req, res) => {
  console.log('calls "/" ');
  res.send("Home page." + req.startTime)
})

app.get("/user", (req, res) => {
  console.log('calls "/user" ')
  throw new Error("这是一个人为制造的错误") // 用于演示错误级中间件
  res.send("user page." + req.startTime)
})

// 错误级别的中间件
// tips: 错误级别的中间件必须注册在所有路由之后!
app.use((err, req, res, next) => {
  console.log('发生了错误！' + err.message)
  res.send("Error: " + err.message)
})

app.listen(80, () => {
  console.log(('http://127.0.0.1'))
})