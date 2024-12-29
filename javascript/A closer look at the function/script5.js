'use strict';

const lufthansa = {
    airline: 'Lufthansa',
    iataCode : 'LH',
    bookings : [],
    // book: function(){},
    book(fligthNum, name){
         console.log(this);
         console.log(`${name} booked a seat ${this.airline} flight ${this.iataCode}${fligthNum}`);
         this.bookings.push({flight: `${this.iataCode}${fligthNum}`, name})
         
    },
};

lufthansa.book(239, 'Jonas Schmedtman');
lufthansa.book(635, 'Jonas Smith');
console.log(lufthansa);

const eurowings = {
    airline: 'Eurowings',
    iataCode: 'EW',
    bookings: []
}


const book = lufthansa.book;
// Does NOT work
// book(23, 'Sarah Williams');


// 1. call method

book.call(eurowings, 23, 'Sarah Williams'); // :- call() method will call the book function with 'this' keyword set to eurowings object

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 35, "John Doe");


//2. Apply method
const flightData = [583, 'George Cooper'];

book.apply(swiss, flightData);  // :- apply() method will call the book function with 'this' keyword set to swiss object
console.log(swiss);

book.call(swiss, ...flightData);
console.log(this);


// 3. Bind method
// book.call(eurowings, 23, 'Sarah Williams');

const bookEw = book.bind(eurowings); // bind method will not call the book function instead, it will return a new function in which 'this' keywords points to the eurowings object.
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEw(234, 'Steven Williams');

const bookEW23  = book.bind(eurowings, 23);
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

// Situation where we can use bind() method
// 1. With EventListeners
lufthansa.planes =  300;
lufthansa.buyPlanes = function(){
    console.log(this);
    this.planes++;
    console.log(this.planes);
}
// lufthansa.buyPlanes();

// document.querySelector('#btnClose').addEventListener('click', lufthansa.buyPlanes); // Note : In an event handler function the 'this' keyword always points to the element on which the handler is attacked to.

document.querySelector('#btnClose').addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

// 2. Partial applications
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));
const addVAT = addTax.bind(null, 0.23);
// addVAT = value => value + value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function(rate){
    return function(value){
        return value + value * rate;
    }
}

const addVAT1 = addTaxRate(0.23);
console.log(addVAT1(100));