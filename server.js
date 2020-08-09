const express = require('express');

const app = express();
const port = 3001;

app.use('/', (req, res) => {
	res.send('this is a node app');
});
app.listen(port, () => {
	console.log(`Listening at: http://localhost:${port}`);
}); 