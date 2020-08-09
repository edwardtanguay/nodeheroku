const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 3001;

const dbUrl = `mongodb+srv://learn:go2goTime@cluster0.hqjr5.mongodb.net/nodebasics?retryWrites=true&w=majority`;

const Message = mongoose.model('Message', {
	name: String,
	text: String
});

console.log('before');
Message.find({}, (err, messages) => {
	console.log('111');
	console.log(messages);
});
console.log('after');


app.use('/', (req, res) => {
	res.send('this is a node app222');
});
app.listen(process.env.PORT || port, () => {
	console.log(`Listening at: http://localhost:${port}`);
}); 
