'use strict';

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];


console.log("------ BY USING forOf LOOP ------");
for (const [i, movement] of movements.entries()) {
    if(movement > 0){
        console.log(`Movement ${i + 1} : you deposited ${movement}`);
    }
    else{
        console.log(`Movement ${i + 1} : you withdrew ${Math.abs(movement)}`);
    }
}


console.log("------ BY USING forEach() method ------");

movements.forEach(function(movement, index, array){
    if(movement > 0){
        console.log(`Movement ${index + 1} : you deposited ${movement}`);
    }
    else{
        console.log(`Movement ${index + 1} : you withdrew ${Math.abs(movement)}`);
    }
})