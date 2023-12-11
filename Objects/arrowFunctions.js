const add =(a,b) => a+b
// diff between the normal and arrow function is this of arrow functions hold the lexical scope values
console.log(add(1,2));


// IIFE are use to remove the global scope polution

(function abc(){
    console.log('DB Connected');
})();