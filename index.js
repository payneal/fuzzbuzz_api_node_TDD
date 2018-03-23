'use strict'

const express = require("express");
const bodyParser = require('body-parser');
const FizzBuzz = require("./src/fizzbuzz");
const fizzBuzz = new FizzBuzz();

const PORT = 8080;  
const HOST = 'localhost';

const app = express();

//app.use(bodyParser.json);

app.get('/api', function(req, res, next) {  

    var result = fizzBuzz.get_array_of_numbers(
        req.query.word, req.query.max_value);
       
    if (result == "error") {
        res.status(400);
        res.json({
            status: result,
            numbers: []
        });
    } else {
		res.status(200);
        res.json({
            status: "ok",
            numbers: result
        });
    }
});

app.listen(PORT, HOST);
console.log('Listening on %s:%d...', HOST || '*', PORT);


module.exports = app;
