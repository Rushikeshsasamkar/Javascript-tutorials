let key1 = Symbol('value1');

const obj = {
    name:"Rushikesh",
    mail:"xyz@gmail.com",
    isLoggedIn:"true",
    lastActivity : ['monday','tuesday','friday'],
    [key1]:"data"
}

// console.log(obj);

// console.log(typeof obj[key1]);



const obj1 = {
    name:"Rushikesh",
    mail:"xyz@gmail.com",
    isLoggedIn:"true",
    lastActivity : ['monday','tuesday','friday'],
    [key1]:"data"
}
const obj2 = {
    name2:"Raj",
    mail2:"raj@gmail.com",
    isLoggedIn2:"falsr",
    lastActivity2 : ['monday','tuesday','friday'],
    [key1]:"data"
}

// const obj3 = Object.assign({},obj1,obj2);

// const obj3 = {...obj1,...obj2}

// console.log(obj3);
// console.log(Object.keys(obj3));


// if (Array.isArray(Object.values(obj3).find(value => Array.isArray(value)))) {
//     // If any key holds an array, return that array
//     return Object.values(obj3).find(value => Array.isArray(value));
// }

const course={
    courseName:"Coding ninjas",
    price:"999",
    Instructor:"Aknush singla"

}


const {courseName} = course;

console.log(courseName);





