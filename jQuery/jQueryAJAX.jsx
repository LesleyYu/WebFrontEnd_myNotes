// ------ load() Method ------

Syntax:
$(selector).load(URL,data,callback);

/**
 * e.g.
 * "demo_test.txt":
<h2>jQuery and AJAX is FUN!!!</h2>
<p id="p1">This is some text in a paragraph.</p>
 */

$("#div1").load("demo_test.txt"); // load content of the file into a <div>
// add a jQuery selector to the URL paramete
$("#div1").load("demo_test.txt #p1");

// The optional callback parameter specifies a callback function to run when the load() method is completed. The callback function can have different parameters:
/**
 * responseTxt - contains the resulting content if the call succeeds
 * statusTxt   - contains the status of the call
 * xhr         - contains the XMLHttpRequest object
 */
$("button").click(function() {
  $("#div1").load("demo_test.txt", function(responseTxt, statusTxt, xhr) {
    if (statusTxt == "success")
      alert("External content loaded successfully!");
    if (statusTxt == "error")
      alert("Error: " + xhr.status + xhr.statusText);
  });
});


// ------ HTTP Request: GET vs. POST ------

// get() method syntax:
$.get(URL, callback);
// e.g.
$("button").click(function() {
  $.get("demo_test.asp", function(data, status) {
    alert("Data: " + data + "\nStatus: " + status);
  });
});

// post() method syntax:
$.post(URL,data,callback);
// e.g. 
$("button").click(function() {
  $.post("demo_test_post.asp",
  {
    name: "Donald Duck",
    city: "Duckburg"
  },
  function(data, status) {
    alert("Data: " + data + "\nStatus: " + status);
  });
});


// ------ Misc ------
// Filters:
$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});