// ------ 1. 鼠标事件 ------

// 1. .click()
// 2. .dblclick()
// 3. .hover()
// 4. .mousedown()   鼠标按下
// 5. .mouseenter()  鼠标进入元素
// 6. .mouseleave()  鼠标离开元素
// 7. .mousemove()   鼠标在元素内移动
// 8. .mouseout()    鼠标离开元素（支持事件冒泡）
// 9. .mouseover()   鼠标进入元素内（支持事件冒泡）
// 10. .mouseup()    鼠标按键被释放


// ------ 2. 键盘事件 ------

// 1. .keydown()
// 2. .keypress()
// 3. .keyup()
// 其中，keyup只有在keydown和keypress没有被注册的情况下才会被触发


// ------ 3. 浏览器事件、文档加载事件 ------

/**
 * 1. 浏览器
 *    .error()
 *    .resize()
 *    .scroll()
 */

/**
 * 文档加载过程
 * （1）解析HTML结构
 * （2）加载外部脚本和样式表文件
 * （3）解析并执行脚本代码
 * （4）构造HTML DOM模型    // ready
 * （5）加载图片等外部文件
 * （6）页面加载完毕         // load
 */

// 写法1
$().ready(function() {
  // ...
})
// 写法2
 $(document).ready(function() {
  // ...
 })
 // 写法3
$(function() {
 // ...
})


// ------ 4. 绑定事件处理器 ------

// 1. bind()    不常用了
$(function() {
  $("p").bind({
    mouseover: function() {
      $(this).addClass("class1");
    },
    mouseout: function() {
      $(this).removeClass("class1");
    }
  })
})

// 也可以写成：
$(function() {
  $("p").bind("mouseover mouseout", function() {
    $(this).toggleClass("class1");
  })
})


// 2. delegate()  事件委托，现在也不常用了

//以上两个事件都用 on() 事件代替了


// 3&4. on() / off()

// 点击 #btn 弹出 haha
$(function() {
  $("#btn").on("click", function() {
    alert("haha");
  })
})

// 点击列表ul 下的 每一个 li，弹出 li 的对应内容
$(function() {
  $("ul").on("click", "li", function() {
    alert($(this).html());
  })
})

// on同时添加两个事件
$("p").on("mouseover mouseout", function() {
  alert("haha");
})

// 移除事件
var fn = function() {
  alert("haha");
}
$("div").on("click mouseover", "p", fn);
$("div").off("mouseover", "p", fn);

// 5. one()
// 只执行一次的on事件

// 6. unbind() 
// 7. undelegate()