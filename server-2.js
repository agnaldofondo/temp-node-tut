var express = require('express');
var app =express();

//this responds with Hello World on the homepage
app.get('/', function (req, res){
    console.log("Got a GET request for the homepage");
    res.send('Hello GET');
})

//This responds a POST request for homepage
app.post('/', function (req, res){
    console.log("Got a POSt request for homepage");
    res.send('Hello POST');
})

//This responds a delete request for the /del_user page
app.delete('/del_user', function (req, res){
    console.log("Got a DELETE request for /del_user");
    res.send('Hello DELETE');
})

//This responds a GET request forr the /list_user page
app.get('/list_user', function(req, res){
    console.log("Got a GET request for /list_user");
    res.send('Page Listing');
})

//This responds a GET request for abcd, abxcd, ab123cd, and so on
app.get('/ab*cd', function(req, res){
    console.log("Got a GET request for /ab*cd");
    res.send('Page Pattern Match');
})

var server = app.listen(8081, function (){
    var host = server.address().address
    var port = server.address().port

    console.log("Example app listening at hhtp://%s:%s", host, port)
})