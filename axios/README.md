# axios

 [GitHub官方文档](https://github.com/axios/axios)很好用

## axios 入门与源码分析

<https://www.bilibili.com/video/BV1wr4y1K7tq/>
尚硅谷前端 - 李强,

axios 是目前前端最热门的请求工具, 用来向服务器发送 AJAX 请求进行数据交换.

为什么axios?

1. axios 是最热门的工具
2. 有些同学反馈, 在求职过程中遇到了 axios 源码相关的面试题

课程都讲什么内容?

* axios 的 API 
* axios 源码分析 如果你已经掌握了基本使用, 可以直接学习源码分析部分
* 模拟实现重要功能

课程依赖

* promise
* ajax  HTTP

## server搭建

一个重要的小工具：[json-server](./1-json-server/json-server%20usage.md)

<https://github.com/typicode/json-server>

**how to use**
在命令行输入：
`npx json-server [xxx].json`

比如，在本文件夹下输入 ` npx json-server db.json`

就能运行了

## 使用

`npm install axios`
或者
```html
<script src="https://cdn.jsdelivr.net/npm/axios@1.6.7/dist/axios.min.js"></script>
```

### [基本使用](./2-axios使用/2.html)

```js
import axios from 'axios';
```

legacy way:

```js
const axios = require('axios');
```

!!!!!!!写到这里

## 源码分析