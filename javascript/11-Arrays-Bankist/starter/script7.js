'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const deposits = movements.filter(function(mov){
    return mov > 0;
})

console.log(movements);
console.log(deposits);