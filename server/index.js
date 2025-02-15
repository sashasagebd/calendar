const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

//Middleware
app.use(cors());
app.use(express.json());

//Sample route to check server
app.get('/', (req, res) => {
	res.send('LESGOOOOOOOO');
});

//Start server
app.listen(PORT, () => {
	console.log(`Server running on http:/localhost:${PORT}`);
});


