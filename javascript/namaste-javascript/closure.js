function x(){
    var a = 7;

    return function y(){
        console.log(a);
    }
    // function y(){
    //     console.log(a);    
    // }

    // return y;
}

var z = x();
console.log(z);