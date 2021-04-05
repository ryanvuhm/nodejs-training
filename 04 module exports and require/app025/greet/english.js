var greetings = require("./greeting.json");


var greet = function() {
    console.log('Hello normal');
    console.log(greetings.en)
}

module.exports = greet;

