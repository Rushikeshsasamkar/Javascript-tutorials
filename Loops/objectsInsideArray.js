const data = [
    {
        stdName:"Rahul",
        rollNo:1
    },
    {
        stdName:"raj",
        rollNo:2
    },
    {
        stdName:"aryan",
        rollNo:3
    },
    {
        stdName:"vivan",
        rollNo:4
    },
    {
        stdName:"sam",
        rollNo:5
    }
]

// data.forEach((item)=>{
//     console.log(`${item.stdName} and value is ${item.rollNo}`);
// })


const num = [1,2,4,5,6,7,89,9]
// const numData = num.map((n)=>{
    
//    return n;
// })
const numData = num.filter((n)=>{
    
   return n>5;
})

// fiter is used to provide the condition after the callback

// console.log(numData);

// If we didnt want to use the filter then we have to use the below code

// const arrData=[];
// num.forEach((num)=>{
//     if(num>5){
//         arrData.push(num)
//     }
//     return arrData;
// })

// console.log(arrData);