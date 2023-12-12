const course = [
    {
        name:"java",
        price:1000
    },
    {
        name:"javascript",
        price:2000
    },
    {
        name:"React Js",
        price:3000
    },
    {
        name:"asp.net",
        price:100
    }
]

const totalPrice = course.reduce((acc,co)=>acc+co.price,0)

console.log(totalPrice);