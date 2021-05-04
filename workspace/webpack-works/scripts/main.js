import  fnSayHi, {add, sub}  from "./maths.js"; 
import sayHi from './sample.js'

console.log(add(10, 20));
console.log(sub(10, 20));

fnSayHi();
sayHi();

window['add']= add;
window['sub'] = sub;


const initApp = () => {
    document.querySelector("#btnAdd").addEventListener("click", () => {
        addTwoValues(); 
    })
}

const addTwoValues = () => {
    let num1 = parseInt(document.querySelector("#num1").value)
    let num2 = parseInt(document.querySelector("#num2").value) 

    let result =  add(num1, num2)
    document.querySelector("#result").innerHTML =result; 
}

initApp(); 