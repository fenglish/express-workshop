const express = require('express');
const app = express();
const formidable = require('express-formidable');
const fs = require('fs');


app.use(express.static("public"));
app.use(formidable());

app.post('/create-post', function (req, res) {

	fs.readFile(__dirname + '/data/posts.json', function (error, file) {
		let currentBlogPosts = JSON.parse(file);
		let timestamp = Date.now();
		let newBlogPost = req.fields.blogpost;
		currentBlogPosts[timestamp] = newBlogPost;
		let allBlogPosts = JSON.stringify(currentBlogPosts);

		fs.writeFile(__dirname + '/data/posts.json', allBlogPosts, function (error) {
		});
	});

});

app.listen(3000, function () {
	console.log('Server is listening on port 3000. Ready to accept requests!');
});
