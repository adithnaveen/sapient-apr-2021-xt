// function overloading number of args should be same 
// + or return type should be different 
function totalLenght2(param1, param2) {
    if (param1 instanceof Number && param2 instanceof Number) {
        return "hello";
    }
    let total = param1.length + param2.length;
    return total;
}
totalLenght2("hello", "hi");
totalLenght2([12, 5, 6, 9], [3, 5, 7]);
totalLenght2("hello", "hi");
class Car {
}
class Maruti extends Car {
}
class Hyundai extends Car {
}
function drive(car) {
    if (car instanceof Maruti) {
        return "Your are driving car Maruti";
    }
    else if (car instanceof Hyundai) {
        return "Your are driving car Hyundai";
    }
}
let maruti = new Maruti();
console.log(drive(maruti));
