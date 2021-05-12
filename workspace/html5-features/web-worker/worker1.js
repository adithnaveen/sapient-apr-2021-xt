
function looper(val1, val2) {
    let result = 0; 
    for(let i=0; i<val1; i++) {
        console.log("outer loop ");
        for(let j =0; j<val2; j++) {
            console.log("inner loop ");
            result += j; 
        }
    }

    return result; 
}


onmessage = function (event) {
    console.log(event.data);
    let result = looper(event.data.a, event.data.b)

    postMessage({
        result: result
    })
}