function greet(callback) {
    console.log('Hello!');

    var data = {
        name: 'Ryan',

    }
    callback(data);
}

greet(function(data) {
    console.log('The callback was invoked')
    console.log(data);
})

greet(function(data) {
    console.log('The callback was invoked twice')
    console.log(data.name);
})