var express = require('express')
var redis = require("redis");
var app = express();

var client = redis.createClient({
	host: process.env.REDIS_HOST,
	port: process.env.REDIS_POST
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