// try {
//   throw '出错了';
// } catch (e) {
//   console.log(111);
// }
// console.log(222)




// 嵌套
// var n = 100;

// try {
//   throw n;
// } catch (e) {
//   if (e <= 50) {
//     // ..
//   } else {
//     throw e;
//   }
// }



// try {
//   foo.bar();
// } catch (e) {
//   if (e instanceof EvalError) {
//     console.log(e.name + ": " + e.message);
//   } else if (e instanceof RangeError) {
//     console.log(e.name + ": " + e.message);
//   }
//   // ...
// }


// function cleanUp() {
//   try {
//     throw new Error('出错了');
//     console.log('此行不会执行');
//   } finally {
//     console.log('完成清理工作');
//   }
// }

// cleanUp()



// var count = 0;
// function countUp() {
//   try {
//     return count;
//   } finally {
//     count++;
//   }
// }
// countUp()
// count




function f() {
  try {
    console.log(0);
    throw 'bug';
  } catch(e) {
    console.log(1);
    return true; // 这句原本会延迟到 finally 代码块结束再执行
    console.log(2); // 不会运行
  } finally {
    console.log(3);
    return false; // 这句会覆盖掉前面那句 return
    console.log(4); // 不会运行
  }

  console.log(5); // 不会运行
}

var result = f();
// 0
// 1
// 3

result
// false



function f() {
  try {
    throw '出错了！';
  } catch(e) {
    console.log('捕捉到内部错误');
    throw e; // 这句原本会等到finally结束再执行
  } finally {
    return false; // 直接返回
  }
}

try {
  f();
} catch(e) {
  // 此处不会执行
  console.log('caught outer "bogus"');
}

//  捕捉到内部错误