helloWorld();

// the function is hoisted (pulled all the way up) 
function helloWorld() {
    console.log('====================================');
    console.log("Hi i'm from hello world");
    console.log('====================================');
}

let helloWorld1 = ()  => {
    console.log("Hi this is HELLO WORLD1");
}

console.log("Ref of helloWorld1: " +helloWorld1);

helloWorld1()

console.log(var1); // the scope of 100 is not here 

var var1=100; 

console.log(var1); // the scope of 100 is  here 

// the concept of hoisting will not work for class 
console.log(new Emp()) 
class Emp {}






