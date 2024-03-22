// async await only works when you create a function that is declared as asynchronous

const axios = require("axios");

// 写法1
// async function fetchData() {}

// 写法2
const fetchData = async () => {
  try {
    const data = await axios.get("https://cat-fact.herokuapp.com/facts");
    console.log(data);
  }catch (err) {
    console.log(err)
  }

}

fetchData();