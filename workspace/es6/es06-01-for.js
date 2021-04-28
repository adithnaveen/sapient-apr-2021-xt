console.log("Hello i'm from cli")
function fnTest() {
    // the scope of the variable decl with let 
    // will be only at block level 
    for(let i=0; i<10; i++) {
        console.log("i value is ", i);
    }

    // this will not work since its let which 
    // is defined at block level 
    // console.log("I value outside for loop ", i);
}
fnTest()

var var1 ="First Variable" 
{
    console.log("The value of var1 ", var1);
    let var2="Second Variable"
    {
        const var3="Third Variable Variable"
        console.log("Var2 in nest-nest ", var2);
    }
    console.log("Var2 in nest block ", var2);
    // console.log("Var3 in nest block ", var3);
}
// console.log("var2 out of instance block ", var2);

let obj ={name:"Ayush"}
Object.freeze(obj);
obj.age=22
console.log(obj);

// once the const variable is declared you cannot change the value 
const constVal = 100; 
console.log(constVal);
constVal = 200; 