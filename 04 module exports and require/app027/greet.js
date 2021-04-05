exports = function() {
    console.log('hello 027');
}

console.log(exports);
console.log(module.exports);

// $ node app027.js
// [Function: exports]
// {} => module.exports is an empty obj
