const axios = require("axios");

const data = axios.get("https://cat-fact.herokuapp.com/facts");

data
  .then((res) => {
    console.log(res.data);
  })
  .catch((err) => {
    console.log(err);
  })
  .finally(() => {
    console.log("Promise resolved");
  })