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
book.call(eurowings, 23, 'Sarah Williams');

book.call(lufthansa, 239, 'Mary Cooper');

const swiss = {
    airline: 'Swiss Air Line',
    iataCode: 'LX',
    bookings: [],
}

book.call(swiss, 35, "John Doe");


//2. Apply method
const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);
console.log(this);