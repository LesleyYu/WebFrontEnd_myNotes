// PedroTech
// https://www.youtube.com/watch?v=PgZ9npYJZzU

const event = new Promise((resolve, reject) => {
  var name = "Lesleyy";
  if (name === "Lesley") {
    resolve("Resolved. " + name);
  } else {
    reject("Wrong name. Name is " + name);
  }
});

// 用event
event
  .then((name) => {
    console.log(name);
})
  .catch((err) => {
    console.log(err);
})
  .finally(() => {
    console.log("Process Finished.")
})
