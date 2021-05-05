// creating object as singleton 

let carInstance = null; 

class Car {
    constructor(doors, engine, color) {
        if(!carInstance){
            this.doors = doors; 
            this.engine = engine; 
            this.color = color; 
            carInstance = this
        }else {
            return carInstance
        }
    }
}

let ford = new Car(4, "Turbo", "Blue")
let toyota = new Car(4, "V6", "Red")
console.log(ford);
console.log(toyota);
console.log(carInstance);