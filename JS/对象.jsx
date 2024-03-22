// ------ 2. this是个对象 ------
function f() {
  // 普通的函数中也是有this的
  // this指向全局对象（window）
  console.log(this);
}
f();


// ------ 3. this 指向哪里 ------
// this运行在哪个对象下，就指向哪个对象
var o1 = {
  age: 18,
  fun: function() {
    console.log(this.age);
  }
}

var o2 = {
  age: 16,
  fun: o1.fun,
}
o2.fun();
// Output: 16


// ------ 4. 对象的遍历及删除 ------
// for ... in
// for( Key in Object)

var o1 = {
  name: 'lucy',
  age: 15,
  gender: 'female'
}

for (var k in o2) {
  console.log(o1[k]);
}

// ------ 5. 包装对象 ------
/**
 * 三种原始类型：数值、字符串、布尔值
 * 原始类型的数据在一定条件下可以自动转为对象
 * ————“包装对象”
 */

var v1 = new Number(123);
console.log(v1);
// Output:
// Number {123}
// 这其实就是一个对象

var a = '456';
a.length;
// 原始值 可以自动被当作对象来调用，包括各种属性和方法
// 如果包装对象使用完成，会自动立即销毁


// ------ 6. 数学对象 ------
// ------ 7. 日期对象 ------
// ------ 8. 数组对象 ------
// ------ 9. 字符串对象 ------
