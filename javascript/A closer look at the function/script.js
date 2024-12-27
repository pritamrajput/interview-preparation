'use strict';
// 1. Default Parameters
/**

const bookings = [];

const createBooking = function(flightNum, numPassengers = 9, price = 199 * numPassengers){
    // ES5 way of assigning default parameters
    // numPassengers = numPassengers || 9;
    // price = price || 199;
    const booking = {
        flightNum,
        numPassengers,
        price
    }

    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123');
createBooking('LH123', 10, 800);
createBooking('LH123', 10);
createBooking('LH123', 5);

createBooking('LH123',undefined, 1000);

*/

// 2. How passing arguments works : values vs Reference
const flight = 'LH123';

const jonas = {
    name: 'Jonas Schmedtmann',
    passport: 234325456,
}

const checkIn = function(flightNum, passenger){
    flightNum = 'LH999';
    passenger.name = "Mr. " + passenger.name;

    if(passenger.passport === 234325456){
        alert('Checked In');
    } else{
        alert('Wrong passport!');
    }
}

checkIn(flight, jonas);
console.log(flight);
console.log(jonas);

// When we pass primitive data type to the function. it simply copies the values of that variables. i.e flightNum = flight
// when we pass the object to the function than it copies the reference to the original object in the memory heap. i.e passenger = 'reference to the jonas object';

const newPassport = function(person){
    person.passport = Math.trunc(Math.random()*1000000);
}

newPassport(jonas);
checkIn(flight, jonas);
console.log(jonas);

// Note : In programming there are two terms that are used while dealing with the function i.e passing by value and passing by reference

// javascript only have passing by value and does not have passing by reference.

// ----- Explanation in details ------
// 1. Primitive types (e.g., numbers, strings, booleans, null, undefined) are passed by value. 
// This means that when you pass a primitive to a function, the function gets a copy of the value. 
// Changes made to the parameter inside the function do not affect the original value.

// 2. Objects (including arrays and functions) are passed by reference. This means that when you pass an object to a function, 
// the function can modify the original object. However, the reference itself is passed by value, 
// so reassigning the parameter to a new object will not affect the original object outside the function.

//What does "reference passed by value" mean?
// When you pass an object to a function in JavaScript, 
// the function receives a reference to that object, not the actual object itself. 
// This is why modifications to the properties of the object will affect the original object. 
// However, the reference itself is passed by value, meaning if you change the reference inside the function (point it to a new object), 
// it won't affect the original reference outside the function.

// Example 1: Modifying the original object
// When you modify the properties of an object inside a function, you're modifying the same object that was passed to the function. 
// This will affect the original object.

function modifyObject(obj) {
    obj.name = "New Name"; // Modifying the object's property
}

let person = { name: "John" };
modifyObject(person);
console.log(person.name); // Outputs: "New Name"

// The person object is passed by reference.
// The function modifies the name property of the object.
// Since the reference points to the same object, the change affects the original person object.

// Example 2: Reassigning the object reference inside the function
// If you reassign the object to a new object inside the function, 
// it will not affect the original object outside the function, because you're changing the reference to point to something new. 
// The original object remains unchanged.

function modifyObject(obj) {
    obj = { name: "Alice" }; // Reassigning the reference to a new object
}

let person1 = { name: "John" };
modifyObject(person);
console.log(person.name); // Outputs: "John"


// Explanation:
// The person object is passed by reference, but the reference itself is passed by value.
// Inside the function, the obj reference is reassigned to point to a new object ({ name: "Alice" }).
// This reassignment does not affect the original person object, so when we log person.name, it remains "John".

// Key Points:
// Modifying properties of the object passed to the function will affect the original object.
// Reassigning the object to a new object inside the function does not affect the original object, 
// because the reference itself is passed by value (not the actual object). The function only has a copy of the reference.