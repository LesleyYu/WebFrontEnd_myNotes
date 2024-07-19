// 2. unknown类型
let x: unknown;

x = true;
x = 42;
x = 'hello';


let v: unknown = 123;

let v1:boolean = v; // err
let v2:number = v;  // err


let t1:unknown = {foo: 123};
t1.foo  // err

let t2: unknown = 'hello';
t2.trim() // err

let t3:unknown = (n = 0) => n + 1;
t3()  // err

let a: unknown = 1;
a + 1 // err
a === 1



// 类型缩小
let c:unknown = 1;

if (typeof c === 'number') {
  let r = c + 10;
}