'use strict';
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

const euroToUSD = 1.1;

const movementsUsd = movements.map(function(mov){
    return mov * euroToUSD;
})

console.log(movements);
console.log(movementsUsd);

const movementsUsdFor = [];

for(const mov of  movements){
    movementsUsdFor.push(mov * euroToUSD);
}

console.log(movementsUsdFor);

const movementToUsd = movements.map(mov => mov * euroToUSD);
console.log(movementToUsd);

const movementDescriptions = movements.map(function(mov, i, arr){
    if(mov > 0){
        return `Movement ${i + 1} : you deposited ${mov}`;
    }
    else{
        return `Movement ${i + 1} : you withdrew ${Math.abs(mov)}`;
    }
})

console.log(movementDescriptions);

