function outer() {
    var city ="Bengaluru"
    function fnInnerfunction() {
        return city.toUpperCase()
    }
    return fnInnerfunction()
}

console.log(outer());

///////////////////////////////////////////////// 

function fnRefFunction(num1) {
    return function(num2) {
        return num1 + num2;
    }
}

var fnRefFunction10 = fnRefFunction(10)
var fnRefFunction20 = fnRefFunction(20)

console.log(fnRefFunction10(10)); 
console.log(fnRefFunction20(20)); 

/////////////////////////////////////////////////
// function style 
function sum(val1) {
    return function(val2) {
        return function(val3) {
            return val1 + val2 + val3; 
        }
    }
}

// currying 
console.log(sum(10)(20)(30)); 



// in arrow style 
sum1 =  (val1) => (val2) => (val3) => val1 + val2 + val3
console.log(sum1(10)(20)(30));
 

//////////////////////////////////////////////

function fnCounter() {
    let count = 0; 
    return {
         increment: function() {
             count ++ 
         }, 
         decrement : function() {
             count --
         }, 
         getCount : function() {
             return count
         }
    }
}

let fnc = fnCounter(); 
console.log(fnc);
fnc.increment(); 
fnc.increment(); 
console.log(fnc.getCount());
fnc.decrement(); 
console.log(fnc.getCount());
