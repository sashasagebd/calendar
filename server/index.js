import server from './server.js'; //import actual server
const PORT = 5000;


//Start server
server.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});


