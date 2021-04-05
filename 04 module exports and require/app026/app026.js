var greet = require('./greet.js');

greet();

var greet2 = require('./greet2.js');

greet2.greet();

// greet is a method in export object
// require function return an object
var greet3 = require('./greet2.js').greet;

greet3();


// Create a new constructor function in greet4.js
// Then return it to app026.js
var greet4 = require('./greet4.js');

greet4.greet();
greet4.greeting = ('Changed this line in greet 4');

var greetx4 = require('./greet4.js');

greetx4.greet();

// return a new constructor function
// Then create a new function 
var greet5 = require('./greet5.js');
var greet5print = new greet5();

// Uncaught TypeError: greet5.greet is not a function
// greet5.greet();

greet5print.greet();

// 
var greet6 = require('./greet6.js').greet6;
greet6();