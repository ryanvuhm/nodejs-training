var http = require('http');
var fs = require('fs');



http.createServer(function(req, res) {

    res.writeHead(200, { 'Content-Type': 'text/html' });

    var html = fs.readFileSync(__dirname + '/index.html','utf8');

    var message = "You've read the message";
    html = html.replace('{message}', message);

    res.end(html);


}).listen(1998, '127.0.0.1');

