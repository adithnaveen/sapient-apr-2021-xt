// interface Shape {
//     area() : void; 
//     draw() : void ;
// }
// abstract class can have abstract methods 
// + concrete methods 
class Shape {
    draw() {
        console.log("you can draw with pen / pencil ");
    }
}
class Rectangle extends Shape {
    // since you have implemented shape you have override 
    area() {
        console.log("LXB");
    }
}
class Circle extends Shape {
    area() {
        console.log("PI * R * R");
    }
}
let r = new Rectangle();
r.draw();
r.area();
let c = new Circle();
c.draw();
c.area();
