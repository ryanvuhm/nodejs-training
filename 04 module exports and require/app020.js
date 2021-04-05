// Create a func constructor

function person(firstName, lastName) {

    this.a = firstName;
    this.lastName = lastName;
}

person.prototype.greet = function() {
    console.log('Hello '+ this.a + ' ' +this.lastName)
};

var Hoang = new person('Hoang','Vu');

console.log(Hoang.firstName);
Hoang.greet();

var Ryan = new person('HMB',"as");
Ryan.greet();

console.log(Ryan.__proto__);