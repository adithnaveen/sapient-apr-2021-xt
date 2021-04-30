// working with promise 

function divide(num1, num2) {

    return new Promise((resolve, reject) => {
        if(typeof num1 != 'number') {
            reject("Please enter first arg as number")
            return;
        }
        if(typeof num2 != 'number') {
            reject("Please enter second arg as number")
            return;
        }
        if(num2 ===0) {
            reject("Dont divide by Zero")
            return;
        }
        resolve (num1 / num2)
    })
}


console.log("Start of Script");
let a = 10; 
let b = "a2" ; 

// version-1 
// result
//     .then(res => console.log("Result is ", res))
//     .catch(err => console.log("Error : " + err))

// version-2
// result.then(res => console.log("Result is ", res))
// result.catch(err => console.log("Error : " + err))

// version-3 
// try {
//     let result = divide(a, b)
//     result.then(val => console.log(val))
// }catch(err) {
//     console.log("Error "  +  err);
// }

// version-4  (await)

setTimeout(async () => {
    try {
        let result = await divide(a, b)
        console.log(result);
    }catch(err) {
        console.log("Error : " + err);
    }
}, 0);

console.log("End of Script");