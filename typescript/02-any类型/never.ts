let x:never;

function f():never {
  throw new Error("Error");
}

let v1:number = f();
let v2:string = f();
let v3:boolean = f();
