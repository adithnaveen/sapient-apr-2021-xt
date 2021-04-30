// object de-structuring 
// ref https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment 
let p1 = {
    name:"Naveen", 
    city: "Bengaluru", 
    email: "naveen@gmail.com", 
    address:  {
        hno:123, 
        street:"concord street", 
        state:"KA", 
        country:"IN"
    }
};

let name1 = p1.name
let city1 = p1.city
let email1 = p1.email

console.log(`Name ${name1}, City ${city1}, Email ${email1}`);

// destructuring 
let {name, city, email} = p1; 
console.log(`Name ${name}, City ${city}, Email ${email}`);


let {name:name2, city:city2}  = p1  
console.log(`Name ${name2}, City ${city2}`);

let arr =[23,465,7,8,5,4,3]
let [num1, num2, ...restvalue ] = arr; 

console.log(num1);
console.log(num2);
console.log(restvalue);

let {address} = p1; 
console.log(address);


let {street} = address; 
console.log(street);


// constructing the dynamic object 
let i=0; 
let myarr ={
    [`count${++i}`] : i, 
    [`count${++i}`] : i, 
    [`count${++i}`] : i
}

let {count1, count2, count3} = myarr; 

console.log(count1);
console.log(count2);
console.log(count3);

let [firstName, lastName] = "Deepesh Kumar".split(" ")
console.log("first name : ", firstName);
console.log("last name : ", lastName);

let [ename, , position] = "Deepesh Kumar engineer".split(" "); 
console.log("Ename ", ename);
console.log("Position ", position);
 