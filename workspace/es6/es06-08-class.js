// working with classes 

class Person {
    constructor(fname, id, city="Bengaluru") {
        this.fname = fname; 
        this.id = id; 
        this.city = city; 
    }

    printPerson() {
        console.log(`Id ${this.id}, Name ${this.fname}, City ${this.city}`);
    }
}

let p1 = new Person("Gautam", 101); 
console.log(p1);
console.log(typeof p1);
p1.printPerson(); 

let p2  = new Person("Navdeep", 102, "Delhi" )
p2.printPerson(); 

let p3 = p2; 
console.log(p3);