function greet4() {
    this.greeting = "hello bibi";
    this.greet = function() {
        console.log(this.greeting);
    }
}

module.exports = new greet4();
