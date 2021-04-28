// version 1.0
function calculateSalary(salary, tax, incentives) {
    if(tax===undefined) {
        tax = 0 
    }
    if(incentives===undefined) {
        incentives =0
    }
    return salary - tax + incentives; 
}
// version 2
function calculateSalary2(salary, tax, incentives) {
    tax = tax || 0; 
    incentives = incentives || 0; 
    return salary - tax + incentives; 
}
// version 3 
function calculateSalary3(salary, tax=0, incentives=0) {
    return salary - tax + incentives; 
} 

console.log(calculateSalary3(234,undefined, 333))