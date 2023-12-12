// for loop
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

let arr = []
for(let i =1;i<=10;i++){
    arr.unshift(i);
}
console.log(`arr before slice:-${arr}`);

let newArr = arr.slice();
console.log(newArr);
let arr = []
for(let i =1;i<=10;i++){
    arr.unshift(i);
}
console.log(`arr before slice:-${arr}`);

let newArr = arr.slice();
console.log(newArr);