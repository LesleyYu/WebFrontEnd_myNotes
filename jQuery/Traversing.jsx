// -------- Ancestors --------
// return the one direct parent element of the selected element.
$("span").parent()

// return all ancestor elements of the selected element, all the way up to the document's root element (<html>).
$("span").parents() 
// filter the search for ancestors.
$("span").parents("ul");
// returns all ancestor elements between two given arguments.
$("span").parentsUntil("div");


// -------- Descendants --------

// The children() method returns all direct children of the selected element.This method only traverses a single level down the DOM tree.
$("div").children();
// optional parameter to filter the search for children.
$("div").children("p.myClass");

// The find() method returns descendant elements of the selected element, all the way down to the last descendant.
$("div").find("span");


// -------- Traversing Sideways --------
siblings()
next()
nextAll()
nextUntil()
prev()
prevAll()
prevUntil()


// -------- Filtering --------
first()
last()
eq()
filter()
not()