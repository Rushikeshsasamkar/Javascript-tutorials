function sayHello(user="default"){
    return `${user} is just logged in`;
}

let res = sayHello();

// console.log(res);


function loggedIn(){
    const userId = "rahul123";
    function proces2(){
        const password = 'rahul';
        console.log(`${userId} ${password}`);
    }
    proces2()
    // console.log(password); It will give an error outer function cant access the properties of the inner functions due to the variacle scope 
}

// loggedIn();


// expression functions 

const sayHello = function sayHello(){
    console.log("Hello world");
}



function sayHello(){
    console.log("Hello world");
}


// difference between normal functions and expression functions is we can call the normal functions before its declarations but not same case with the function expressions