// singleton

// 1. creating objects with constructor :- Object.create

// 2. creating object with object literals

const mySym = Symbol("key1");
console.log(mySym);


const jsUser = {
   name : "hitesh",
   "full name" : "hitesh choudhary",
   [mySym]: "myKey1",
   age: 18,
   location: "jaipur",
   email: "hitesh@gmail.com",
   isLoggedIn: false,
   lastLoginDays : ["Monday", "Saturday"],
}

// ways to access value from an object
console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "hitesh@chatgpt.com";
console.log(jsUser);

// Object.freeze(jsUser);
jsUser.email = "hitesh@microsoft.com";
console.log(jsUser);

jsUser.greetings = function(){
    console.log("Hello javascript users");
}

jsUser.greetingsTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}

console.log(jsUser.greetings());
console.log(jsUser.greetingsTwo());
// console.log(jsUser)s

// creating arrays from objects
// 1. arrays of the values
console.log(Object.values(jsUser));

// 2. arrays of the keys
console.log(Object.keys(jsUser));

// 3. arrays of key value pairs
console.log(Object.entries(jsUser))




