// arrays with some advance function 

let names= ["Rishab", "Manish", "Aishwarya", "Priyanka", "Amit", "Kumar"];

// iterating all elements 
names.forEach(name => {
    console.log(name.charAt(0));
})

// better version - version 1 
let namesFirstChar = names.map((name) => {return name.charAt(0)})
console.log(namesFirstChar);

// better version - version 2
 namesFirstChar = names.map((name) => name.charAt(0)).forEach(val => {
     console.log("- " +val);
 })
console.log(namesFirstChar);

let indexPos = names.findIndex(name => name==="Manish")
console.log(indexPos);

let newNames = names.filter(name => name.length > 4)
console.log(newNames);


