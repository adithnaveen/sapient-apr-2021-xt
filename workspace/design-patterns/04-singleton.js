

let companyInstance = null; 

class Company{
    constructor(name, location) {
        if(!companyInstance) {
            this.name = name; 
            this.location = location
            companyInstance = this;
        }else {
            return companyInstance
        }
    }
}

class Employee {
    constructor(name, eid, company) {
        this.name = name; 
        this.eid = eid; 
        this.company = company; 
    }
}

let company1 = new Company("PS", "Bengaluru")
let company2 = new Company("PS", "Bengaluru")

console.log(company1 === company2);


let vikash = new Employee("Vikash", 101, company1)
let gautam = new Employee("Gautam", 102, company2)

console.log(vikash);
console.log(gautam);