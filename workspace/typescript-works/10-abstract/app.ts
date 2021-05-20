// interface Shape {
//     area() : void; 
//     draw() : void ;
// }

interface IA {
    hello(): void; 
}

interface IB {
    hi () : void; 
}
// abstract class can have abstract methods 
// + concrete methods 
abstract class Shape {
    abstract area() : void; 
    draw() : void {
        console.log("you can draw with pen / pencil ");
    }
}
class Rectangle extends Shape implements IA, IB{
    // since you have implemented shape you have override 
    area() : void {
        console.log("LXB");
    }
    hello(): void {} 
    hi() : void {} 
}
class Circle extends Shape {
  area() : void {
        console.log("PI * R * R");
    }
}
let r = new Rectangle(); 
r.draw();
r.area(); 
let c = new Circle();
c.draw();
c.area();