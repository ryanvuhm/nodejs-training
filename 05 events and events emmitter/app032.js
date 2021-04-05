//  Object properties

var obj = {
    greet: "hello"
};

console.log(obj);
console.log(obj.greet);
console.log(obj['greet1s']);
console.log(obj['greet']);

// prop is a name of a value
// prop assign to a string value which created above
var prop = 'greet';
console.log(obj[prop]);


// Function and arrays

var arr = [];

arr.push(function() {
    console.log('Hello gret 023!')
});
arr.push(function() {
    console.log('Hello gret 0231!')
});
arr.push(function() {
    console.log('Hello gret 0232!')
});

arr.forEach(function(item) {
    item();
})