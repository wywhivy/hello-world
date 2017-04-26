var database = require('./database');
var express = require('express');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();//application/json parser
// var urlencodedParser = bodyParser.urlencoded({extended: false});//application/x-www-form-urlencoded parser

var app = express();

app.post('/insert', jsonParser, function (req, res) {
    database.insert(req.body, function (err, result) {
        res.send(err || result);
    });
});

app.post('/update', jsonParser, function (req, res) {
    database.update(req.body, function (err, result) {
        res.send(err || result);
    });
});

app.post('/delete', jsonParser, function (req, res) {
    database.delete(req.body, function (err, result) {
        res.send(err || result);
    });
});

app.get('/find', function (req, res) {
    database.find(function (err, result) {
        res.send(err || result);
    });
});

app.get('/node_modules/*', function (req, res) {
    var filepath = require('path').join(__dirname, req.url);
    res.sendFile(filepath);
});

app.use(express.static('src'));

var server = app.listen(3000, function () {
    var serverAddress = server.address();
    console.log('Example app listening at http://%s:%s', serverAddress.address, serverAddress.port);
});