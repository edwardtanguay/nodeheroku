const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const port = 3001;

// app.use(express.static(__dirname));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

const dbUrl = `mongodb+srv://learn:go2goTime@cluster0.hqjr5.mongodb.net/nodebasics?retryWrites=true&w=majority`;



const Message = mongoose.model('Message', {
	name: String,
	text: String
});


app.get('/', (req, res) => {

	console.log('here');
	Message.find({}, (err, messages) => {
		console.log(messages[0]);
		res.send(messages[0].name);
	});
});


mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
	if (err) {
		console.log('mongo db connection error:', err);
	}
	console.log('mongo db connection: success');

	const server = http.listen(process.env.PORT || port, () => {
		console.log(`Listening on port ${server.address().port}...`);
	});
});