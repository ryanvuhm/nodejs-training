// console.log('Print app018')

var greet = function() {
    console.log("print app018 when it called");
}

module.exports = greet;


// Create a object literal

var person = {
    firstName: 'Hoang',
    age:'23',
    greet: function() {
        console.log('Hello'+' '+ this.firstName + ' '+ this.age);
    }
};

person.greet();
