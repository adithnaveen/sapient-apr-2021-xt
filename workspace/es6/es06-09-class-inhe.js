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

class Employee extends Person  {
    constructor(fname, id, city, project) {
        super(fname, id, city); 
        this.project = project; 
    }

    // overriding the behaviour of parent 
    printPerson() {
        console.log(`Id ${this.id}, Name ${this.fname}, City ${this.city}`);
        console.log("Project " , this.project);
    }
}

emp = new Employee("Ayush", 102, "Bengaluru", "Retail"); 
emp.printPerson()