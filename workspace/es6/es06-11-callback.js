// working with callback 

function divide(num1, num2, callback) {
    if(typeof callback != 'function') {
        throw new Error("Sorry Please supply a callback / Handler")
    }


    setTimeout(() => {
        
        if(typeof num1 != 'number') {
            callback("Please enter argument 1 as number")
            return
        }
        if(typeof num2 != 'number') {
            callback("Please enter argument 2 as number")
            return
        }
        if(num2===0) {
            callback ("Dont Divide By Zero")
            return
        }
        
        callback(null, num1/num2)
        console.log("i'm in set timeout after callback.");
    }, 1000);
}
 

console.log("Start of Script");
let a = 10; 
let b = 1 ; 
let result = divide(a, b, (err, result) => {
    if(err) {
        console.log("Error : " +err);
    }else {
        console.log("Result ", result);
    }
}); 
console.log("End of Script");
