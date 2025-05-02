function circleArea(radius) {
    return Math.PI * (radius * radius);
}
var area = circleArea(2);
console.log("Area of circle is " + area.toFixed(4) + " square meters");
var rectanglePerimeter = function (length, height) {
    return ((2 * length) + (2 * height));
};
console.log("Perimeter of rectangle is " + rectanglePerimeter(2, 5) + " meters");
var cubeVolume = function (cubeLength) {
    return cubeLength * cubeLength * cubeLength;
};
console.log("Volume of the cube is " + cubeVolume(3) + " cubic meters");
