import { Shape } from './Shape';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';

let myShape = new Shape(10, 15);
let myCircle = new Circle(3, 4, 5);
let myRectangle = new Rectangle(0, 0, 3, 7);

//delcare an array of shapes
let theShapes: Shape[] = [];

//add the shapes to the array
theShapes.push(myShape);
theShapes.push(myCircle);
theShapes.push(myRectangle);

for (let shape of theShapes) {
    console.log(shape.getInfo());
}

