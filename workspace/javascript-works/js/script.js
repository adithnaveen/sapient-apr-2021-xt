// single line 
/* multi
    line */
/** 
 * this is doc comment 
 * */
console.log("I'm from Head Section")

function fnFirst() {
    console.log("You called fnFirst");
}


function fnVarEx() {
    var strVar = "Hello"
    var intVar = 100
    var boolVar = true

    console.log("String Value " + strVar);
    console.log("Integer Value " + intVar);
    console.log("Boolean Value " + boolVar);

    console.log(strVar + intVar)
    console.log(intVar + boolVar);

    // this is only value check 
    console.log(intVar=="100");

 // this is only value check  + data type check  
    console.log(intVar==="100"); // false 

    console.log(typeof strVar)
    console.log(typeof intVar)
    console.log(typeof boolVar)

    console.log(intVar/"a0"===NaN)
    console.log(isNaN(intVar/"a0"))

    console.log("hello i'm doing good but \"work from home\" ")
    console.log('hello i\'m dogin good but "work from home"');
}


function fnLargeTwo() {

    // 1. to convert integer - parseInt
    // 2. to convert float - parseFloat 
    var num1 = prompt("Enter First Number")
    var num2 = prompt("Enter Second Number")

    if(!isNaN(num1) && !isNaN(num2)) {
      console.log(num1>num2?"First Number is Large":"Second Number is Large");
    }else {
        console.log("Please enter only numbers");
    }
}


// display  


// there is no function overloading in javascript 
function display() {
    // console.log("I'm in display - no arg");
    // console.log(display.arguments.length);
    // console.log(display.arguments);

    for(i=0; i<display.arguments.length; i++) {
        console.log(display.arguments[i]);
    }
}


// function display(num1) {
//     console.log("I'm in display - 1 arg: "+ num1);
// }

// function display(num1, num2) {
//     console.log("I'm in display - 2 arg: "+ num1 +", " + num2);
// }

















