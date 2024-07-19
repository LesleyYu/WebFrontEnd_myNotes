// 1. any
var x;
x = 1;
x = 'hi';
x = true;
x.foo = 100;
function add(x, y) {
    return x + y;
}
add(1, [1, 2, 3]);
// tsc -noImplicitAny app.ts
