02_src_hello_react

看/component/Hello下的两个文件

index.css变成了index.module.css
这叫做“样式的模块化”

可以避免components间样式的冲突

这样改名之后在 Hello/index.js里面的import语句也有变化
 `import hello from "./index.module.css"`
在calssName里的样式名之前也要加上类名
className = {hello.title}

 当然如果用less之后就同样可以避免这个问题，并且不用改名