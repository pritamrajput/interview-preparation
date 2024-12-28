// 3. First class and higher order functions
'use strict';

// javascript is a language which has first class function.
// which means "javascript treats functions as first class citizens."
// In practise it means that functions are treated as simply "values".
// Why javascript work this way ?
// Its simply because functions are just another type of object in javascript and since objects are values, so functions are values too.

//1. storing functions in variables or properties
const add = (a, b) => a + b;

const counter = {
    value: 23,
    inc: function(){
        this.value++;
    }
}

// 2. we can pass functions as arguments to other functions
const btnClose = document.querySelector('#btnClose');
const greet = () => console.log('Hey jonas');
btnClose.addEventListener('click', greet);

// 3. We can return Functions from Functions

// ---> Remember that functions in javascripts are object and many types of objects in javascript has methods.
// 4. call methods on functions
counter.inc.bind(someOtherObject);


// The fact that javascript has first class functions makes it possible for us to use and write HIGHER ORDER FUNCTIONS

// HIGER ORDER FUNCTIONS :-
// either a function that receives another function as an argument or a function that returns a new functions, or both.
// This is only possible because of first-class function.

// 1. Function that receives another function
const btnClose1 = document.querySelector('#btnClose');
const greet1 = () => console.log('Hey jonas');
btnClose1.addEventListener('click', greet1);   // addEventListener is a  HIGHER ORDER FUNCTION and "greet1" is a callback function.

// 2. Funtion that returns new function.
function count(){   // "count" is a higher order function.
    let consider = 0;

    return function(){  // function returned
        counter++;
    };
}
