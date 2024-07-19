//7. 类似数组的对象

// arguments
function args() { return arguments }
var arrayLike = args('a', 'b');

arrayLike[0] // 'a'
arrayLike.length // 2
arrayLike instanceof Array // false

// DOM 元素集
var elts = document.getElementsByTagName('h3');
elts.length   // 3
elts instanceof Array // false

// 字符串
'abc'[1]      //'b'
'abc'.length  //3
'abc' instanceof Array  //false




var arr = Array.prototype.slice.call(arrayLike)

function print(value, index) {
  console.log(index + ': ' + value);
}

Array.prototype.forEach.call(arrayLike, print)




function logArgs() {
  Array.prototype.forEach.call(arguments, function (elem, i) {
    console.log(i + '. ' + elem);
  });
}



Array.prototype.forEach.call('abc', function (chr) {
  console.log(chr);
});
// 等效于
var arr = Array.prototype.slice.call('abc');
arr.forEach(chr => console.log(chr))