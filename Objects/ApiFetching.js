// fetch('https://api.github.com/users/hiteshchoudhary')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error('Error fetching data:', error));


function addition(input1){
    return function(input2){
        return input1+input2;
    }
}


let res = addition(3);

console.log(res(5));
console.log(res(2));
// currying example