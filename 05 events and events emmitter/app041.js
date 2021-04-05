'use strict';

var EventEmitter = require('events');
var util = require('util');

class Greetr extends EventEmitter {
    constructor() {
        super();
        this.greeting = 'Hello Ryan 041';
    }
}

greet(data) {
    console.log(`$ {this.greeting} : ${ data }`);
}

function Greetr() {
    this.greeting = "hello world";
}

util.inherits(Greetr, EventEmitter);

Greetr.prototype.greet = function(data) {
    console.log(this.greeting+': '+ data);
    this.emit('greet',data);
}

var greetr1 = new Greetr();

greetr1.on('greet', function() {
    console.log('Hello 036');
})

greetr1.greet('Hoang')