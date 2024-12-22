// Object destructuring and JSON API

const course = {
    courseName : "JS in hindi",
    price: "999",
    courseIntructor: "Hitesh",
}

// console.log(course.courseIntructor);

// Object destructuring
const {courseIntructor: intructor, courseName, price} = course;
console.log(intructor);
console.log(courseName);


// json
// {
//     "name" : "hitesh choudhary",
//     "courename" : "js in hindi",
//     "price" : "free",
// }

[
    {},
    {},
    {}
]
