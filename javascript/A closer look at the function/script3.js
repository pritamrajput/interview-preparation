// Functions accepting callback Functions : HIGHER ORDER FUNCITONS
'use strict';

const oneWord = function(str){
    return str.replace(/ /g, "").toLowerCase();
}

const upperFirstWord = function(str){
    const [first, ...others]  = str.split(' ');
    return [first.toUpperCase(), ...others].join(' ');
}

// HIGHER ORDER FUNCTION
const transformer = function(str, fn){
    console.log(`Original string: ${str}`);
    console.log(`Tranformed string: ${fn(str)}`);

    console.log(`Transformern by: ${fn.name}`)
}

transformer('Javascript is the best!', upperFirstWord);
transformer('Javascript is the best!', oneWord);


// Javascript uses callbacks all the time.
const high5 = function(){
    console.log('🙌')
};

document.body.addEventListener('click', high5);
['Jonas', 'Martha', 'Adam'].forEach(high5);


// To provide level of abstraction, callbacks functions are used :- one of the use of callback functions. 