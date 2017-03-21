var express = require('express');
var app = express();

app.get('/', function(req, res) {
	res.send(`Hello ${process.env.USERNAME}`);
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});