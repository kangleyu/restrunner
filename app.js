var express = require('express');

var app = express();
app.use(express.static(__dirname + '/static'));

app.listen("8081");
console.log("Application is listenning on port: 8081");