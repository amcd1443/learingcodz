var calculator = require('./ti85');

var sum = calculator.add(4, 5);
console.log(sum);

var difference = calculator.subtract(0, 89);
console.log(difference);

var quotient = calculator.divide(110, 5);
console.log(" this is 110 divided by 5 " + quotient);

var product = calculator.multiply(9, 6);
console.log("this is 9 times 9 " + product);

var rooted = calculator.squareroot(4);
console.log(rooted);

var powered = calculator.power(3, 4);
console.log(powered)

var squared = calculator.square(8);
console.log(squared)


