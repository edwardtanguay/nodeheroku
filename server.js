const express = require('express');

const app = express();
const port = 3001;

app.use('/', (req, res) => {
	res.send('this is a node app');
});
app.listen(process.env.PORT || 5000, () => {
	console.log(`Listening at: http://localhost:${port}`);
}); 