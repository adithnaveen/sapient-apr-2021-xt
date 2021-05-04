// these functions as of now is not eligible to get the 
// scope out of this file 
export function add (num1, num2) {
    console.log(typeof num1)
    return num1 + num2; 
}

export function sub(num1, num2) {
    return num1 - num2; 
}

export default function fnSayHi() {
    console.log('====================================');
    console.log("hi from Maths.js ");
    console.log('====================================');
}