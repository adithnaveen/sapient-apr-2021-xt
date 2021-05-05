// to show working of creating an object with inheritance

class Car {
    constructor(doors, engine, color) {
        this.doors = doors; 
        this.engine = engine; 
        this.color = color; 
    }
}

class Suv extends Car {
    constructor(doors, enginee, color, wheelDrive){
        super(doors, enginee, color)
        this.wheelDrive = wheelDrive
    }
}
const ford = new Car(4, "Turbo", "Blue")
console.log(ford);


const suv1 = new Suv(4, "Turbo", "Black", 4)
console.log(suv1);