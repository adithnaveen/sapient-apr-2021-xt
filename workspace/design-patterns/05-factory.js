// working factory pattern 

class Shape {
    constructor(name){
        this.name = name; 
    }
}

class Circle extends Shape {
    constructor(name, radius){
        super(name)
        this.radius = radius; 
    }
}
class Square extends Shape {
    constructor(name, length) {
        super(name)
        this.length = length; 
    }
}
class Triangle extends Shape {
    constructor(name, lenght, bredth) {
        super(name)
        this.lenght = lenght; 
        this.bredth = bredth; 
    }
}
/*
class ShapeFactory{
    createShape(type){
        switch (type) {
            case "circle":
                return new Shape("Circle")
            case "square":
                return new Shape("Square")
            case "triangle":
                return new Shape("Triangle")
            default:
                return null; 
        }
    }
}
*/ 


class ShapeFactory{
    createShape(type){
        switch (type) {
            case "circle":
                return new Circle("circle", 4);
            case "square":
                return new Square("square", 10);
            case "triangle":
                return new Triangle("triangle", 10,6);
            default:
                return null; 
        }
    }
}


const factory = new ShapeFactory(); 

const triangle = factory.createShape("triangle"); 
console.log(triangle);

const square = factory.createShape("square")
console.log(square);






