

// -------- Add Elements --------

/**
 * append() - Inserts content at the end of the selected elements
 * prepend() - Inserts content at the beginning of the selected elements
 * after() - Inserts content after the selected elements
 * before() - Inserts content before the selected elements
 */

// Add Several New Elements With `append()` and `prepend()`
function appendText() {
  var txt1 = "<p>Text.</p>";               // Create element with HTML 
  var txt2 = $("<p></p>").text("Text.");   // Create with jQuery
  var txt3 = document.createElement("p");  // Create with DOM
  txt3.innerHTML = "Text.";
  $("body").append(txt1, txt2, txt3);      // Append the new elements
}


// Add Several New Elements With after() and before()
function afterText() {
  var txt1 = "<b>I </b>";                    // Create element with HTML 
  var txt2 = $("<i></i>").text("love ");     // Create with jQuery
  var txt3 = document.createElement("b");    // Create with DOM
  txt3.innerHTML = "jQuery!";
  $("img").after(txt1, txt2, txt3);          // Insert new elements after <img>
}



// -------- Remove Elements --------
/**
 * remove() - Removes the selected element (and its child elements)
 * empty()  - Removes the child elements from the selected element
 */

// Filter the Elements to be Removed
/** 
 * The jQuery remove() method also accepts one parameter, which allows you to filter the elements to be removed.
 * The parameter can be any of the jQuery selector syntaxes.
 * The following example removes all <p> elements with class="test":  */
$("p").remove(".test");

// This example removes all <p> elements with class="test" and class="demo":  
$("p").remove(".test .demo");



// -------- Get and Set CSS Classes --------

/**
 * addClass() - Adds one or more classes to the selected elements
 * removeClass() - Removes one or more classes from the selected elements
 * toggleClass() - Toggles between adding/removing classes from the selected elements
 * css() - Sets or returns the style attribute
 */

// css()
// return the background-color value of the FIRST matched element:
$("p").css("background-color");
// set the background-color value for ALL matched elements:
$("p").css("background-color", "yellow");
// Set Multiple CSS Properties
$("p").css({"background-color": "yellow", "font-size": "200%"});


// -------- Dimensions --------
/**
 * width()
 * height()
 * innerWidth()
 * innerHeight()
 * outerWidth()
 * outerHeight()
 */

// The width() / height() method sets or returns the width/height of an element (!! excludes padding, border and margin).
$("button").click(function() {
  var txt = "";
  txt += "Width: " + $("#div").width() + "</br>";
  txt += "Height: " + $("#div").height();
  $("#div").html(txt);
});

// The innerWidth() / innerHeight() method returns the width/height of an element (!! includes padding, excluding border and margin).
$("button").click(function(){
  var txt = "";
  txt += "Inner width: " + $("#div").innerWidth() + "</br>";
  txt += "Inner height: " + $("#div").innerHeight();
  $("#div").html(txt);
});

// The outerWidth() / outerHeight() method returns the width/height of an element (includes padding and border, excluding margin).

// The outerWidth(true) / outerHeight(true) method returns the width/height of an element (includes padding, border, and margin).

// e.g.
// get the width and height of the document (the HTML document) and window (the browser viewport):
$("button").click(function() {
  var txt = "";
  txt += "Document width/height: " + $(document).width();
  txt += "x" + $(document).height() + "\n";
  txt += "Window width/height: " + $(window).width();
  txt += "x" + $(window).height();
  alert(txt);
});

// set the width and height of a specified <div> element:
$("button").click(function(){
  $("#div1").width(500).height(500);
});
