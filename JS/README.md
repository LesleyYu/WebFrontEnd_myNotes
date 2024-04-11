---
这里是莱斯利学习JS的笔记
---



## JS for React 重点突击

### 模版字面量Template Literals

在 JavaScript 中, `${}` 是一种模板字面量 (template literal) 语法。它允许我们在字符串中嵌入表达式。

```js
`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tagFunction`string text ${expression} string text`
```

[官方docs](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Template_literals)

例子1：

```js
`nav-item ${type === item.type && 'active'}`
```

例子2:

```js
const fetchData2 = async () => {
  const data = await fetch(`imaginaryapi.com/searchterm=${animalName}`);
  const name = data.person?.name;
}
```





### 展开符`...`

1. **Object**:

```js
const person = {
  name: "Tony", 
  age: 20,
  isMarried: false,
};

const person2 = {...person, name: "Jack"}

```

​	Output: 

```js
person: {  
  name: "Jack", 
  age: 20,
  isMarried: false
}
```



2. **array**:

```js
const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];
```

​	Output: 

```js
["Pedro", "Jack", "Jessica", "Joel"]
```



### 函数

1. `.map`

```js
names.map((name, i) => {
  console.log(name)
  return name +"1"
})
```



2. `.filter`

```js
const names_to_be_filtered = ["Pedro", "Jack", "Jessica", "Pedro", "Pedro"];
names_to_be_filtered.filter((name) => {
  return name != "Pedro"
})
```



###  **Async + Await + Fetch**

见 ./async.basics



### Import Export Notation

```js
const axios = require("axois"); // JS
import axios from "axios";      // React

module.exports = { anObject };  // JS
export { anObject };            // react
```



### Optional Chaining

看[这个视频](https://www.youtube.com/watch?v=ACaT1Gfhe6I)    第10:46

```js
const fetchData = async () => {
  const data = await fetch("imaginaryapi.com");
  const name = data.person?.name;   // the question mark ensures that we access 'person' only when the object has this attrib.
}
```





