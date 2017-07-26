var express = require('express');
var app = express();

var comment = "fun!"

app.get("/", function (req, res) {
	res.send('Hello!');
});

app.get("/chocolate", function (req,res) {
	res.send('dark!');
});

app.get('/node', function (req,res) {
	res.send(comment);
});

app.get('/girls', function (req, res) {
	res.send(comment);
});

app.listen(3000, function () {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});
