// ----------------函数----------------
function DoSomething() {

}

// arrow function
const DoSomething = () => {

}

var fun1 = function() {
  console.log(1);
}
fun1;


// --------1. 匿名函数与自调用--------
(function () {
  alert(123);
})();
// 必要性：
// 作用域。防止全局变量的污染，封装一个局部作用。


// --------2. 函数当作参数 1 --------
// 函数也是一种数据类型
function fn() {

}
// function 数据类型 --> 对象（数组、函数）
console.log(typeof fn);

function f1(s) {
  s();
}
var f2 = function() {
  console.log(222);
}
f1(f2);
// Output: 222
// f2函数会被当作数值，传入f1函数内。————“回调”


// --------3. 函数当作参数 2 --------
function f1() {
  var s = 10;
  var f2 = function() {
    alert(2);
  }
  return f2;
}
var k = f1();
k();
// ————“闭包”


// --------4. 作用域、变量提升、JS代码的运行--------

console.log(a);
var a = 2;
/**
 * JS代码分为两个阶段：
 * 1. 解析（编译）阶段：语法检查，变量及函数进行声明。
 *    变量及函数声明会在这里发生！
 * 2. 运行阶段： 变量的赋值，代码流程的执行。
 * */

// 所以上面的代码其实是：
var a;
console.log(a);
a = 2;

// 题：
var a = 12;
function abc() {
  alert(a);
  var s = 10;
}
abc();
// Ouput: undefined

// 题：
console.log(1. + a);
function a() {
  console.log('aaaa');
}
var a = 1;
console.log(2. + a);
/* 
Output: 
1. function a() {
  console.log('aaaa');
}
如果 函数和变量重名了，那么函数会覆盖变量声明。

2. 1
因为a = 1 进行赋值了，所以函数声明被覆盖为了a = 1.
*/

// --------5. 作用域--------
var a = 3;
function f1() {
  // var a = 6;
  function f2() {
    // var a = 5;
    function f3() {
      // var a = 4;
      console.log(a);
    }
    f3();
  }
  f2();
}
f1();
/**
 * 当函数中使用某个变量时，优先在自己的作用域查找
 * 如果找不到，就会向上一级继续查找
 * 直到全局作用域
 * 如果还找不到直接报错
 * ————“作用域链”
 */