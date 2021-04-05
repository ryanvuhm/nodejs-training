var http = require('http');
var fs = require('fs');



http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'application/json' });

    var obj = {
        firstname: 'Ryan',
        lastname: 'Vu'
    };


    res.end(JSON.stringify(obj));


}).listen(1998, '127.0.0.1');

