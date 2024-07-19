var err = new Error("there's an error");
err.message 

// name 
if (error.name) {
  console.log(error.name + ': ' + error.message);
}



function throwit() {
  throw new Error('1');
}

function catchit() {
  try {
    throwit();
  } catch(e) {
    console.log(e.stack);   // print stack trace
  }
}

catchit()