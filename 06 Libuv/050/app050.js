var fs = require('fs');

// A synchronous function 
var greet = fs.readFileSync(__dirname + '/greet.txt', 'utf8');

console.log(greet);

// A asynchronous function where V8 continue running
var greet2 = fs.readFile(__dirname + '/greet.txt', 'utf8',
function(err, data) {
    console.log(data);
});

// Done go 2nd cause 
console.log('Done!');
