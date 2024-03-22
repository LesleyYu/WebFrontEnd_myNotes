import React from 'react';        // 引入react核心库
import ReactDOM from 'react-dom'; // 引入react-DOM
import App from './App.jsx';

// 以下讲解为什么能写 `import {Component} from 'react';`
import React1 from "./module.js"
console.log(React1)
// 1.
const { Component } = React1  // 结构赋值，不会报错
console.log(new Component());
// 2.
// 如果要直接拿 import {Component} from 'react'; 就要在module.js分别export

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);