const name1 = "Vikash"
const name2= "Hinduja"
const age = 20; 
// templage strings `
const str = `This is for testing 
in the xt batch`

console.log(str)
console.log("First Participant : ", name1 , ", second Participant ", name2 )
console.log(`First Participant : ${name1}, second participant ${name2}`);
console.log(`${20>30?"First Is Large":"Second is Large"}`);

let str1 =`${name1} is ${age < 18 ?"Minor":"Major"}`;
console.log(str1);

//////////////////// working with function & template strings ////////////////

function myFunction(string, p1, p2, p3) {
    console.log("P1 :", p1);
    console.log("P2 :", p2);
    console.log("P3 :", p3);
    console.log("String is ", string);
    return string; 
}

let one = "One"
let two = "Two"
let three ="Three"
myFunction`first name: ${one} second name: ${two} third name: ${three}`

console.log("========================================================");
// this function takes the values as varaible args 
// you can have only one variable args 
// if you are having var args then it has to be the last 
// behind the screen the vargs is treated as arrays 
// let arr = new Array(30) vs  let arr = new Array();

// function fnFunction1(val, args[], anotherarg) {

function fnFunction1(val, ...args) {
    console.log("Val : ", val);
    console.log("Args ", args);
    console.log("Number of args got " , args.length);
} 

fnFunction1("Electronics", "Monitor", "Keyboard", "processror")
fnFunction1 `some string goes here ${one} ${three} again some string ${two}`