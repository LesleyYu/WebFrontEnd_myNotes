// 1. currentTarget 和 target 和 delegateTarget

/**
<div>
  <p>click me</p>
</div>
 */
$(function() {
  $("div").on("click", function(e) {
    console.log($ (e.currentTarget) );  // div ————事件的监听者
    console.log($ (e.target) );         // p   ————事件的目标
    console.log($(this));   // div
    console.log($ (e.delegatetTarget) );// p   ————事件的委托者

  })
})

// 2. pageX pageY
// pageX 左边缘
// pageY 右边缘

// 3. e.type
// 当前事件的类型

// 4. e.preventDefault
// 阻止元素的默认事件，比如 a 元素的页面跳转

// 5. stopPropogation