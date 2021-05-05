// mutable or immutable 
// mutable -> you have the properties which you can change (setters)
// immutable -> once the object is created it cannot change values (only constructors + getter)


class Car {
    constructor(doors, engine, color) {
        this.doors = doors; 
        this.engine = engine; 
        this.color = color; 
    }

    getDoors() {
        return this.doors; 
    }

    getEnginee() {
        return this.engine;
    }
    getColor() {
        return this.color; 
    }
    setDoors(doors) {
        this.doors = doors; 
    }
    setEnginee(engine) {
        this.engine = engine;
    }
    setColor(color){
        this.color = color; 
    }
}

const ford = new Car(4, "Turbo", "Blue"); 
console.log(ford);
console.log("Number of Doors : "+ford.getDoors());
ford.setDoors(5); 
console.log("Number of Doors : "+ford.getDoors());
