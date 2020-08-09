const express = require('express');

const app = express();
const port = 3001;

app.use('/', (req, res) => {
	res.send('this is a node app222');
});
app.listen(process.env.PORT || port, () => {
	console.log(`Listening at: http://localhost:${port}`);
}); 
