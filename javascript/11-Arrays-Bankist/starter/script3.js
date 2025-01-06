'use strict';

// MAP
const currencies = new Map([
    ['USD', 'United states Dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);

currencies.forEach((value, key, map)=>{
   console.log(`${key}: ${value}`);
})

// SET
const currenciesUnique = new Set(['USD','GBP','USD','EUR','EUR']);
console.log(currenciesUnique);

currenciesUnique.forEach(function(value, _, map){
    console.log(`${value}: ${value}`);
})