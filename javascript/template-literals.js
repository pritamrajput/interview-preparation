// Multiline strings
var a = "Line will break after this \n\line broke before backsalsh \n\broke again";
console.log(a);

var b = `line will break after this
line broke before backsalsh
broke again`;

console.log(b);

// String interpolation
// before ES6
var b =  4;
var a = "Two plus two is " + b;
console.log(a);

// with ES6 
let c = 4;
let d = `Two plus two is ${c}`;
console.log(d);

// expression interpolation
// before ES6
var b = 2;
var a = "Two plus two is " +(b + b);
console.log(a);

// with ES6
let e = 2;
let f = `two plus two is ${e + e}`;
console.log(f);


// Nesting : with ES6 it is possible to nest templates with one another
let firstName = "prashant";
let lastName = "yadav";

console.log(`Hello! ${`My name is ${firstName} ${lastName}`}`);

// ternary operator
// with ES6 we can easily add logic to the template literals
let t = 5;
console.log(`a is greater than 5 ? ${t > 5 ? true:false}`);

// Passing a function inside  template literals
let q = () => 5;
console.log(`a is greater than 5 ${q() > 5 ? true : false}`);

let i = (i) => i > 5;
let y = 6;
console.log(`y is greater than 5 ${i(y)}`);


// Tagged templates






 



// Day 2  : interview prep
// uses of template literals
// 1. Multiline strings
// 2. String interpolation
