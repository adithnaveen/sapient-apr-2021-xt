// go sit in global scope (window scope)
var1 = 100; 
var var2 = 200; 

function one() {
    console.log("Function one ");
    console.log(var1);
    console.log(var2);

    for(let  i=0; i<3; i++) {
        console.log(i);
    }

    // console.log( "after for loop " + i);
    // var if it is declared inside the function then 
    // its global to function local outside 
    var oneV1 = 100; 
    // this will be stored in global scope 
    oneV2 = 333; 
}

function two() {
    one();    
    // console.log(oneV1);
    console.log(oneV2);
}
two();
