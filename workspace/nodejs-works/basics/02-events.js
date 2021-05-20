const EventEmitter = require("events"); 
const eventEmitter = new EventEmitter(); 

eventEmitter.on("job1", () => {
    console.log("Event called for Job1")
})
eventEmitter.on("job1", () => {
    console.log("Event called for Job1 again... ")
})
eventEmitter.on("job2", (num1, num2) => {
    console.log(num1 + num2);
})


eventEmitter.emit("job1");
eventEmitter.emit("job2", 10,20); 

console.log(eventEmitter.listenerCount("job1")); 


class Person extends EventEmitter {
    constructor(name, salary) {
        super();
        this.name = name; 
        this.salary = salary; 
    }

    get getName() {return this.name;}
    get getSalary() {return this.salary;}
    set setName(name) {this.name = name;}
    set setSalary (salary) {this.salary = salary;}
}

let p1 = new Person("Ayush", 1234);
let p2 = new Person("Rishab", 2233);

p1.on("person", () => {
    console.log("Name : ", p1.getName, ", Salary : ", p1.getSalary);
})
p2.on("person", () => {
    console.log("Name : ", p2.getName, ", Salary : ", p2.getSalary);
})

p1.emit("person")
console.log("***********************");
p2.emit("person")






