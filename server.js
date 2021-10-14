var express = require('express');
var app =express();


//Create application/x-www-form-urlencoded parser
app.use(express.urlencoded({extended: true}));
app.use(express.json());

//this responds with Hello World on the homepage
app.use(express.static('public'));
app.get('/index.htm', function (req, res){
    res.sendFile(__dirname + "/" + "index.htm");
})

app.get('/process_post', function (req, res){
    //Prepare output in JSON format
    const response = {
        first_name:req.query.first_name,
        last_name:req.query.last_name
    };
    console.log(response);
    res.end(JSON.stringify(response))
})

var server = app.listen(8081, function () {
    var host = server.address().address
    var port = server.address().port
 
    console.log("Example app listening at http://%s:%s", host, port)
}) 