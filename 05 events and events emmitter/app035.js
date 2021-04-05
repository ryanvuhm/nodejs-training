var person = {
    firstname: '',
    lastname: '',
    greet: function() {
        return this.firstname + ' '+ this.lastname;
    }
}

var RV = Object.create(person);
RV.firstname = 'Ryan';
RV.lastname = 'Vu';

var Hoang = Object.create(person);
Hoang.firstname = 'Hoang';
Hoang.lastname = 'Vu';

console.log(RV.greet());
console.log(Hoang.greet());