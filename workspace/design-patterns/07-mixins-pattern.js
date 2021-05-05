// abstract factory pattern 


class Car {
    constructor(doors, engine, color) {
        this.doors = doors; 
        this.engine = engine; 
        this.color = color; 
    }
}

class SUV {
    constructor(groundClearence, noOfSeats, wheelDrive){
        this.groundClearence = groundClearence;
        this.noOfSeats = noOfSeats;
        this.wheelDrive = wheelDrive;
    }
}

class CarFactory {
    createCar(type) {
        switch (type) {
            case "bmw":
                return new Car(4, "Turbo", "Black")
            case "hyundai":
                return new Car(4, "Kappa", "Blue")
            default:
                return null; 
        }
    }
}

class SUVFactory {
    createSuv(type) {
        switch (type) {
            case "x1":
                return new SUV(18, 5, 4)
            case "creta":
                return new SUV(16, 5, 2)
            case "santafe":
                return new SUV(22, 6, 4)
            default:
               return null; 
        }
    }
}


let carMixin = {
    premierSound(){
        console.log("gzzzz gzzzz...");
    },
    normalSound() {
        console.log("wrrrooon.... wrrooonnnn. ");
    },
    hardSound() {
        console.log("WRRR.....WRRROOOMMM.. ")
    }
}


const carFactory = new CarFactory();
const suvFactory = new SUVFactory(); 

const autoManufacturer = (carType, model) => {
    switch (carType) {
        case "car":
            return carFactory.createCar(model)
        case "suv":
            return suvFactory.createSuv(model)
        default:
            break;
    }
}

Object.assign(Car.prototype,carMixin)
Object.assign(SUV.prototype, carMixin)

const x1Car = autoManufacturer("suv", "x1")
console.log(x1Car);
x1Car.premierSound(); 


const bmwCar = autoManufacturer("car", "bmw")
console.log(bmwCar);
bmwCar.normalSound();