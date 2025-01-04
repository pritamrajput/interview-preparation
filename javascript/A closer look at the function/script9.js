'use strict';
 let f;

 const g =  function(){
    const a  = 23;
    f = function(){
        console.log(a * 2);
    }
 }

 const h = function(){
    const b = 777;
    f = function(){
        console.log(b * 2);
    }
 }

 g();
 f();

// Re - assigning f function
 h();
 f();
 console.dir(f);


 // Example 2
 const boardPassengers = function(n, wait){
    const perGroup = n / 3;
     setTimeout(function(){
        console.log(`we are boarding all ${n} passengers`);
        console.log(`There are 3 groups each with ${perGroup} passengers`);
     }, wait * 1000);

     console.log(`will start boarding in wait ${wait} seconds`);
 }

//  const perGroup = 1000;
 boardPassengers(180, 3);