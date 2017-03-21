var express = require('express')
var redis = require("redis");
var app = express();

var client = redis.createClient({
	host: "localhost",
	port: 6379
});

app.get('/', function(req, res) {
	client.get("count", function(err, data) {
		data++;
		client.set("count", data);
		res.send(`data: ${data}`);
	});
});

app.listen(3000, function() {
	console.log('Example app listening on port 3000!');
});