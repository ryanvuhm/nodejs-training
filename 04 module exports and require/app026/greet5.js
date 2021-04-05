function greet5() {
    this.greeting = "hello greet 5";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = greet5;
