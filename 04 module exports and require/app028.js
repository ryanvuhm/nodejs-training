var util = require('util');

var name = "Ryan";
var greeting = util.format('Hello, &s', name);

util.inspect(greeting);