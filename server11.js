const http = require('http');
const server = 
http.createServer((req, res) => {
	res.write ("yes");
	res.end();
});

server.listen(3000, () => {
	console.log("running");
});
