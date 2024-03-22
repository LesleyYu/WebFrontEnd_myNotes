/**
------------ The url - A File On a Server ------------
The url parameter of the open() method, is an address to a file on a server.

The file can be any kind of file, like .txt and .xml, or server scripting files like .asp and .php (which can perform actions on the server before sending the response back).

------------ GET or POST? ------------
GET is simpler and faster than POST, and can be used in most cases.

However, always use POST requests when:

A cached file is not an option (update a file or database on the server).
Sending a large amount of data to the server (POST has no size limitations).
Sending user input (which can contain unknown characters), POST is more robust and secure than GET.
*/


// GET Requests
xhttp.open("GET", "demo_get.asp");
xhttp.send();
// In the example above, you may get a cached result. To avoid this, add a unique ID to the URL:
xhttp.open("GET", "demo_get.asp?t=", + Math.random());
xhttp.send();
// If you want to send information with the GET method, add the information to the URL:
xhttp.open("GET", "demo_get.asp?fname=Henry&lname=Ford");
xhttp.send();

// POST Requests
xhttp.open("POST", "demo_post.asp");
xhttp.send();
// To POST data like an HTML form, add an HTTP header with setRequestHeader(). Specify the data you want to send in the send() method:
xhttp.open("POST", "demo_post.asp");
xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
xhttp.send("fname=Henry&lname=Ford");