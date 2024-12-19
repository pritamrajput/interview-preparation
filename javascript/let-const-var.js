var greeter = "hi";

function newFunction(){
    var greeter = "hello";
    console.log(greeter);
    
}

if(true){
    var greeter = "new greeter";
}

console.log(greeter);
newFunction();

console.log(greetings);
var greetings = "namaste";

var greetings;
console.log(greetings);
greetings = "namaste";




// notes :- DAY - 1
// Scope essentially means where these variables are available for use
// var declarations are globally scoped or function/locally scoped.
// 1. var declaration is function scope.
// 2. var scope is limited to that function only when it is declared inside a function.
// 3. when var is declared outside the function, it has global scope.

// Hoisting
// -- it is a javascript mechanism where functions and variables declarations are moved to the top of their scope before code execution.


// let is block scoped 
// 1. A block is a chunk of code bounded by {}.
// 2. So a variable declared in a block with "let" is only available for use within that block.