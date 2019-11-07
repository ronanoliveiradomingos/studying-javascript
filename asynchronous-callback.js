// function doMultiply() {
//     var a = 2;
//     var b = 5;
//     var c = a * b;
//     console.log(c);
// }

// doMultiply();

// --------------------------------------------------

let add = (a, b) => a + b;
let sub = (a, b) => a - b;
let calculate = (first, second, callback) => callback(first, second);

console.log(calculate(2, 1, sub));
console.log(calculate(2, 5, add));
