let foo:number = 123

foo = 'hello'


/*
in terminal, enter:
tsc 01-一个错误的TypeScript脚本.ts -outFile 01-app.js
  or
tsc --noEmitOnError 01-一个错误的TypeScript脚本.ts -outFile 01-app.js
观察不同点
*/

/*
还可以把 tsc 的编译参数携程config文件
见 tsconfig.json
*/