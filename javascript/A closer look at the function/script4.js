'use strict';

const greet = function(greeting){
  return function(name){
     console.log(`${greeting} ${name}`);
  }
}

const greeterHey = greet('hey');
console.log(greeterHey);
greeterHey('Jonas');
greeterHey('Steven');

greet('Hello')('smith');

// Challenge
// with arrow functions
const greet1 = (greetings) => {
    return (name) => {
        console.log(`${greetings} ${name}`);
    }
}

const greetings2 = greet1('Hello');
greetings2("Virat");