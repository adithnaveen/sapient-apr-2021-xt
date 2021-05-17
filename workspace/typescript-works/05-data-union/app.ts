function totalLength1(param1:(any [] | string), param2 : (string | any [])) {
    
    if(param1 instanceof Array) {
        param1.push("New Data")
    }
    if(param1 instanceof String) {
        param1.substr(0,3)
    }

    let total = param1.length + param2.length; 
    return total; 
}

let retVal1 = totalLength1([10,20,30], "HELLO")
console.log(`Return Values is ${retVal}`);

let retVal2 = totalLength1("HELLO", [10,20,30], )
console.log(`Return Values is ${retVal}`);

totalLength1("Hello", "hi")
totalLength1([1,2,3,4], [1,2,3,4])


// this will not work since 123 is number there is no matching signature  
//   retVal2 = totalLength(123, [10,20,30], )
// console.log(`Return Values is ${retVal}`);

 