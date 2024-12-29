// Immediately invoked functions expressions (IIFE)
'use strict';
// Sometimes, in javascript we need a function to be executed just once and never again. i.e basically a function that disappears after it is executed once.

const runOnce = function(){
    console.log('This will never run again');
};
runOnce(); // we can run this function again at some other point in the code. if we wanted to, there is nothing stopping us doing runOnce();  again.
// so, this is not what we wanted to do. we want to actually execute a function immediately and not even saving somewhere.

// So, this is how we do it
// IIFE
(function(){
    console.log('This will never run again');
    const isPrivate = 23;
})();

// console.log(isPrivate);

// IIFE with arrow function
(() => console.log('This will never run again'))();

// Why was this pattern invented ?
// we know that functions create scopes and one scope does not have access to the variables in the inner scopes.
// For example : in the global scope, we do not have access to any variables that are defined inside the scope of any of the functions above.
// Therefore, we say all the data defined inside a scope is private. we also say that this data is encapsulated. isPrivate is encapsulated inside a function scope.
// Data encapsulation and Data Privacy are the extremely important concepts in programming, so many times we actually need to protect variable from being accidently overwritten by some other part of the program.
// Its important to hide variables and scopes are a good tool to do this and this in one such reason why IIFE was invented. IIFE is a pattern and not a feature of javascript programming.

//scopes
{
  const isPrivate = 23;
  var notPrivate =  46;
}
// console.log(isPrivate);
console.log(notPrivate);



