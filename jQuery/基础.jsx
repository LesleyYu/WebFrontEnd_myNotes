// ------ 1. 基础选择器 ------

$(function() {
  // ready状态，表示当html都加载完成的时候

  $("div *").html("hello world");
  // 选择div标签，而且是所有的（“*”）div标签。
  // All Selector
})

/**
 * Class Selector   $(".class")
 * 
 * Element Selector   $("element")
 * 
 * ID Selector      $("#ID")
 * 
 * Multiple Selector  $("selector1, selector2, selectorN")
 */



// ------ 2. 属性选择器 ------

// 属性 包含
// Attribute contains word selector [name~="value"]
$("input[name~='man']").val('mr.man is in it');
// 其name属性 里面包含‘man’ 的input框，它的值变成'mr.man is in it'。

// 属性 开始
// Attribute Starts with selector [name^="value"]

// 属性 结尾
// Attribute Ends with selector [name$="value"]

// 属性 不存在
// Attribute Not Equal selector [name!="value"]

// 有属性
// has attribute selector [name]
$("[attribute]")

// 结合以上
// Multiple Attribute Selector



// ------ 3. 基础过滤 ------

// 1. animated Selector

// HTML:
// <button id="run">run</button>
// <div></div>
// <div id="mover"></div>
// <div></div>

$(function() {
  // 让有动画效果的div变色
  $("#run").click(function() {
    $("div:animated").toggleClass("colored");
  });

  // 让第三个div动起来
  function animateIt() {
    $("#mover").slideToggle("slow", animateIt);
  }
  animateIt();
})

// 2. 第x个元素 :eq(x) selector
$(":eq(index)")

// 3. 第偶数/奇数个元素  :even Selector / :odd Selector
$(":even")

// 4. 第一个  :first selector
$(":first")

// 5. 选择当前获取焦点的元素 :focus selector
$(":focus")
//  下面这个程序很牛逼
/**
 * HTML:
<div id="content">
  <input tabindex="1"/>
  <input tabindex="2"/>
  <select tabindex="3">
    <option>select menu</option>
  </select>
  <div tabindex="4">
    a div
  </div>
</div>
 */

$(function () {
  // content里面的所有元素，focus和blur的状态根据 下面这个function变化
  $("#content").delegate("*", "focus blur", function(e) {
    var e=$(this);  // e为当前这个元素
    setTimeout(function() {
      e.toggleClass("focused", e.is(":focus"));
    }, 0);    // 马上执行
  })
})

// 6. :header selector
$(":header")

// 7. :last Selector
$(":last")

// 8. :gt() selector
$(":gt(index") 或 $(":gt(-index)")

// 9. :lt() Selector
$(":lt(index)") 或 $(":lt(-index)")

// 例子
// 略


// ------ 4. 子元素过滤 ------

// 1. :first-child selector
$(function() {
  $("div span:first-child") // first-child选择器
    .css("text-decoration", "underline")  // 第一个child加下划线
    // 鼠标悬停的元素 将会：
    .hover(                 // https://api.jquery.com/hover/
      // 进入的时候 被加Class
      function() {  
        $(this).addClass("sogreen");
      }, 
      // 出来的时候 被去掉Class
      function() {
        $(this).removeClass("sogreen");
      }
    );
})

// 2. :last-child selector

// 3. :first-of-type selector
// 选择所有相同元素名称的第一个兄弟元素
$(":first-of-type")

// 4. :last-of-type selector
// 选择所有相同元素名称的最后一个兄弟元素
$(":last-of-type")

// 5. :nth-child() selector
// 选择他们所有父元素的第n个子元素
$(":nth=child(index/even/odd/equation)")



// ------ 5. 内容过滤 ------

// 1.  :contains() Selector
// 选择所有包含制定文本的元素
$(":contains(text)")

// 2. :empty Selector
// 选择所有没有子元素的元素
$(":empty")

// 例子 


// 3. :has Selector
// 选择元素 其中至少包含指定选择器匹配的一种元素
$(":has(selector)")

// 4. :parent Selector
// 选择所有含有子元素或者文本的父级元素
$(":parent")

// ------ 6. 表单 ------

// ------ 7. 层级 ------
/**
 * 难点：
 * 3. next adjascent selector
 * 4. Next sibling selector
 */

// ------ 8. 扩展、可见性过滤 -------

// 1. hidden selector
$(":hidden")

// 2. visible selector
$(":visible")