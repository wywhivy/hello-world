var database = require('./database');
var express = require('express');
var bodyParser = require('body-parser');
// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({extended: false});

var app = express();

app.post('/insert', urlencodedParser, function (req, res) {
    database.insert(req.body, function (err, result) {
        res.send(err || result);
    });
});

app.post('/update', urlencodedParser, function (req, res) {
    database.update(req.body, function (err, result) {
        res.send(err || result);
    });
});

app.post('/delete', urlencodedParser, function (req, res) {
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
    console.log(filepath);
});

app.use(express.static('src'));

var server = app.listen(3000, function () {
    var serverAddress = server.address();
    console.log('Example app listening at http://%s:%s', serverAddress.address, serverAddress.port);
});