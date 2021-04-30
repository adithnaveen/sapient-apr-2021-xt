// working with rest and spread  operator 

let nums =[34,6,67,33,66,88,123]

console.log(nums);

let newNums = [100, 200, ...nums]
console.log(newNums);

let newNums1 = newNums; 
console.log("newNums1 : ", newNums1);
newNums1.push(1000);
console.log("newNums : ", newNums);


let address ={city:"Chennai", country:"India"}
let person = {name:"Gautam", email:"gautam@ps.com", ...address}

console.log(person);
let person1 = {...person}; 
person.age = 22; 
console.log(person1);
console.log(person1 === person ); // this will give you false as objects are different