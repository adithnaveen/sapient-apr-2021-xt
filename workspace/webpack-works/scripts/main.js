import  fnSayHi, {add, sub}  from "./maths.js"; 
import sayHi from './sample.js'

console.log(add(10, 20));
console.log(sub(10, 20));

fnSayHi();
sayHi();

window['add']= add;
window['sub'] = sub;