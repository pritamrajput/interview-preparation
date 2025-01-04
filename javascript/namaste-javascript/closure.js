// function x(){
//     var a = 7;

//     return function y(){
//         console.log(a);
//     }
//     // function y(){
//     //     console.log(a);    
//     // }

//     // return y;
// }

// var z = x();
// z();
// console.log(z);


function z(){
    var b = 900;
    function x(){
        var a = 7;
        function y(){
            console.log(a, b);    
        }
        y()
    }
    x();
}

z();
