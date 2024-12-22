// THIS keyword and arrow function

// In JavaScript, the "this" keyword always refers to an object.
// The thing about it is that the object it refers to will vary depending on how and where "this" is being called.

const user = {
    username : "hitesh",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);  // "THIS" keyword refers to the curent context
        console.log(this);
        
    }
}

// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// console.log(this);

// this keyword inside a function in node environment
// function chai(){
//     let username = "Pritam";
//     console.log(this.username);
// }

// chai();

const chai = function(){
    let username = "Pritam";
    console.log(this.username);
}
// chai()

// this keyword in arrow function
// Arrow function
// const chai = () => {
//     let username = "Pritam";
//     console.log(this);
// }

chai();

// explicit return in arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// implicit return in arrow function
// const addTwo = (num1, num2) =>  num1 + num2;

// const addTwo = (num1, num2) => ( num1 + num2 );

const addTwo = (num1, num2) => ({username: "hitesh"});


console.log(addTwo(3,6));




// 1. How to Call this By Itself
// If we call this by itself, meaning not within a function, object, or whatever, it will refer to the global window object.
// If you print it like console.log('this alone', this); you'll get this in your console: [object Window].

// 2. How to Call this in an Object Method
// link to the article : https://www.freecodecamp.org/news/the-this-keyword-in-javascript/