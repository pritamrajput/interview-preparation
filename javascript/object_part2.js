// how to declare Objects with the help of contructors and make it singleton

// const tinderUser = {};   // this is a non singleton object.
const tinderUser = new Object();  // this is a singleton object.

tinderUser.id = "123abc";
tinderUser.name = "Sammy";
tinderUser.isLoggedIn = false;
 
// console.log(tinderUser);


// Nesting of objects
const regularUser = {
    email:"some@gmail.com",
    fullName : {
        userfullname : {
            firstname : "hitesh",
            lastname : "choudhary"
        }
    }
}

// console.log(regularUser.fullName.userfullname.firstname);

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "c",
    4: "d",
}

const obj3 = {
    5: "e",
    6: "f",
}

// const obj3 = {obj1, obj2};
// const obj4 = Object.assign( obj1, obj2, obj3);  
const obj4 = Object.assign({}, obj1, obj2, obj3);  // Object.assign(target, source);

const obj5 = {...obj1, ...obj2};  // spread operator
// console.log(obj4);
// console.log(obj1);
console.log(obj5);

// Array of objects
const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "h@gmail.com"
    },
    {
        id: 3,
        email: "h@gmail.com"
    }
];

console.log(users[1].email);

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));

