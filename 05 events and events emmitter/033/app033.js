// var Emitter = require('./emmiter033.js');
var Emitter = require('events');
var eventConfig = require('./config');


var emt = new Emitter();

// greet is a property name for the property on the obj
emt.on('greet', function() {
    console.log('Hello Ryan, ee');    
});

emt.on(eventConfig.GREET, function() {
    console.log('Nice to see you');
});

console.log('Hi');

emt.emit('greet');
emt.emit(eventConfig.GREET)