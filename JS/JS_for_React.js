// 1. 用... 展开
//    object
const person = {
  name: "Pedro", 
  age: 20,
  isMarried: false,
};

const person2 = {...person, name: "Jack"}

//    array
const names = ["Pedro", "Jack", "Jessica"];
const names2 = [...names, "Joel"];


// 2. Array functions
    // .map
names.map((name, i) => {
  console.log(name)
  return name +"1"
})

    // .filter
const names_to_be_filtered = ["Pedro", "Jack", "Jessica", "Pedro", "Pedro"];
names_to_be_filtered.filter((name) => {
  return name != "Pedro"
})

    // .reduce
    //...


// 3. Async + Await + Fetch
// 见 ./async.basics

// 4. DOM
// Document Object Model
// 讲了一些概念

// 5. Import Export Notation
// const axios = require("axois"); // JS
// import axios from "axios";      // React

// module.exports = { anObject };  // JS
// export { anObject };            // react

// 6. Optional Chaining
// https://www.youtube.com/watch?v=ACaT1Gfhe6I    10:46
const fetchData = async () => {
  const data = await fetch("imaginaryapi.com");
  const name = data.person?.name;   // the question mark ensures that we access 'person' only when the object has this attrib.
}

// 7. Template Literals
// use ``, we can insert js inside our string
const fetchData2 = async () => {
  const data = await fetch(`imaginaryapi.com/searchterm=${animalName}`);
  const name = data.person?.name;
}