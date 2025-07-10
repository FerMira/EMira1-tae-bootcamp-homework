function circleArea(radius: number): number { 
    return Math.PI * (radius * radius);
}

let area = circleArea(2);

console.log( "Area of circle is " + area.toFixed(4) + " square meters" );

const rectanglePerimeter = function(length: number, height: number): number {
    return ((2 * length) + (2 * height));
};

console.log( "Perimeter of rectangle is " + rectanglePerimeter( 2, 5 ) + " meters" );

const cubeVolume = (cubeLength: number): number => cubeLength**3;

console.log( "Volume of the cube is " + cubeVolume(3) + " cubic meters" );

