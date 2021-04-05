// Function statement

function greet() {
    console.log('Hi RV');
}

greet();

// Functions are first-class

function logGreeting(func) {
    func();
}
logGreeting(greet);

// Function expressions

var greetMe = function() {
    console.log('Hi Ryan!');
}
greetMe();

// invoke func expressions as a parameter 
// invoke = running code
logGreeting(greetMe);

// Use a func expression on the fly 
logGreeting(function() {
    console.log('Hi HMV!');
});