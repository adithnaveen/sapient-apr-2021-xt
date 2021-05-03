// program to show working for prototypal inhe 

// version 1 
// let car = {
//     move: true, 
//     brake :"you should be able to apply break for car"
// }; 

// let ford = {
//     doors:5, 
//     abs:true
// }; 

// // inherit ford from car 
// ford.__proto__ = car; 



// version 2 

let car = {
    brake :"you should be able to apply break for car",
    speed: 0,  
    move () {
        console.log("The car is moving. @ ", this.speed);
    }, 
    get carSpeed() {
        return this.speed; 
    }, 
    set carSpeed(speed) {
        this.speed = speed; 
    }
}; 

let ford = {
    abs: true, 
    __proto__:car , 
    specifications() {
        console.log("Your ford card specification goes here... ");
    }, 
    move () {
        console.log("The Ford is moving. @ ", this.speed);
    }, 
}

let endeveour = {
    type:"SUV", 
    __proto__ : ford
}

/////////////////////////////////////////////////////////
console.log(car);
car.move(); 
car.carSpeed = 10; 
car.move();
car.carSpeed = 5; 
console.log("Car Speed with Getter: " + car.carSpeed);

/////////////////////////////////////////////////////////
console.log(ford);
ford.move();
ford.carSpeed = 50;
ford.move(); 
ford.carSpeed= 77; 
console.log("Ford Speed with Getter: " + car.carSpeed);

/////////////////////////////////////////////////////////

console.log(endeveour);
endeveour.move(); 
