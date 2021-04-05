var express = require('express');
var bodyParser = require('body-parser'); 

var app = express();

var port = process.env.PORT || 3000;

// create application/json parser
var jsonParser = bodyParser.json()

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false })


// adding middleware to use static file
// in this case is a css file in public folder
app.use('/assets', express.static(__dirname + '/public'));


// use ejs
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
})

app.use('/', function(req, res, next){
    console.log('Request Url:'+ req.url);
    next();
})

app.get('/', function(req, res) {
    res.send('<html><head><link href=assets/style.css type=text/css rel=stylesheet /></head><body><h1>Hello world!</h1></body></html>');
})

app.get('/person/:id', function(req, res) {
	res.render('person', { ID: req.params.id, Qstr: req.query.qstr });
    // res.send('<html><head></head><body><h1>Person: '+ req.params.id +'</h1></body></html>');
})

app.post('/person',urlencodedParser, function(req, res) {
	res.send('Thank you!');
    console.log(req.body.firstName);
    console.log(req.body.lastName); 
})

app.post('/personjson', jsonParser, function(req, res) {
    res.send('Thank you for the JSON data')
    console.log(req.body.firstName);
    console.log(req.body.lastName); 
});

app.get('/api', function(req, res){

    res.json({
        firstName : 'Ryan',
        lastName  : 'Vu'
    });
});

app.listen(port);